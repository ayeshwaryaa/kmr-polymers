"use client";

import { useState } from "react";
import { PIPE_PRODUCTS, PipeProduct, COMPANY_DETAILS } from "@/data/products";
import { Check, MessageSquare } from "lucide-react";

export function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Agricultural & Potable",
    "Casing Pipes",
    "SWR Pipes",
    "UGD Pipes",
    "Electrical Conduits",
  ];

  const filtered =
    activeTab === "ALL"
      ? PIPE_PRODUCTS
      : PIPE_PRODUCTS.filter((p) => p.category === activeTab);

  const getWhatsAppLink = (productName: string) => {
    const msg = encodeURIComponent(
      `Hello KMR Polymers, I want to inquire about availability and pricing for: ${productName}.`
    );
    return `https://wa.me/919849055466?text=${msg}`;
  };

  return (
    <section id="catalog" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1">
            {COMPANY_DETAILS.brandName} Lineup
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Product Specifications & Grades
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                activeTab === cat
                  ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filtered.map((pipe: PipeProduct) => (
          <div
            key={pipe.id}
            className="flex flex-col justify-between border border-slate-200/90 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {pipe.category}
                </span>
                {pipe.certification && (
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {pipe.certification}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {pipe.name}
              </h3>

              <div className="my-4 p-3 rounded-lg bg-slate-50 border border-slate-100 font-mono text-xs">
                <span className="text-slate-400 block text-[10px] uppercase font-sans font-semibold mb-0.5">
                  Available Dimensions
                </span>
                <span className="text-slate-800 font-medium">{pipe.sizes}</span>
              </div>

              <div className="mb-4">
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Key Advantages
                </h4>
                <ul className="space-y-1.5">
                  {pipe.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Applications
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {pipe.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Ready for dispatch</span>
              <a
                href={getWhatsAppLink(pipe.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Inquire WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}