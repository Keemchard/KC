import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const certificates = [
  {
    image: "/images/cert/SQME cert image.png",
    title: "Web Developer Intern",
    subtitle: "Certificate",
    issuer: "SQME Professionals Inc.",
    year: "2022",
    color: "from-orange-900/80",
  },
  {
    image: "/images/cert/web-dev - cert.jpg",
    title: "Web Development",
    subtitle: "Certificate of Training",
    issuer: "TESDA × MINDTECH",
    year: "2021",
    color: "from-blue-900/80",
  },
  {
    image: "/images/cert/creativeweb-design - cert.jpg",
    title: "Creative Web Design",
    subtitle: "Certificate of Training",
    issuer: "TESDA × MINDTECH",
    year: "2021",
    color: "from-violet-900/80",
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="py-16 md:py-20 bg-dark/[0.015] dark:bg-white/[0.015]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8">
          <span className="section-label">Credentials</span>
          <h2 className="section-heading section-heading-accent">CERTIFICATES</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden
                         shadow-lg hover:shadow-2xl hover:shadow-primary/10
                         hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Background image */}
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Always-visible bottom gradient with title */}
              <div className={`absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t ${cert.color} to-transparent`} />

              {/* Year pill top-right */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md
                              text-white text-xs font-bold px-3 py-1 rounded-full
                              border border-white/30">
                {cert.year}
              </div>

              {/* Always-visible title at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-white font-bold text-base leading-snug">{cert.title}</p>
                <p className="text-white/70 text-xs font-medium">{cert.subtitle}</p>
              </div>

              {/* Hover overlay — full details */}
              <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm
                              flex flex-col items-center justify-center p-6 text-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <ArrowRight size={18} className="text-primary" />
                </div>
                <p className="text-white font-bold text-lg leading-snug mb-1">{cert.title}</p>
                <p className="text-white/60 text-sm mb-4">{cert.subtitle}</p>
                <div className="w-8 h-0.5 bg-primary mx-auto mb-4" />
                <p className="text-white/80 text-sm font-medium">{cert.issuer}</p>
                <span className="mt-4 text-xs font-bold text-primary bg-primary/10
                                 border border-primary/30 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>

<div className="text-center mt-8">
          <Link href="/certificates" className="btn-primary">
            See All Certificates
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
