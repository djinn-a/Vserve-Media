
import { ScrollImageSequence } from "@/components/ScrollImageSequence";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
    
      {/* Mobile-Only Scroll-Driven Image Sequence Sticky Section */}
      <ScrollImageSequence />

   
    </main>
  );
}
