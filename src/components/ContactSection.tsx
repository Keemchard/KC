"use client";

import {
  Download,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const contactLinks = [
  {
    icon: Linkedin,
    label: "keemchard-tamio-498447228/",
    href: "https://www.linkedin.com/in/keemchard-tamio-498447228/",
  },
  {
    icon: Github,
    label: "github.com/Keemchard",
    href: "https://github.com/Keemchard",
  },
  {
    icon: Facebook,
    label: "Keemchard Tamio",
    href: "https://web.facebook.com/keemchard.tamio.1",
  },
  {
    icon: Twitter,
    label: "@kmchrd",
    href: "https://twitter.com/kmchrd",
  },
  {
    icon: Mail,
    label: "keemchardtamio@gmail.com",
    href: "mailto:keemchardtamio@gmail.com",
  },
  {
    icon: Phone,
    label: "09686646782",
    href: "tel:09686646782",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 pb-24 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <span className="section-label">Get in touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-dark/60 dark:text-white/60 mt-3 mb-5 leading-relaxed text-sm">
              Have a project in mind or just want to say hello? My inbox is always open.
            </p>

            <a
              href="/resume/RESUME - KEEMCHARD TAMIO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mb-8"
            >
              <Download size={18} />
              Download Resume
            </a>

            <div className="space-y-0.5 mt-5">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-dark/5
                             dark:hover:bg-white/5 text-dark dark:text-white/80
                             hover:text-primary transition-all duration-300 group"
                >
                  <Icon size={18} className="shrink-0 text-primary" />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-semibold text-base text-dark dark:text-white mb-4">
              Send a Message
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold tracking-wide text-dark/50 dark:text-white/40 uppercase mb-1.5 block"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200
                             dark:border-white/10 rounded-xl text-dark dark:text-white
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                             transition-all duration-200 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold tracking-wide text-dark/50 dark:text-white/40 uppercase mb-1.5 block"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200
                             dark:border-white/10 rounded-xl text-dark dark:text-white
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                             transition-all duration-200 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold tracking-wide text-dark/50 dark:text-white/40 uppercase mb-1.5 block"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200
                             dark:border-white/10 rounded-xl text-dark dark:text-white
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                             transition-all duration-200 text-sm resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
