import sattvaLogo from "@/assets/sattva-logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#eeeae0] text-foreground pt-16 md:pt-20 pb-8 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-10 md:gap-20 mb-14">
        {/* Left Section */}
        <div className="flex-1 max-w-sm flex flex-col items-start gap-4">
          <img
            src={sattvaLogo}
            alt="Sattva logo"
            className="w-24 md:w-28 mix-blend-multiply opacity-90 -ml-2"
          />

          <h3 className="font-serif text-lg md:text-xl font-medium tracking-tight text-foreground/90">
            Clarity Before Care.
          </h3>

          <p className="text-sm text-foreground/60 leading-relaxed pr-2">
            Your gentle healthcare companion. Integrating modern health tools
            with Ayurveda to help you confidently take the first step towards
            healing.
          </p>
        </div>

        {/* Right Columns */}
        <div className="flex-[1.5] grid grid-cols-2 md:grid-cols-3 gap-8 md:pt-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 mb-2">
              Product
            </h4>
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-[#84740f] transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-[#84740f] transition-colors"
            >
              How it works
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 mb-2">
              Company
            </h4>
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-[#84740f] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-[#84740f] transition-colors"
            >
              Vision
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 mb-2">
              Contact
            </h4>
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-[#84740f] transition-colors"
            >
              Email
            </a>
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-[#84740f] transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40 border-t border-foreground/5 pt-6">
        <p>© 2026 Sattva. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#84740f] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#84740f] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
