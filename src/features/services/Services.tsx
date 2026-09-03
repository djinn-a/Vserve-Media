import React from "react";
import { ServiceCard, ServiceData } from "./ServiceCard";

const servicesData: ServiceData[] = [
  {
    id: "01",
    title: "Video",
    description: "High-end visual content, commercial production, and digital assets crafted to elevate your brand story.",
    image: "/images/lifestyle-4.jpg",
  },
  {
    id: "02",
    title: "Shoot",
    description: "Strategic positioning, identity design, and holistic brand development for modern businesses.",
    image: "/images/lifestyle-5.jpg",
  },
  {
    id: "03",
    title: "Design",
    description: "Data-driven campaigns, audience targeting, and measurable digital growth strategies.",
    image: "/images/lifestyle-6.jpg",
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
