"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface SpecialTextProps {
  children: string;
  speed?: number;
  delay?: number;
  className?: string;
  inView?: boolean;
  once?: boolean;
}

const RANDOM_CHARS = "{}[]()<>/\\|=+*&^%$#@!~;:.";

function getRandomChar(prevChar?: string): string {
  let char: string;
  do {
    char = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
  } while (char === prevChar);
  return char;
}

export function SpecialText({
  children,
  speed = 40,
  delay = 0,
  className = "",
  inView = false,
  once = true,
}: SpecialTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(containerRef, { once, margin: "-100px" });
  const text = children;
  const shouldAnimate = (inView ? isInView : true) && prefersReducedMotion !== true;
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!shouldAnimate) return;

    let phase: "scramble" | "reveal" = "scramble";
    let step = 0;
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      setDisplayText(" ".repeat(text.length));

      intervalId = window.setInterval(() => {
        if (phase === "scramble") {
          const currentLength = Math.min(step + 1, text.length);
          const chars: string[] = [];

          for (let i = 0; i < currentLength; i++) {
            chars.push(getRandomChar(i > 0 ? chars[i - 1] : undefined));
          }
          for (let i = currentLength; i < text.length; i++) {
            chars.push("\u00A0");
          }

          setDisplayText(chars.join(""));
          step += 1;

          if (step >= text.length * 2) {
            phase = "reveal";
            step = 0;
          }
          return;
        }

        const revealedCount = Math.floor(step / 2);
        const chars = text.slice(0, revealedCount).split("");

        if (revealedCount < text.length) {
          chars.push(step % 2 === 0 ? "_" : getRandomChar());
        }
        while (chars.length < text.length) {
          chars.push(getRandomChar(chars.at(-1)));
        }

        setDisplayText(chars.join(""));
        step += 1;

        if (step >= text.length * 2) {
          setDisplayText(text);
          if (intervalId !== undefined) window.clearInterval(intervalId);
        }
      }, speed);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [delay, shouldAnimate, speed, text]);

  return (
    <span ref={containerRef} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-flex font-mono">
        {prefersReducedMotion ? text : displayText}
      </span>
    </span>
  );
}
