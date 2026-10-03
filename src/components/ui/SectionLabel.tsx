interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="font-mono text-xs text-accent tracking-widest uppercase">
      {children}
    </span>
  );
}
