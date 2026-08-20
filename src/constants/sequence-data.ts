export const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzEyMTIzNSIgLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iIzFmMWYyOCIgLz48L3N2Zz4=";

export interface SequenceImage {
  id: number;
  src: string;
  alt: string;
  objectPosition: string;
  priority: boolean;
  blurDataURL: string;
}

export const SEQUENCE_IMAGES: SequenceImage[] = [
  {
    id: 1,
    src: "/images/lifestyle-1.jpg",
    alt: "Image 1",
    objectPosition: "center center",
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    id: 2,
    src: "/images/lifestyle-2.jpg",
    alt: "Image 2",
    objectPosition: "center 30%",
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    id: 3,
    src: "/images/lifestyle-3.jpg",
    alt: "Image 3",
    objectPosition: "center center",
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    id: 4,
    src: "/images/lifestyle-4.jpg",
    alt: "Image 4",
    objectPosition: "center 40%",
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    id: 5,
    src: "/images/lifestyle-5.jpg",
    alt: "Image 5",
    objectPosition: "center center",
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    id: 6,
    src: "/images/lifestyle-6.jpg",
    alt: "Image 6",
    objectPosition: "center 60%",
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    id: 7,
    src: "/images/lifestyle-7.jpg",
    alt: "Image 7",
    objectPosition: "center center",
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    id: 8,
    src: "/images/lifestyle-8.jpg",
    alt: "Image 8",
    objectPosition: "center 30%",
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  }
];
