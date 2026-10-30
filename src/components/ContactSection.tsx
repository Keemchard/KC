"use client";

import {
  Download,
  Linkedin,
  Github,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const contactLinks = [
  { icon: Phone,    label: "+63 968 664 6782",            href: "tel:09686646782" },
  { icon: Mail,     label: "keemchard.tamio@gmail.com",   href: "mailto:keemchardtamio@gmail.com" },
  { icon: Github,   label: "github.com/keemchard",       href: "https://github.com/Keemchard" },
  { icon: Linkedin, label: "/keemchard-tamio",            href: "https://www.linkedin.com/in/keemchard-tamio-498447228/" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 pb-24 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">

          {/* Left — Heading + CTA */}
          <div className="md:col-span-4">
            <span className="section-label">Get in touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-dark dark:text-white tracking-tight leading-[1.1]">
              Let&apos;s Work{" "}
              <span className="text-primary">Together</span>
            </h2>
            <p className="text-dark/50 dark:text-white/40 mt-4 mb-6 leading-relaxed text-sm">
              Have a project in mind or just want to say hello?
              I&apos;d love to hear from you. Feel free to reach out anytime.
            </p>
            <a
              href="/resume/RESUME - KEEMCHARD TAMIO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Middle — Contact links */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-dark/60 dark:text-white/50
                             hover:text-dark dark:hover:text-white transition-colors duration-300 group"
                >
                  <Icon size={18} className="shrink-0 text-dark/30 dark:text-white/25 group-hover:text-primary transition-colors" />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-5">
            <p className="font-semibold text-sm text-dark dark:text-white mb-4">
              Send a Message
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-3"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-white/[0.04]
                             border border-dark/[0.08] dark:border-white/[0.08]
                             rounded-xl text-dark dark:text-white placeholder:text-dark/30 dark:placeholder:text-white/25
                             focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/15
                             transition-all duration-200 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-white/[0.04]
                             border border-dark/[0.08] dark:border-white/[0.08]
                             rounded-xl text-dark dark:text-white placeholder:text-dark/30 dark:placeholder:text-white/25
                             focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/15
                             transition-all duration-200 text-sm"
                />
              </div>

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                required
                className="w-full px-4 py-3 bg-white dark:bg-white/[0.04]
                           border border-dark/[0.08] dark:border-white/[0.08]
                           rounded-xl text-dark dark:text-white placeholder:text-dark/30 dark:placeholder:text-white/25
                           focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/15
                           transition-all duration-200 text-sm resize-none"
              />

              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
