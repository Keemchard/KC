import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const certificates = [
  {
    image: "/images/cert/SQME cert image.png",
    title: "Web Developer Intern Certificate",
    issuer: "SQME Professionals Inc.",
    quote: "My Personal Growth Internship",
    year: "2022",
  },
  {
    image: "/images/cert/web-dev - cert.jpg",
    title: "Web Development Certificate of Training",
    issuer: "TESDA × MINDTECH Training Development Institute, Inc.",
    quote: "Front End & Back End web development training",
    year: "2021",
  },
  {
    image: "/images/cert/creativeweb-design - cert.jpg",
    title: "Creative Web Design Certificate of Training",
    issuer: "TESDA × MINDTECH Training Development Institute, Inc.",
    quote: "Front End & UI/UX design training",
    year: "2021",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <main className="min-h-screen pt-16 md:pt-20 pb-24 md:pb-0">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-dark/50 dark:text-white/40
                       hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div>
            <span className="section-label">Credentials</span>
            <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-6">
              My Certificates
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="group bg-white dark:bg-white/[0.04] border border-gray-100
                           dark:border-white/[0.06] rounded-3xl overflow-hidden
                           hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5
                           hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                  <span
                    className="absolute bottom-3 left-4 text-white font-bold text-xs
                               bg-primary px-2.5 py-1 rounded-full"
                  >
                    {cert.year}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col gap-2">
                  <h3 className="font-bold text-dark dark:text-white text-sm leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-dark/50 dark:text-white/40 leading-relaxed">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-primary italic mt-auto pt-2 border-t border-gray-100 dark:border-white/5">
                    &ldquo;{cert.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
