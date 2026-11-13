"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import {
  User,
  FolderOpen,
  Award,
  Paperclip,
  MessageSquare,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/#hero", section: "hero", icon: User },
  {
    label: "Projects",
    href: "/#projects",
    section: "projects",
    icon: FolderOpen,
  },
  {
    label: "Certs",
    href: "/#certificates",
    section: "certificates",
    icon: Award,
  },
  {
    label: "Resume",
    href: "/resume/RESUME - KEEMCHARD TAMIO.pdf",
    section: "",
    icon: Paperclip,
    external: true,
  },
  {
    label: "Contact",
    href: "/#contact",
    section: "contact",
    icon: MessageSquare,
  },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 60);

      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setInHero(heroBottom > 64);
      }

      const midpoint = window.innerHeight * 0.5;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]"),
      );
      let best = "";
      for (const sec of sections) {
        if (sec.getBoundingClientRect().top <= midpoint) best = sec.id;
      }
      if (best) setActive(best);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Desktop */}
      <nav
        className={`hidden md:flex fixed top-0 w-full z-50 transition-colors duration-150
          ${
            inHero
              ? "bg-transparent"
              : scrolled
                ? "bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl shadow-sm"
                : "bg-light-bg dark:bg-dark-bg"
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-20 h-16 flex items-center justify-between w-full">
          <Link
            href="/"
            className={`text-lg font-semibold tracking-[0.15em] transition-colors duration-150
              ${
                inHero
                  ? "text-white hover:text-white/80"
                  : "text-dark dark:text-white hover:text-primary"
              }`}
          >
            kc
          </Link>

          <div className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = !!item.section && active === item.section;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={"external" in item ? "_blank" : undefined}
                  rel={"external" in item ? "noopener noreferrer" : undefined}
                  onClick={() => {
                    if (item.section) setActive(item.section);
                  }}
                  className={`relative text-sm font-medium pb-1 transition-colors duration-150
                    ${
                      inHero
                        ? isActive
                          ? "text-white"
                          : "text-white/50 hover:text-white/80"
                        : isActive
                          ? "text-dark dark:text-white"
                          : "text-dark/40 dark:text-white/35 hover:text-dark/70 dark:hover:text-white/60"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}

            {/* <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
                ${
                  inHero
                    ? "text-white/50 hover:text-white"
                    : "text-dark/35 dark:text-white/35 hover:text-dark dark:hover:text-white"
                }`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button> */}
          </div>
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav
        className={`md:hidden fixed top-0 w-full z-50 transition-colors duration-150
          ${
            inHero && !menuOpen
              ? "bg-transparent"
              : "bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl shadow-sm"
          }`}
      >
        <div className="flex items-center justify-between px-6 h-14">
          <Link
            href="/"
            onClick={closeMenu}
            className={`text-lg font-semibold tracking-[0.15em] transition-colors duration-150
              ${
                inHero && !menuOpen
                  ? "text-white hover:text-white/80"
                  : "text-dark dark:text-white hover:text-primary"
              }`}
          >
            kc
          </Link>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-150
              ${
                inHero && !menuOpen
                  ? "text-white/70 hover:text-white"
                  : "text-dark/50 dark:text-white/50 hover:text-dark dark:hover:text-white"
              }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Dropdown menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="px-6 pb-6 flex flex-col gap-1 border-t border-dark/[0.06] dark:border-white/[0.06] pt-4">
            {navItems.map((item) => {
              const isActive = !!item.section && active === item.section;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={"external" in item ? "_blank" : undefined}
                    rel={"external" in item ? "noopener noreferrer" : undefined}
                    onClick={() => {
                      if (item.section) setActive(item.section);
                      closeMenu();
                    }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                      ${
                        isActive
                          ? "text-dark dark:text-white bg-dark/[0.05] dark:bg-white/[0.05]"
                          : "text-dark/45 dark:text-white/40 hover:text-dark/80 dark:hover:text-white/70 hover:bg-dark/[0.03] dark:hover:bg-white/[0.03]"
                      }`}
                  >
                    <item.icon size={16} />
                    {item.label}
                    {isActive && (
                      <span className="ml-auto w-1 h-1 rounded-full bg-primary" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
