"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme, type Theme } from "./ThemeProvider";
import { User, FolderOpen, Award, Paperclip, MessageSquare, Sun, Moon, Leaf, Globe } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "About",    href: "/#hero",         section: "hero",         icon: User },
  { label: "Projects", href: "/#projects",     section: "projects",     icon: FolderOpen },
  { label: "Certs",    href: "/#certificates", section: "certificates", icon: Award },
  { label: "Resume",   href: "/resume/RESUME - KEEMCHARD TAMIO.pdf", section: "", icon: Paperclip, external: true },
  { label: "Contact",  href: "/#contact",      section: "contact",      icon: MessageSquare },
];

const themeOptions: { value: Theme; label: string; icon: React.ElementType; description: string }[] = [
  { value: "dark",          label: "Dark",          icon: Moon,  description: "Classic dark" },
  { value: "light",         label: "Light",         icon: Sun,   description: "Clean light" },
  { value: "green-luxury",  label: "Green Luxury",  icon: Leaf,  description: "Emerald & gold" },
  { value: "globe-telecom", label: "Globe Telecom", icon: Globe, description: "Navy & blue" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [themeOpen, setThemeOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLLIElement>(null);
  const mobileDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 20);

      const trigger = window.innerHeight * 0.3;
      let best = "";
      let bestDist = Infinity;

      document.querySelectorAll<HTMLElement>("section[id]").forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        const dist = Math.abs(top - trigger);
        if (top <= trigger + 10 && dist < bestDist) {
          bestDist = dist;
          best = sec.id;
        }
      });

      if (best) setActive(best);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = desktopDropdownRef.current?.contains(target);
      const insideMobile = mobileDropdownRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) setThemeOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const CurrentIcon = themeOptions.find((t) => t.value === theme)?.icon ?? Moon;

  const personalThemes = themeOptions.filter((t) => t.value !== "globe-telecom");
  const workThemes     = themeOptions.filter((t) => t.value === "globe-telecom");

  const ThemeGroup = ({ label, options }: { label: string; options: typeof themeOptions }) => (
    <>
      <div className="px-4 pt-3 pb-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-dark/30 dark:text-white/25">
          {label}
        </span>
      </div>
      {options.map((opt) => {
        const isActive = theme === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => { setTheme(opt.value); setThemeOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-all duration-150
              ${isActive
                ? "bg-primary/8 text-primary"
                : "text-dark/70 dark:text-white/60 hover:bg-dark/5 dark:hover:bg-white/5 hover:text-dark dark:hover:text-white"
              }`}
          >
            <span className={`flex-shrink-0 p-1.5 rounded-lg ${isActive ? "bg-primary/15" : "bg-dark/5 dark:bg-white/5"}`}>
              <opt.icon size={14} />
            </span>
            <span className="flex-1">
              <span className="block font-semibold leading-tight">{opt.label}</span>
              <span className="block text-[11px] opacity-50 mt-0.5">{opt.description}</span>
            </span>
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            )}
          </button>
        );
      })}
    </>
  );

  const ThemeDropdown = () => (
    <div className="absolute right-0 bottom-full md:bottom-auto md:top-full mt-0 md:mt-2 mb-2 md:mb-0
                    w-52 rounded-2xl overflow-hidden z-50
                    bg-white dark:bg-[#1a1628]
                    border border-gray-100 dark:border-white/10
                    shadow-2xl dark:shadow-black/60 pb-2">
      <ThemeGroup label="Personal" options={personalThemes} />
      <div className="mx-4 my-2 border-t border-gray-100 dark:border-white/8" />
      <ThemeGroup label="Work" options={workThemes} />
    </div>
  );

  return (
    <>
      {/* Desktop top bar */}
      <nav
        className={`hidden md:flex fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl shadow-md"
            : "bg-light-bg dark:bg-dark-bg"
          }`}
      >
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-xl font-bold text-dark dark:text-white hover:text-primary transition-colors"
          >
            KEEMCHARD
          </Link>

          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = !!item.section && active === item.section;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-dark dark:text-white/70 hover:text-primary hover:bg-dark/5 dark:hover:bg-white/5"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li ref={desktopDropdownRef} className="relative ml-2">
              <button
                onClick={() => setThemeOpen((v) => !v)}
                aria-label="Change theme"
                aria-expanded={themeOpen}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${themeOpen
                    ? "text-primary bg-primary/10"
                    : "text-dark/50 dark:text-white/50 hover:text-primary hover:bg-dark/5 dark:hover:bg-white/5"
                  }`}
              >
                <CurrentIcon size={16} />
                <span className="text-xs">Theme</span>
              </button>
              {themeOpen && <ThemeDropdown />}
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50
                   bg-white dark:bg-[#1a1628]
                   border-t border-gray-200 dark:border-white/10
                   shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      >
        <ul className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const isActive = !!item.section && active === item.section;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl
                              transition-all duration-200 min-w-[52px]
                              ${isActive
                                ? "text-primary"
                                : "text-dark/40 dark:text-white/40"
                              }`}
                >
                  <item.icon size={20} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}

          <li ref={mobileDropdownRef} className="relative">
            <button
              onClick={() => setThemeOpen((v) => !v)}
              aria-label="Change theme"
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl
                         min-w-[52px] transition-all duration-200
                         ${themeOpen ? "text-primary" : "text-dark/40 dark:text-white/40"}`}
            >
              <CurrentIcon size={20} />
              <span className="text-[10px] font-medium">Theme</span>
            </button>
            {themeOpen && <ThemeDropdown />}
          </li>
        </ul>
      </nav>
    </>
  );
}
