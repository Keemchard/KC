import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keemchard Tamio | Software Engineer",
  description: "Portfolio of Keemchard Tamio — Software Engineer & Front-End Developer",
  icons: { icon: "/images/personal/KC-LOGO.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-light-bg dark:bg-dark-bg transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
