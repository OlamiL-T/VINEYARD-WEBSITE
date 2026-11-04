import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}
export function ButtonLink({
  children,
  tone = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & {
  tone?: "primary" | "outline" | "light";
  children: ReactNode;
}) {
  return (
    <Link {...props} className={`button button--${tone} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  id: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children && <div className="section-description">{children}</div>}
    </div>
  );
}
export function FoundationCard({
  number,
  name,
  id,
  children,
}: {
  number: string;
  name: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <article className="foundation-card" id={id}>
      <span className="card-number" aria-hidden="true">
        {number}
      </span>
      <p className="eyebrow">Independent foundation</p>
      <h3>{name}</h3>
      <div className="card-description">{children}</div>
      <p className="editorial-label">
        Profile awaiting organizational approval
      </p>
    </article>
  );
}
export function Notice({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <aside className="notice">
      <strong>{title}</strong>
      <p>{children}</p>
    </aside>
  );
}
export function TextField({
  label,
  hint,
  error,
  id,
  ...props
}: ComponentProps<"input"> & {
  label: string;
  hint?: string;
  error?: string;
  id: string;
}) {
  const describedBy =
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") ||
    undefined;
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {props.required && <span> (required)</span>}
      </label>
      {hint && (
        <p className="field-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      <input
        {...props}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
