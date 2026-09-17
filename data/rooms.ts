/**
 * Room inventory used by both the listing and dynamic detail pages.
 *
 * Images are referenced from the browser URL, so the matching files should be
 * placed in public/images/pg. Keeping this data in one file means pricing and
 * availability stay consistent everywhere the room appears.
 */
export type RoomType = "Single" | "Double Sharing" | "Triple Sharing";
export type AvailabilityStatus = "Available now" | "Few left" | "Waitlist";

export type Room = {
  id: string;
  slug: string;
  name: string;
  type: RoomType;
  price: number;
  occupancy: string;
  facilities: string[];
  availability: AvailabilityStatus;
  images: string[];
};

export const rooms: Room[] = [
  {
    id: "room-single-deluxe",
    slug: "single-deluxe",
    name: "Single Deluxe Room",
    type: "Single",
    price: 18500,
    occupancy: "1 resident",
    facilities: ["Queen bed", "Study desk", "Private balcony", "Attached bathroom", "Wardrobe"],
    availability: "Available now",
    images: ["/10.jpeg", "/2.jpeg", "/3.jpeg"],
  },
  {
    id: "room-double-comfort",
    slug: "double-sharing-comfort",
    name: "Double Sharing Comfort",
    type: "Double Sharing",
    price: 12500,
    occupancy: "2 residents",
    facilities: ["Two single beds", "Shared study zone", "Large windows", "Attached bathroom", "Personal storage"],
    availability: "Few left",
    images: ["/2.jpeg", "/12.jpeg", "/13.jpeg"],
  },
  {
    id: "room-triple-smart",
    slug: "triple-sharing-smart",
    name: "Triple Sharing Smart",
    type: "Triple Sharing",
    price: 9800,
    occupancy: "3 residents",
    facilities: ["Three single beds", "Individual study desks", "Bright common area", "Attached bathroom", "Personal storage"],
    availability: "Available now",
    images: ["/1.jpeg", "/3.jpeg", "/6.jpeg"],
  },
  {
    id: "room-double-premium",
    slug: "double-sharing-premium",
    name: "Double Sharing Premium",
    type: "Double Sharing",
    price: 14500,
    occupancy: "2 residents",
    facilities: ["Two single beds", "Work-from-home desks", "Sunlit window seat", "Attached bathroom", "Extra storage"],
    availability: "Waitlist",
    images: ["/16.jpeg", "/5.jpeg", "/8.jpeg"],
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
