export type GalleryImage = {
  src: string;
  alt: string;
  category: "Rooms" | "Common areas" | "Property";
};

/**
 * Local gallery manifest. Add future files to public/images/pg and this list
 * remains the single source of truth for the gallery page.
 */
export const galleryImages: GalleryImage[] = [
  { src: "/main1.jpeg", alt: "Harbor House exterior", category: "Property" },
  { src: "/main2.jpeg", alt: "Single deluxe room", category: "Rooms" },
  { src: "/homage.jpeg", alt: "Bright shared common area", category: "Common areas" },
  { src: "/homep.jpeg", alt: "Double sharing room", category: "Rooms" },
  { src: "/homepage.jpeg", alt: "Shared dining area", category: "Common areas" },
  { src: "/13.jpeg", alt: "Triple sharing room", category: "Rooms" },
  { src: "/2.jpeg", alt: "Quiet study area", category: "Common areas" },
  { src: "/6.jpeg", alt: "Property garden", category: "Property" },
  { src: "/16.jpeg", alt: "Property garden", category: "Property" },
  { src: "/12.jpeg", alt: "Property garden", category: "Property" },
  { src: "/9.jpeg", alt: "Property garden", category: "Property" },
  { src: "/7.jpeg", alt: "Property garden", category: "Property" },
];
