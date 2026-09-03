import Image from "next/image";
import Link from "next/link";
import Portfolio from "@/features/portfolio/Portfolio";

export default function PortfolioPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black">
      
      {/* Hero / Breadcrumb Banner */}
      <section className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-24">
        
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/lifestyle-7.jpg"
            alt="Vserve Media Portfolio"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-3">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-white/70 text-sm md:text-base font-light tracking-wide flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <span className="text-white/40">→</span>
            <span className="text-white" aria-current="page">Portfolio</span>
          </nav>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white leading-tight">
            Portfolio
          </h1>
        </div>
      </section>

      {/* Portfolio Section */}
      <div className="pt-4 pb-12">
        <Portfolio />
      </div>

    </main>
  );
}
