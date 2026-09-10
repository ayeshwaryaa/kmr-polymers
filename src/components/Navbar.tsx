import { Phone } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/products";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white px-6 sm:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Clickable Brand / Logo -> Scrolls to Top */}
        <a
          href="#"
          className="flex items-center gap-3 group cursor-pointer transition-opacity hover:opacity-90"
          aria-label="Scroll to top"
        >
          <span className="text-lg font-black tracking-tight text-white">
            KMR <span className="text-emerald-400">POLYMERS</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 border-l border-slate-700 pl-3">
            {COMPANY_DETAILS.brandName}
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#catalog"
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors hidden sm:block"
          >
            Pipes Catalog
          </a>
          <a
            href={`tel:${COMPANY_DETAILS.phones[0]}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> Call Sales
          </a>
        </div>
      </div>
    </nav>
  );
}