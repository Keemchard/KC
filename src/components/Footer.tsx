export default function Footer() {
  return (
    <footer className="border-t border-dark/[0.06] dark:border-white/[0.06] py-6 md:py-8 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <span className="font-bold text-dark dark:text-white text-lg tracking-[0.08em]">
          kc
        </span>
        <p className="text-dark/30 dark:text-white/20 text-xs">
          &copy; {new Date().getFullYear()} Keemchard Tamio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
