import { Award, Phone, ShieldCheck, MapPin, Layers, CheckCircle2 } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/products";

export function Hero() {
  return (
    <header className="relative bg-slate-950 text-white pt-20 pb-20 px-6 sm:px-12 border-b border-slate-800 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Verification badge strip */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> BIS Certified: {COMPANY_DETAILS.standard}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            CM/L: {COMPANY_DETAILS.bisLicense} • TM No: {COMPANY_DETAILS.tradeMarkNo}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl">
          Precision-Extruded <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            uPVC & UGD Pipe Solutions
          </span>
        </h1>

        <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          Manufactured by <strong>{COMPANY_DETAILS.name}</strong> under the prestigious{" "}
          <strong className="text-emerald-400">{COMPANY_DETAILS.brandName}</strong> banner in Kamareddy. 
          Installed annual production capacity of {COMPANY_DETAILS.capacity}, serving agriculture, infrastructure, 
          borewells, and drainage systems.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#catalog"
            className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-emerald-500/20"
          >
            Browse Pipe Portfolio ({COMPANY_DETAILS.sizeRange})
          </a>
          <a
            href={`tel:${COMPANY_DETAILS.phones[0]}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400" /> Direct Sales Inquiry
          </a>
        </div>

        {/* Metric Badges */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800/80">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Installed Capacity</span>
            <p className="text-sm font-bold text-white mt-1">{COMPANY_DETAILS.capacity}</p>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Size Range</span>
            <p className="text-sm font-bold text-white mt-1">{COMPANY_DETAILS.sizeRange}</p>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Factory Works</span>
            <p className="text-sm font-bold text-white mt-1">Kamareddy, Telangana</p>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Sales Office</span>
            <p className="text-sm font-bold text-white mt-1">Quthbullapur, Hyderabad</p>
          </div>
        </div>
      </div>
    </header>
  );
}