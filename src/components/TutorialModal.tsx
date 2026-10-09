"use client";

import { useState, useEffect } from "react";
import { useTheme, type Theme } from "./ThemeProvider";
import { Moon, Sun, Leaf, Globe, X, ChevronRight, ChevronLeft, Briefcase, User2 } from "lucide-react";

const THEMES: {
  value: Theme;
  label: string;
  icon: React.ElementType;
  description: string;
  group: "general" | "work";
  bg: string;
  accent: string;
}[] = [
  { value: "dark",          label: "Dark",          icon: Moon,  description: "Classic dark",    group: "general", bg: "#191624", accent: "#ff3c00" },
  { value: "light",         label: "Light",         icon: Sun,   description: "Clean light",     group: "general", bg: "#f5f8f9", accent: "#ff3c00" },
  { value: "green-luxury",  label: "Green Luxury",  icon: Leaf,  description: "Emerald & gold",  group: "general", bg: "#030d07", accent: "#c9a84c" },
  { value: "globe-telecom", label: "Globe Telecom", icon: Globe, description: "Navy & blue",     group: "work",    bg: "#00122D", accent: "#0070CC" },
];

const STEPS = ["welcome", "how-it-works", "pick-theme"] as const;

export default function TutorialModal() {
  const [visible, setVisible] = useState(false);
  const [step, setStep]       = useState(0);
  const [picked, setPicked]   = useState<Theme | null>(null);
  const { setTheme }          = useTheme();

  useEffect(() => {
    if (!localStorage.getItem("tutorial-seen")) {
      const t = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(t);
    }
  }, []);

  const close = (applyTheme = true) => {
    if (applyTheme && picked) setTheme(picked);
    localStorage.setItem("tutorial-seen", "true");
    setVisible(false);
  };

  const next = () => step < STEPS.length - 1 ? setStep(s => s + 1) : close();
  const back = () => setStep(s => Math.max(0, s - 1));

  if (!visible) return null;

  const generalThemes = THEMES.filter(t => t.group === "general");
  const workThemes    = THEMES.filter(t => t.group === "work");
  const isLastStep    = step === STEPS.length - 1;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 sm:p-6">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-md"
        onClick={() => close(false)}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-md
                   bg-white dark:bg-[#1c1828]
                   rounded-3xl shadow-2xl
                   border border-gray-100 dark:border-white/10
                   overflow-hidden animate-fade-in-up"
      >
        {/* Progress strip */}
        <div className="h-0.5 bg-dark/5 dark:bg-white/5">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>

        <div className="p-6 sm:p-8">

          {/* Close */}
          <button
            onClick={() => close(false)}
            aria-label="Close"
            className="absolute top-5 right-5 p-1.5 rounded-full
                       text-dark/25 dark:text-white/25
                       hover:text-dark dark:hover:text-white
                       hover:bg-dark/5 dark:hover:bg-white/5
                       transition-all duration-200"
          >
            <X size={15} />
          </button>

          {/* Step dots */}
          <div className="flex gap-1.5 mb-6">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === step   ? "w-7 bg-primary" :
                  i < step     ? "w-4 bg-primary/40" :
                                 "w-4 bg-dark/10 dark:bg-white/10"
                }`}
              />
            ))}
          </div>

          {/* ── Step 0: Welcome ── */}
          {step === 0 && (
            <div className="space-y-3">
              <div className="text-4xl select-none">👋</div>
              <h2 className="text-xl font-bold text-dark dark:text-white">
                Welcome to my Portfolio
              </h2>
              <p className="text-sm text-dark/55 dark:text-white/50 leading-relaxed">
                Before you dive in, here&apos;s something unique about this site.
              </p>
              <p className="text-sm text-dark/55 dark:text-white/50 leading-relaxed">
                It has a{" "}
                <span className="text-primary font-semibold">theme system</span>{" "}
                that goes beyond just colors — the <span className="font-medium text-dark/80 dark:text-white/70">projects you see</span>{" "}
                actually change depending on which theme you choose.
              </p>
            </div>
          )}

          {/* ── Step 1: How it works ── */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-dark dark:text-white mb-1">
                Themes change your projects
              </h2>
              <p className="text-sm text-dark/50 dark:text-white/40 mb-5">
                There are two categories of themes.
              </p>

              <div className="grid grid-cols-2 gap-3">

                {/* General themes */}
                <div className="rounded-2xl border border-gray-100 dark:border-white/8 p-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <User2 size={12} className="text-dark/30 dark:text-white/25" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-dark/30 dark:text-white/25">
                      General
                    </span>
                  </div>
                  <div className="space-y-2 mb-3">
                    {generalThemes.map(t => (
                      <div key={t.value} className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: t.accent }}
                        />
                        <span className="text-xs text-dark/60 dark:text-white/50">{t.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2.5 border-t border-gray-100 dark:border-white/8">
                    <span className="text-[10px] text-dark/35 dark:text-white/25 leading-snug">
                      Shows your personal projects
                    </span>
                  </div>
                </div>

                {/* Work themes */}
                <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <Briefcase size={12} className="text-primary/50" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
                      Work
                    </span>
                  </div>
                  <div className="space-y-2 mb-3">
                    {workThemes.map(t => (
                      <div key={t.value} className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: t.accent }}
                        />
                        <span className="text-xs text-dark/60 dark:text-white/50">{t.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2.5 border-t border-primary/10">
                    <span className="text-[10px] text-primary/45 leading-snug">
                      Shows projects from that job
                    </span>
                  </div>
                </div>

              </div>

              <p className="mt-4 text-[11px] text-dark/35 dark:text-white/25 text-center leading-relaxed">
                e.g. selecting <span className="text-primary/60 font-medium">Globe Telecom</span> shows all products I built while working there
              </p>
            </div>
          )}

          {/* ── Step 2: Pick theme ── */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-dark dark:text-white mb-1">
                Pick a theme to start
              </h2>
              <p className="text-sm text-dark/50 dark:text-white/40 mb-5">
                You can change it anytime from the navbar.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {THEMES.map(t => {
                  const Icon = t.icon;
                  const isSelected = picked === t.value;
                  return (
                    <button
                      key={t.value}
                      onClick={() => setPicked(t.value)}
                      className={`relative flex items-center gap-3 p-3.5 rounded-2xl text-left
                                  border-2 transition-all duration-200
                                  ${isSelected
                                    ? "border-primary shadow-lg shadow-primary/20"
                                    : "border-gray-100 dark:border-white/8 hover:border-primary/30"
                                  }`}
                      style={isSelected ? { background: `${t.bg}CC` } : undefined}
                    >
                      {/* Theme preview */}
                      <span
                        className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
                        style={{ background: t.bg, boxShadow: `0 0 0 2px ${t.accent}50` }}
                      >
                        <Icon size={15} style={{ color: t.accent }} />
                      </span>

                      <span className="flex-1 min-w-0">
                        <span className={`block text-xs font-semibold truncate ${isSelected ? "text-white" : "text-dark dark:text-white"}`}>
                          {t.label}
                        </span>
                        <span className={`block text-[10px] truncate ${isSelected ? "text-white/60" : "text-dark/40 dark:text-white/30"}`}>
                          {t.description}
                        </span>
                      </span>

                      {/* Work badge */}
                      {t.group === "work" && (
                        <span
                          className="absolute top-2 right-2 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                          style={{ background: `${t.accent}25`, color: t.accent }}
                        >
                          Work
                        </span>
                      )}

                      {/* Selected indicator */}
                      {isSelected && (
                        <span className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-primary" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={back}
              className={`flex items-center gap-1 text-sm font-medium transition-all duration-200
                ${step === 0
                  ? "invisible pointer-events-none"
                  : "text-dark/35 dark:text-white/30 hover:text-dark dark:hover:text-white"
                }`}
            >
              <ChevronLeft size={15} />
              Back
            </button>

            <button
              onClick={next}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold
                         bg-primary text-white shadow-lg shadow-primary/30
                         hover:shadow-primary/50 hover:-translate-y-0.5
                         active:scale-95 transition-all duration-200"
            >
              {isLastStep ? "Let's Go" : "Next"}
              {!isLastStep && <ChevronRight size={15} />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
