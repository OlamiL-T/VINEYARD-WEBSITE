"use client";
import Link from "next/link";
import { Arrow } from "./ui";
import { useEffect, useRef, useState } from "react";
const links = [
  ["The foundations", "/#foundations"],
  ["Our approach", "/#approach"],
  ["Get involved", "/#get-involved"],
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (
        !nav.current?.contains(event.target as Node) &&
        !trigger.current?.contains(event.target as Node)
      )
        setOpen(false);
    }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 800px)");
    const close = () => setOpen(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Vineyard foundations home"
        >
          Vineyard<span>Two foundations. A shared digital home.</span>
        </Link>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          ref={nav}
          id="primary-navigation"
          aria-label="Primary"
          className={`primary-nav ${open ? "is-open" : ""}`}
          onBlur={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget) &&
              event.relatedTarget !== trigger.current
            )
              setOpen(false);
          }}
        >
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            className="nav-cta"
            href="/#giving"
            onClick={() => setOpen(false)}
          >
            Support our mission <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}
