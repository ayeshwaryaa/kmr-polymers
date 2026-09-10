"use client";

import { useState } from "react";
import { PIPE_PRODUCTS, PipeProduct, COMPANY_DETAILS } from "@/data/products";
import { MessageSquare, Check, Sparkles, Layers } from "lucide-react";

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
    <section id="catalog" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Factory Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Product Range & Specifications
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Manufactured to IS 4985:2000 standards under brand{" "}
            <span className="font-semibold text-slate-900">{COMPANY_DETAILS.brandName}</span>. Ready stock available for quick dispatch across Telangana.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 shadow-sm ${
                activeTab === cat
                  ? "bg-emerald-600 text-white shadow-emerald-200 ring-2 ring-emerald-600 ring-offset-2"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pipe: PipeProduct) => (
            <div
              key={pipe.id}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-7">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {pipe.standardLength && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {pipe.standardLength}
                    </span>
                  )}
                  {pipe.grade && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {pipe.grade}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {pipe.name}
                </h3>

                {/* Size banner */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Sizes
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 font-mono">
                    {pipe.sizes}
                  </span>
                </div>

                {/* Applications */}
                <div className="mt-5">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2">
                    Recommended For
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pipe.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2.5">
                    Key Features
                  </span>
                  <ul className="space-y-2">
                    {pipe.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <a
                  href={`https://wa.me/919849055466?text=${encodeURIComponent(
                    `Hello KMR Polymers, I would like to inquire about wholesale pricing and ready stock for: ${pipe.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm group-hover:shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                  Request Dealer Price on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}