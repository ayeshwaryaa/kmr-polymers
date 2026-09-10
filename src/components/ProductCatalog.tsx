"use client";

import { useState } from "react";
import { PIPE_PRODUCTS, PipeProduct, COMPANY_DETAILS } from "@/data/products";
import { MessageSquare, CheckCircle2 } from "lucide-react";

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

  return (
    <section id="catalog" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Header & Category Filters */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
            {COMPANY_DETAILS.brandName} Factory Inventory
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Commercial Grades & Available Stock
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                activeTab === cat
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm"
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filtered.map((pipe: PipeProduct) => (
          <div
            key={pipe.id}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm"
          >
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {pipe.standardLength && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/20">
                    {pipe.standardLength}
                  </span>
                )}
                {pipe.grade && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300">
                    {pipe.grade}
                  </span>
                )}
                {pipe.certification && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 border border-slate-800">
                    {pipe.certification}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white tracking-tight">
                {pipe.name}
              </h3>

              {/* Practical Use Context */}
              <div className="mt-3 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                <strong className="text-emerald-400 block mb-1">Recommended Applications:</strong>
                <p className="text-slate-400">
                  {pipe.applications.join(" • ")}
                </p>
              </div>

              {/* Available Sizes Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">Available Sizes:</span>
                <strong className="text-slate-200 font-mono text-right">{pipe.sizes}</strong>
              </div>

              {/* Key Highlights */}
              <div className="mt-4">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Quality & Performance
                </h4>
                <ul className="space-y-1.5">
                  {pipe.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Factory Inquiry CTA */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={`https://wa.me/919849055466?text=${encodeURIComponent(
                  `Hello, I would like to request wholesale rates and ready stock availability for ${pipe.name}${
                    pipe.grade ? ` (${pipe.grade})` : ""
                  }.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Request Dealer Price on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}