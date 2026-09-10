import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 px-6 sm:px-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
        <div>
          <h3 className="text-white font-bold text-base tracking-tight mb-2">
            {COMPANY_DETAILS.name}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Leading manufacturer of certified uPVC, SWR, UGD, and casing pipes under the registered brand{" "}
            <span className="text-emerald-400 font-semibold">{COMPANY_DETAILS.brandName}</span>.
          </p>
          <div className="mt-4 text-xs font-mono text-slate-400 space-y-1">
            <p>BIS Licence: <span className="text-slate-200 font-semibold">{COMPANY_DETAILS.bisLicense}</span></p>
            <p>Trade Mark No: <span className="text-slate-200 font-semibold">{COMPANY_DETAILS.tradeMarkNo}</span></p>
            <p>Conforming Standard: <span className="text-slate-200 font-semibold">{COMPANY_DETAILS.standard}</span></p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
            Facilities & Presence
          </h4>
          <div className="space-y-3.5 text-xs text-slate-400">
            {/* Factory Works Google Maps Link */}
            <a
              href="https://maps.google.com/?q=Plot+No+30+IDA+Kamareddy+Telangana+503111"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2.5 p-2 -mx-2 rounded-lg transition-colors hover:bg-slate-900/80"
              title="Open Factory Works in Google Maps"
            >
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="leading-relaxed">
                <span className="text-slate-200 font-medium inline-flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
                  Factory Works <ExternalLink className="w-3 h-3 opacity-60" />
                </span>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {COMPANY_DETAILS.worksAddress}
                </p>
              </div>
            </a>

            {/* Sales Office Google Maps Link */}
            <a
              href="https://maps.google.com/?q=Plot+No+302+B+Bhagyalaxmi+Colony+Suchitra+Road+Quthbullapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2.5 p-2 -mx-2 rounded-lg transition-colors hover:bg-slate-900/80"
              title="Open Sales Office in Google Maps"
            >
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="leading-relaxed">
                <span className="text-slate-200 font-medium inline-flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                  Sales Office <ExternalLink className="w-3 h-3 opacity-60" />
                </span>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {COMPANY_DETAILS.salesOffice}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
            Direct Contact
          </h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="flex flex-col gap-1">
                <a href={`tel:${COMPANY_DETAILS.phones[0]}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phones[0]}
                </a>
                <a href={`tel:${COMPANY_DETAILS.phones[1]}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phones[1]}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
        <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
        <p className="font-mono text-[11px] text-slate-600">IS 4985 : 2000 Latest Amendments</p>
      </div>
    </footer>
  );
}