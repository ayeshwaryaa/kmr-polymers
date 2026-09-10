import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-emerald-400 selection:text-slate-950">
      <Navbar />
      <Hero />
      <ProductCatalog />
      <Footer />
    </main>
  );
}