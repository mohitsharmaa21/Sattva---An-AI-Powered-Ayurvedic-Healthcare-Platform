import { useState, useEffect } from "react";
import sattvaLogo from "@/assets/sattva-logo.png";

export default function Navbar({
  onNavigate,
}: {
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out">
      <div
        className={`flex items-center gap-3 md:gap-8 rounded-[2rem] transition-all duration-700 ease-out ${scrolled
            ? "px-5 md:px-7 py-3 bg-card/90 backdrop-blur-2xl shadow-[0_8px_40px_-8px_hsl(var(--foreground)/0.12)]"
            : "px-6 md:px-10 py-4 bg-card/70 backdrop-blur-xl shadow-[0_4px_24px_-4px_hsl(var(--foreground)/0.08)]"
          }`}
      >
        <img
          src={sattvaLogo}
          alt="Sattva"
          className={`rounded-full object-cover transition-all duration-700 ${scrolled ? "w-8 h-8" : "w-10 h-10"}`}
        />
        <span
          className={`font-serif text-foreground font-medium tracking-wide transition-all duration-700 ${scrolled ? "text-base" : "text-lg"}`}
        >
          Sattva
        </span>

        <div className="hidden sm:flex items-center gap-5 ml-1">
          <div className="w-px h-4 bg-border" />
          <a
            href="#symptoms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Journey
          </a>
          <a
            href="#discovery"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Product
          </a>
          <a
            href="#"
            onClick={(e) => onNavigate?.(e, "/ayurveda")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Ayurveda
          </a>
          <a
            href="#"
            onClick={(e) => onNavigate?.(e, "/blogs")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Blogs
          </a>
        </div>

        <div className="w-px h-4 bg-border hidden sm:block" />

        <a
          href="#"
          onClick={(e) => onNavigate?.(e, "/consultation")}
          className={`rounded-2xl px-5 whitespace-nowrap font-medium bg-primary text-primary-foreground hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ${scrolled ? "px-4 py-1.5 text-sm" : "px-5 py-2 text-sm"
            }`}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
