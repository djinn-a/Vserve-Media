import { ScrollImageSequence } from "@/components/ScrollImageSequence";
import DialImage from "@/features/dial-img-change/dialImage";
import FAQ from "@/features/faq/FAQ";
import FeatureVideoGallery from "@/features/feature-video-gallery/FeatureVideoGallery";
import AboutUs from "@/features/about-us/AboutUs";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">

      {/* Mobile-Only Scroll-Driven Image Sequence Sticky Section */}
      <ScrollImageSequence id="first-sequence" startIndex={0} endIndex={5} />

      {/* NEW: Feature Video Gallery */}
      <FeatureVideoGallery />

      {/* NEW: About Us Section */}
      <AboutUs />

      {/* Scroll-Driven Image + Dial Section */}
      <DialImage />

      {/* NEW: FAQ Section */}
      <FAQ />

    </main>
  );
}
