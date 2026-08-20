
import { ScrollImageSequence } from "@/components/ScrollImageSequence";
import ScrollImageSequenceReverse from "@/components/ScrollImageSequenceReverse/ScrollImageSequenceReverse";
import DialImage from "@/features/dial-img-change/dialImage";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">

      {/* Mobile-Only Scroll-Driven Image Sequence Sticky Section */}
      <ScrollImageSequence />

      {/* Scroll-Driven Image + Dial Section */}
      <DialImage />


      {/* Reversed Scroll-Driven Image Sequence Sticky Section */}
      <ScrollImageSequenceReverse />

    </main>
  );
}
