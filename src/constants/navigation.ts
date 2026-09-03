export interface NavigationLink {
  label: string;
  href: string;
  image?: string;
}

export const primaryNavigation: NavigationLink[] = [
  { label: "Home", href: "/", image: "/images/lifestyle-1.jpg" },
  { label: "About", href: "/about", image: "/images/lifestyle-2.jpg" },
  { label: "Services", href: "/services", image: "/images/lifestyle-3.jpg" },
  { label: "Portfolio", href: "/portfolio", image: "/images/lifestyle-4.jpg" },
  { label: "Contact Us", href: "/contact", image: "/images/lifestyle-5.jpg" },
];
