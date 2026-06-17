interface TechBadgeProps {
  label: string;
  className?: string;
}

/**
 * Mono-set pill for a single technology or stack item. Mono type here
 * is doing real signaling work — it marks the content as "literal/technical"
 * (a stack name, a spec) the same way Apple's tech-spec tables use a
 * distinct, code-like type treatment for numbers and model names.
 */
export function TechBadge({ label, className = "" }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-glass-border bg-glass px-3 py-1 font-mono text-xs text-ink-muted ${className}`}
    >
      {label}
    </span>
  );
}
