"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type Page = "about" | "work";

const socialLinks = [
  {
    href: "mailto:hi@azizulwahid.com",
    label: "Email",
    content: (
      <svg aria-hidden="true" className="fill-icon" viewBox="0 0 20 20">
        <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
        <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
      </svg>
    )
  },
  {
    href: "https://twitter.com/azizulwahid_",
    label: "Twitter",
    content: (
      <svg aria-hidden="true" className="fill-icon" viewBox="0 0 24 24">
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.958 4.958 0 0 0 2.163-2.723 9.738 9.738 0 0 1-3.127 1.184 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.64 3.162a4.822 4.822 0 0 0-.665 2.475 4.92 4.92 0 0 0 2.188 4.096 4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417A9.867 9.867 0 0 1 1.17 19.61c-.39 0-.779-.023-1.17-.067a13.945 13.945 0 0 0 7.557 2.209c9.054 0 14-7.496 14-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.412-2.548z" />
      </svg>
    )
  },
  {
    href: "https://github.com/azizulwahid",
    label: "GitHub",
    content: (
      <svg aria-hidden="true" className="fill-icon" viewBox="0 0 24 24">
        <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.465-2.382 1.235-3.222-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.46 11.46 0 0 1 3.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.628-5.475 5.922.42.36.81 1.096.81 2.215 0 1.6-.015 2.887-.015 3.277 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    )
  },
  {
    href: "https://www.linkedin.com/in/azizulwahid",
    label: "LinkedIn",
    content: (
      <svg aria-hidden="true" className="fill-icon" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.446-2.136 2.94v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
      </svg>
    )
  }
];

const navItems: Array<{ href: string; label: string; page: Page }> = [
  { href: "/", label: "About", page: "about" },
  { href: "/work/", label: "Work", page: "work" }
];

export function SiteShell({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const normalizedPathname =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const activePage: Page = normalizedPathname === "/work" ? "work" : "about";
  const [dotPage, setDotPage] = useState<Page>(activePage);
  const [dotVisible, setDotVisible] = useState(true);

  useEffect(() => {
    if (activePage === dotPage) {
      setDotVisible(true);
      return;
    }

    setDotVisible(false);
    const timeout = window.setTimeout(() => {
      setDotPage(activePage);
      window.requestAnimationFrame(() => setDotVisible(true));
    }, 170);

    return () => window.clearTimeout(timeout);
  }, [activePage, dotPage]);

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div className="mark-block">
            <Link className="mark" href="/" aria-label="Azizul Wahid home">
              <img alt="" src="/logo.svg" />
            </Link>
            <h1 className="mobile-title">
              <Link href="/">Azizul Wahid</Link>
            </h1>
          </div>

          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                aria-current={item.page === activePage ? "page" : undefined}
                className={[
                  item.page === activePage ? "active" : "",
                  item.page === dotPage && dotVisible ? "dot-active" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
                href={item.href}
                key={item.href}
              >
                <span aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <main className="main">
        <h1 className="site-title">
          <Link href="/">Azizul Wahid</Link>
        </h1>

        <div className="content">{children}</div>

        <footer className="site-footer">
          <span>© 2026 Azizul Wahid.</span>
          <ul aria-label="Social links">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a aria-label={link.label} href={link.href}>
                  {link.content}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </main>
    </div>
  );
}
