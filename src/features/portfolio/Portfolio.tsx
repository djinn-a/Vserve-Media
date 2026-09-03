import React from "react";
import { PortfolioCard, PortfolioData } from "./PortfolioCard";

const portfolioData: PortfolioData[] = [
  {
    id: 1,
    title: "Success Stories All In Action",
    category: "Data Analytics",
    image: "/images/lifestyle-8.jpg",
  },
  {
    id: 2,
    title: "Global Reach Campaign",
    category: "Brand Strategy",
    image: "/images/lifestyle-1.jpg",
  },
  {
    id: 3,
    title: "Visual Identity Redesign",
    category: "Creative Direction",
    image: "/images/lifestyle-4.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={item.id} portfolio={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
