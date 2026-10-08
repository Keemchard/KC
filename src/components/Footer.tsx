export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/5 py-6 md:py-8 pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <span className="font-black text-primary text-lg tracking-widest">
          KEEMCHARD
        </span>
        <p className="text-dark/40 dark:text-white/30 text-center">
          &copy; {new Date().getFullYear()} Keemchard Tamio. All rights
          reserved.
        </p>
        {/* <p className="text-dark/40 dark:text-white/30">Made with Next.js</p> */}
      </div>
    </footer>
  );
}
