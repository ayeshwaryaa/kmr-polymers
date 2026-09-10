import { ShieldCheck, Phone, ArrowRight, Truck, CheckCircle2 } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/products";

export function Hero() {
  return (
    <header className="relative bg-slate-950 text-white pt-16 pb-16 px-6 sm:px-12 border-b border-slate-800 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Certification strip */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            BIS Certified (IS 4985 : 2000)
          </span>
          <span className="text-xs text-slate-400 font-mono">
            Licence: {COMPANY_DETAILS.bisLicense} • Brand: {COMPANY_DETAILS.brandName}
          </span>
        </div>

        {/* Human-grounded Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl">
          Heavy-Duty PVC & uPVC Pipes <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Built for Borewells & Irrigation
          </span>
        </h1>

        {/* Authentic Business Description */}
        <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
          Manufactured directly at our Kamareddy industrial facility. Supplying certified, 
          crack-resistant casing, agricultural, and drainage pipes to dealers, contractors, and farmers across Telangana.
        </p>

        {/* Direct Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-emerald-500/20"
          >
            Check Available Sizes ({COMPANY_DETAILS.sizeRange})
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`tel:${COMPANY_DETAILS.phones[0]}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            Call Factory Sales
          </a>
        </div>

        {/* Practical Value Highlights */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
              Annual Capacity
            </span>
            <p className="text-base font-bold text-white mt-1">{COMPANY_DETAILS.capacity}</p>
            <span className="text-[11px] text-slate-500">Kamareddy Unit</span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
              Size Range
            </span>
            <p className="text-base font-bold text-white mt-1">{COMPANY_DETAILS.sizeRange}</p>
            <span className="text-[11px] text-slate-500">Ready Stock</span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
              Direct Supply
            </span>
            <p className="text-base font-bold text-white mt-1">Kamareddy & Hyderabad</p>
            <span className="text-[11px] text-slate-500">Factory Rates</span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
              Quality Mark
            </span>
            <p className="text-base font-bold text-white mt-1">100% Virgin Grade</p>
            <span className="text-[11px] text-slate-500">Pressure Tested</span>
          </div>
        </div>
      </div>
    </header>
  );
}