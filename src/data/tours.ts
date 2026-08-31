import naivasha from "@/assets/blt 7.webp";
import tsavo from "@/assets/blt 16.webp";
import olpejeta from "@/assets/saf.webp";
import samburu from "@/assets/tour-serengeti.jpg";
import diani from "@/assets/bush.webp";
import nairobi from "@/assets/blt 15.webp";
import maasaiMara from "@/assets/home.webp";
import kenyaSafari from "@/assets/kenya.webp";
import tourKenya from "@/assets/kenya.webp";
import underStars from "@/assets/understars.png";
import buffalo from "@/assets/ultimate.jpeg";
import meru from "@/assets/nsafari.webp";
import liosaba from "@/assets/nairobisafari.webp";
import beach from "@/assets/bush.webp";
import mara from "@/assets/governer.webp";
import honeymoon from "@/assets/moons.webp";
import tsafari from "@/assets/tsafari.jpeg";

export type ItineraryDay = {
  day: string;
  title: string;
  bullets: string[];
  stay?: string;
};

export type Tour = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  durationDays: number;
  group: string;
  type: "Package tour" | "Private tour" | "Group tour" | "Daily tour";
  img: string;
  highlights: string;
  price: number;
  rating: number;
  reviews: number;
  overview: string[];
  included: string[];
  excluded: string[];
  itinerary?: ItineraryDay[];
};

const DEFAULT_INCLUDED = [
  "Professional English-speaking driver-guide",
  "All park entry fees and government taxes",
  "4x4 Landcruiser with pop-up roof and game-viewing windows",
  "Accommodation as per the itinerary",
  "All meals as specified (breakfast, lunch, dinner)",
  "Bottled drinking water in the vehicle",
  "Airport transfers",
];

const DEFAULT_EXCLUDED = [
  "International flights and visas",
  "Travel and medical insurance",
  "Gratuities for guides and lodge staff",
  "Soft and alcoholic drinks",
  "Personal items, laundry and phone calls",
  "Optional activities (balloon flights, cultural visits)",
];

const DAY_TRIP_INCLUDED = [
  "Professional English-speaking driver-guide",
  "Park entry fees and government taxes",
  "Transport in a comfortable 4x4 or safari van with pop-up roof",
  "Bottled drinking water",
  "Hotel pickup and drop-off (within city limits)",
];

const DAY_TRIP_EXCLUDED = [
  "Meals (unless specified)",
  "Tips and gratuities",
  "Personal expenses, drinks and souvenirs",
  "Optional add-on activities",
  "Travel insurance",
];

export const TOURS: Tour[] = [
  {
    slug: "13-days-kenya-tanzania-safari",
    title: "13 Days Kenya & Tanzania Safari",
    destination: "Kenya · Tanzania",
    duration: "13 Days",
    durationDays: 13,
    group: "0–15",
    type: "Package tour",
    img: tsafari,
    highlights: "Nairobi · Masai Mara · Naivasha · Amboseli · Arusha · Ngorongoro · Serengeti",
    price: 4850,
    rating: 5,
    reviews: 24,
    overview: [
      "This 13-day cross-border safari is the complete East African experience — combining Kenya's most iconic parks with Tanzania's legendary Serengeti and Ngorongoro Crater.",
      "Witness the Great Migration, track the Big Five across multiple ecosystems, and end your journey with the panoramic views of the Crater highlands.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: [
          "Arrival at Jomo Kenyatta International Airport.",
          "Meet & greet by Blue Lilac representative and transfer to hotel.",
          "Optional city excursion depending on arrival time.",
          "Dinner & overnight in Nairobi.",
        ],
        stay: "Nairobi",
      },
      {
        day: "Day 2–3",
        title: "Nairobi → Masai Mara",
        bullets: [
          "Scenic drive to Masai Mara via the Great Rift Valley.",
          "Afternoon game drive upon arrival.",
          "Full-day game drives on Day 3.",
          "Optional hot air balloon safari.",
          "Opportunity to witness the Big Five and seasonal Great Migration.",
          "Optional Maasai village visit.",
        ],
        stay: "2 nights in Masai Mara",
      },
      {
        day: "Day 4",
        title: "Masai Mara → Lake Naivasha",
        bullets: [
          "Morning game drive.",
          "Drive to Lake Naivasha.",
          "Afternoon boat safari (hippos & birdlife).",
          "Optional walking safari at Crescent Island.",
        ],
        stay: "1 night in Naivasha",
      },
      {
        day: "Day 5–6",
        title: "Naivasha → Amboseli",
        bullets: [
          "Drive to Amboseli National Park.",
          "Afternoon game drive.",
          "Full-day wildlife viewing on Day 6.",
          "Spectacular views of Mount Kilimanjaro.",
          "Famous for large elephant herds.",
        ],
        stay: "2 nights in Amboseli",
      },
      {
        day: "Day 7",
        title: "Amboseli → Arusha (Tanzania)",
        bullets: [
          "Breakfast and transfer to Namanga border.",
          "Immigration formalities.",
          "Continue to Arusha.",
          "Relaxed evening at lodge.",
        ],
        stay: "1 night in Arusha",
      },
      {
        day: "Day 8–9",
        title: "Arusha → Ngorongoro",
        bullets: [
          "Drive to Ngorongoro Highlands.",
          "Full crater descent safari.",
          "Spot black rhino, lions, buffalo and flamingos.",
          "Scenic crater rim lodge stay.",
        ],
        stay: "2 nights in Ngorongoro",
      },
      {
        day: "Day 10–11",
        title: "Ngorongoro → Serengeti",
        bullets: [
          "Scenic drive into Serengeti.",
          "Game drive en route.",
          "Full-day safari on Day 11.",
          "Excellent predator sightings.",
          "Optional balloon safari.",
        ],
        stay: "2 nights in Serengeti",
      },
      {
        day: "Day 12",
        title: "Serengeti → Nairobi",
        bullets: [
          "Early departure.",
          "Cross-border transfer via Namanga.",
          "Arrive in Nairobi late afternoon.",
          "Farewell dinner (optional).",
        ],
        stay: "1 night in Nairobi",
      },
      {
        day: "Day 13",
        title: "Departure",
        bullets: ["Breakfast at hotel.", "Transfer to airport.", "End of safari."],
      },
    ],
  },
  {
    slug: "9-days-kenya-tanzania-cross-border-safari",
    title: "9 Days Kenya–Tanzania Cross-Border Safari",
    destination: "Kenya · Tanzania",
    duration: "9 Days",
    durationDays: 9,
    group: "0–15",
    type: "Package tour",
    img: kenyaSafari,
    highlights: "Nairobi · Amboseli · Arusha · Tarangire · Serengeti · Ngorongoro",
    price: 3450,
    rating: 5,
    reviews: 18,
    overview: [
      "Experience the best of East Africa in one efficient nine-day cross-border safari — elephants under Kilimanjaro, baobabs in Tarangire, the endless Serengeti, and the Ngorongoro Crater.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: [
          "Airport pickup and transfer to hotel.",
          "Pre-safari briefing.",
          "Dinner and overnight.",
        ],
        stay: "Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi → Amboseli",
        bullets: [
          "Morning drive to Amboseli National Park.",
          "Picnic lunch en route.",
          "Afternoon game drive with Kilimanjaro views.",
        ],
        stay: "Amboseli",
      },
      {
        day: "Day 3",
        title: "Amboseli full day",
        bullets: [
          "Morning and afternoon game drives.",
          "Large elephant herds, lions, cheetah and buffalo.",
          "Optional Maasai cultural visit.",
        ],
        stay: "Amboseli",
      },
      {
        day: "Day 4",
        title: "Amboseli → Arusha (Tanzania)",
        bullets: [
          "Breakfast and depart for Namanga border.",
          "Immigration formalities and change of vehicle.",
          "Continue to Arusha for an early arrival.",
        ],
        stay: "Arusha",
      },
      {
        day: "Day 5",
        title: "Arusha → Tarangire",
        bullets: [
          "Drive to Tarangire National Park.",
          "Full afternoon game drive.",
          "Famous for baobab trees and huge elephant herds.",
        ],
        stay: "Tarangire / Karatu",
      },
      {
        day: "Day 6",
        title: "Tarangire → Serengeti",
        bullets: [
          "Drive through the Ngorongoro Conservation Area.",
          "Descend into the Serengeti plains.",
          "Afternoon game drive en route.",
        ],
        stay: "Central Serengeti",
      },
      {
        day: "Day 7",
        title: "Serengeti full day",
        bullets: [
          "Full day exploring the Seronera Valley.",
          "Predator hotspot — lion, leopard, cheetah.",
          "Optional hot air balloon safari at sunrise.",
        ],
        stay: "Central Serengeti",
      },
      {
        day: "Day 8",
        title: "Serengeti → Ngorongoro Crater",
        bullets: [
          "Morning game drive in Serengeti.",
          "Descend into Ngorongoro Crater for a half-day safari.",
          "Spot the rare black rhino and the Big Five.",
        ],
        stay: "Ngorongoro / Karatu",
      },
      {
        day: "Day 9",
        title: "Ngorongoro → Arusha → Departure",
        bullets: [
          "Drive back to Arusha.",
          "Lunch and transfer to Kilimanjaro Airport or back to Nairobi.",
        ],
      },
    ],
  },
  {
    slug: "7-days-tanzania-signature-safari",
    title: "7 Days Tanzania Signature Safari",
    destination: "Tanzania",
    duration: "7 Days",
    durationDays: 7,
    group: "0–15",
    type: "Package tour",
    img: samburu,
    highlights: "Arusha · Tarangire · Serengeti · Ngorongoro",
    price: 2950,
    rating: 5,
    reviews: 31,
    overview: [
      "Discover Tanzania's most iconic wildlife destinations on this seven-day signature safari — tree-climbing lions, the Great Migration herds, and the Ngorongoro Crater floor.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Arusha",
        bullets: [
          "Arrival at Kilimanjaro International Airport.",
          "Transfer to Arusha for a pre-safari briefing.",
          "Dinner and overnight.",
        ],
        stay: "Arusha",
      },
      {
        day: "Day 2",
        title: "Arusha → Tarangire",
        bullets: [
          "Morning drive to Tarangire National Park.",
          "Full afternoon game drive among baobabs and elephants.",
        ],
        stay: "Tarangire",
      },
      {
        day: "Day 3",
        title: "Tarangire → Lake Manyara → Karatu",
        bullets: [
          "Half-day game drive in Lake Manyara — famous for tree-climbing lions and flamingos.",
          "Continue to Karatu in the highlands.",
        ],
        stay: "Karatu",
      },
      {
        day: "Day 4",
        title: "Karatu → Serengeti",
        bullets: [
          "Drive into the Serengeti via the Ngorongoro highlands.",
          "Afternoon game drive in central Serengeti.",
        ],
        stay: "Serengeti",
      },
      {
        day: "Day 5",
        title: "Serengeti full day",
        bullets: [
          "Full day game viewing.",
          "Optional hot air balloon safari at dawn.",
          "Search for the Big Five and migration herds.",
        ],
        stay: "Serengeti",
      },
      {
        day: "Day 6",
        title: "Serengeti → Ngorongoro Crater",
        bullets: [
          "Morning game drive.",
          "Descend into Ngorongoro Crater for a half-day safari.",
          "Drive up to the crater rim for sunset.",
        ],
        stay: "Ngorongoro / Karatu",
      },
      {
        day: "Day 7",
        title: "Ngorongoro → Arusha → Departure",
        bullets: [
          "Return drive to Arusha.",
          "Transfer to Kilimanjaro Airport for your flight home.",
        ],
      },
    ],
  },
  {
    slug: "5-days-tanzania-classic-safari",
    title: "5 Days Tanzania Classic Safari",
    destination: "Tanzania",
    duration: "5 Days",
    durationDays: 5,
    group: "0–15",
    type: "Package tour",
    img: samburu,
    highlights: "Arusha · Ngorongoro · Serengeti",
    price: 2150,
    rating: 4,
    reviews: 12,
    overview: [
      "Experience the heart of Tanzania's most iconic wildlife circuit in just five days. Perfect for first-time safari travellers or as an add-on to Kilimanjaro or Zanzibar.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Arusha",
        bullets: [
          "Kilimanjaro Airport pickup.",
          "Transfer to Arusha lodge for briefing and overnight.",
        ],
        stay: "Arusha",
      },
      {
        day: "Day 2",
        title: "Arusha → Serengeti",
        bullets: [
          "Scenic drive via the Ngorongoro highlands into the Serengeti.",
          "Afternoon game drive in central Serengeti.",
        ],
        stay: "Serengeti",
      },
      {
        day: "Day 3",
        title: "Serengeti full day",
        bullets: [
          "Full day exploring the Seronera Valley.",
          "Predator-rich plains and big cat sightings.",
        ],
        stay: "Serengeti",
      },
      {
        day: "Day 4",
        title: "Serengeti → Ngorongoro Crater",
        bullets: [
          "Morning game drive in Serengeti.",
          "Crater descent safari in the afternoon.",
          "Big Five viewing on the crater floor.",
        ],
        stay: "Karatu",
      },
      {
        day: "Day 5",
        title: "Ngorongoro → Arusha → Departure",
        bullets: ["Breakfast and drive back to Arusha.", "Transfer to airport for departure."],
      },
    ],
  },
  {
    slug: "10-days-bush-and-beach-kenya",
    title: "10 Days Bush & Beach Kenya Experience",
    destination: "Kenya",
    duration: "10 Days",
    durationDays: 10,
    group: "0–15",
    type: "Package tour",
    img: diani,
    highlights: "Nairobi · Masai Mara · Naivasha · Amboseli · Diani Beach",
    price: 3850,
    rating: 5,
    reviews: 27,
    overview: [
      "Why choose between safari and the beach? This ten-day journey pairs Kenya's classic wildlife parks with the white sand and warm waters of Diani Beach.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup.", "Transfer to hotel and pre-safari briefing."],
        stay: "Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi → Masai Mara",
        bullets: ["Drive via the Great Rift Valley.", "Afternoon game drive on arrival."],
        stay: "Masai Mara",
      },
      {
        day: "Day 3",
        title: "Masai Mara full day",
        bullets: [
          "Full-day game drives in the Mara.",
          "Big Five and (seasonal) wildebeest crossings.",
        ],
        stay: "Masai Mara",
      },
      {
        day: "Day 4",
        title: "Masai Mara → Lake Naivasha",
        bullets: ["Morning game drive.", "Drive to Naivasha for an afternoon boat safari."],
        stay: "Naivasha",
      },
      {
        day: "Day 5",
        title: "Naivasha → Amboseli",
        bullets: [
          "Scenic drive to Amboseli.",
          "Afternoon game drive with Mount Kilimanjaro views.",
        ],
        stay: "Amboseli",
      },
      {
        day: "Day 6",
        title: "Amboseli full day",
        bullets: [
          "Morning and afternoon game drives.",
          "Massive elephant herds and Maasai culture.",
        ],
        stay: "Amboseli",
      },
      {
        day: "Day 7",
        title: "Amboseli → Diani Beach",
        bullets: [
          "Transfer to Mombasa / Ukunda by road or flight.",
          "Continue to Diani Beach for check-in.",
          "Sunset on the Indian Ocean.",
        ],
        stay: "Diani Beach",
      },
      {
        day: "Day 8",
        title: "Diani Beach",
        bullets: [
          "Day at leisure on the beach.",
          "Optional snorkelling, dhow cruise or kite-surfing.",
        ],
        stay: "Diani Beach",
      },
      {
        day: "Day 9",
        title: "Diani Beach",
        bullets: ["Full beach day.", "Optional Wasini Island & Kisite Marine Park excursion."],
        stay: "Diani Beach",
      },
      {
        day: "Day 10",
        title: "Diani → Departure",
        bullets: ["Transfer to Mombasa or Ukunda Airport for onward flight."],
      },
    ],
  },
  {
    slug: "10-days-ultimate-kenya-explorer",
    title: "10 Days Ultimate Kenya Explorer Safari",
    destination: "Kenya",
    duration: "10 Days",
    durationDays: 10,
    group: "0–15",
    type: "Package tour",
    img: buffalo,
    highlights: "Nairobi · Masai Mara · Nakuru · Naivasha · Amboseli · Salt Lick · Tsavo East",
    price: 3650,
    rating: 5,
    reviews: 19,
    overview: [
      "If you want to experience Kenya from the Mara plains to the red elephants of Tsavo, this is the trip. Seven distinct ecosystems in ten days.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup and transfer to hotel.", "Safari briefing and dinner."],
        stay: "Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi → Masai Mara",
        bullets: ["Drive to Masai Mara.", "Afternoon game drive."],
        stay: "Masai Mara",
      },
      {
        day: "Day 3",
        title: "Masai Mara full day",
        bullets: ["Morning and afternoon game drives.", "Optional Maasai village visit."],
        stay: "Masai Mara",
      },
      {
        day: "Day 4",
        title: "Masai Mara → Lake Nakuru",
        bullets: [
          "Drive to Lake Nakuru.",
          "Afternoon game drive — rhino, flamingo, Rothschild's giraffe.",
        ],
        stay: "Lake Nakuru",
      },
      {
        day: "Day 5",
        title: "Nakuru → Naivasha",
        bullets: [
          "Short transfer to Lake Naivasha.",
          "Afternoon boat ride and optional Crescent Island walk.",
        ],
        stay: "Naivasha",
      },
      {
        day: "Day 6",
        title: "Naivasha → Amboseli",
        bullets: ["Long drive to Amboseli.", "Late afternoon game drive."],
        stay: "Amboseli",
      },
      {
        day: "Day 7",
        title: "Amboseli → Salt Lick (Taita Hills)",
        bullets: [
          "Morning game drive.",
          "Transfer to Salt Lick Lodge.",
          "Stilted lodge with floodlit waterhole game viewing.",
        ],
        stay: "Salt Lick",
      },
      {
        day: "Day 8",
        title: "Salt Lick → Tsavo East",
        bullets: [
          "Drive into Tsavo East National Park.",
          "Afternoon game drive — the red elephants of Tsavo.",
        ],
        stay: "Tsavo East",
      },
      {
        day: "Day 9",
        title: "Tsavo East full day",
        bullets: ["Full-day game drives.", "Aruba Dam, Mudanda Rock and Yatta Plateau."],
        stay: "Tsavo East",
      },
      {
        day: "Day 10",
        title: "Tsavo East → Nairobi/Mombasa",
        bullets: ["Morning game drive en route.", "Transfer to Nairobi or Mombasa for departure."],
      },
    ],
  },
  {
    slug: "9-days-northern-frontier-classic-kenya",
    title: "9 Days Northern Frontier & Classic Kenya Safari",
    destination: "Kenya",
    duration: "9 Days",
    durationDays: 9,
    group: "0–15",
    type: "Package tour",
    img: olpejeta,
    highlights: "Nairobi · Samburu · Sweetwaters (Ol Pejeta) · Lake Nakuru · Masai Mara",
    price: 3250,
    rating: 5,
    reviews: 15,
    overview: [
      "This is Kenya in its full glory — the Special Five of arid Samburu, the rhinos of Ol Pejeta, the flamingos of Nakuru, and the Big Five of the Maasai Mara.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup.", "Transfer to hotel for briefing."],
        stay: "Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi → Samburu",
        bullets: [
          "Drive north past Mount Kenya.",
          "Afternoon game drive in Samburu National Reserve.",
        ],
        stay: "Samburu",
      },
      {
        day: "Day 3",
        title: "Samburu full day",
        bullets: [
          "Morning and afternoon game drives.",
          "Track the Samburu Special Five — gerenuk, reticulated giraffe, Grevy's zebra, beisa oryx, Somali ostrich.",
        ],
        stay: "Samburu",
      },
      {
        day: "Day 4",
        title: "Samburu → Sweetwaters (Ol Pejeta)",
        bullets: [
          "Transfer to Ol Pejeta Conservancy.",
          "Visit the chimpanzee sanctuary and the last northern white rhinos.",
          "Afternoon game drive.",
        ],
        stay: "Sweetwaters",
      },
      {
        day: "Day 5",
        title: "Sweetwaters → Lake Nakuru",
        bullets: [
          "Drive to Lake Nakuru.",
          "Afternoon game drive — rhino, flamingo, Rothschild giraffe.",
        ],
        stay: "Lake Nakuru",
      },
      {
        day: "Day 6",
        title: "Nakuru → Masai Mara",
        bullets: ["Scenic drive to the Mara.", "Afternoon game drive."],
        stay: "Masai Mara",
      },
      {
        day: "Day 7",
        title: "Masai Mara full day",
        bullets: ["Full-day game drive with picnic lunch.", "Optional hot air balloon safari."],
        stay: "Masai Mara",
      },
      {
        day: "Day 8",
        title: "Masai Mara full day",
        bullets: [
          "Morning game drive.",
          "Optional Maasai cultural visit.",
          "Afternoon game drive.",
        ],
        stay: "Masai Mara",
      },
      {
        day: "Day 9",
        title: "Masai Mara → Nairobi → Departure",
        bullets: ["Morning drive back to Nairobi.", "Transfer to JKIA for your flight home."],
      },
    ],
  },
  {
    slug: "8-days-kenya-scenic-wildlife",
    title: "8 Days Kenya Scenic & Wildlife Safari",
    destination: "Kenya",
    duration: "8 Days",
    durationDays: 8,
    group: "0–15",
    type: "Package tour",
    img: naivasha,
    highlights: "Nairobi · Masai Mara · Lake Nakuru · Naivasha · Amboseli",
    price: 2850,
    rating: 4,
    reviews: 22,
    overview: [
      "Eight days. Five iconic destinations. One unforgettable Kenyan journey through the country's most photogenic landscapes.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup and transfer to hotel.", "Dinner and overnight."],
        stay: "Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi → Masai Mara",
        bullets: ["Drive via the Great Rift Valley.", "Afternoon game drive."],
        stay: "Masai Mara",
      },
      {
        day: "Day 3",
        title: "Masai Mara full day",
        bullets: ["Morning and afternoon game drives.", "Optional balloon safari."],
        stay: "Masai Mara",
      },
      {
        day: "Day 4",
        title: "Masai Mara → Lake Nakuru",
        bullets: ["Drive to Lake Nakuru.", "Afternoon game drive — rhino and flamingo."],
        stay: "Lake Nakuru",
      },
      {
        day: "Day 5",
        title: "Nakuru → Lake Naivasha",
        bullets: ["Transfer to Naivasha.", "Boat ride and Crescent Island walk."],
        stay: "Naivasha",
      },
      {
        day: "Day 6",
        title: "Naivasha → Amboseli",
        bullets: ["Drive to Amboseli National Park.", "Afternoon game drive."],
        stay: "Amboseli",
      },
      {
        day: "Day 7",
        title: "Amboseli full day",
        bullets: ["Morning and afternoon game drives.", "Kilimanjaro views and elephant herds."],
        stay: "Amboseli",
      },
      {
        day: "Day 8",
        title: "Amboseli → Nairobi → Departure",
        bullets: ["Morning drive to Nairobi.", "Airport transfer."],
      },
    ],
  },
  {
    slug: "7-days-kenya-classic-safari",
    title: "7 Days Kenya Classic Safari",
    destination: "Kenya",
    duration: "7 Days",
    durationDays: 7,
    group: "0–15",
    type: "Package tour",
    img: tourKenya,
    highlights: "Nairobi · Amboseli · Nakuru · Masai Mara",
    price: 2450,
    rating: 5,
    reviews: 28,
    overview: [
      "The classic week-long Kenyan safari — Amboseli's elephants under Kilimanjaro, the flamingos of Nakuru, and the Big Five of the Maasai Mara.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup and transfer.", "Briefing and overnight."],
        stay: "Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi → Amboseli",
        bullets: ["Drive to Amboseli.", "Afternoon game drive."],
        stay: "Amboseli",
      },
      {
        day: "Day 3",
        title: "Amboseli full day",
        bullets: ["Morning and afternoon game drives with Kilimanjaro views."],
        stay: "Amboseli",
      },
      {
        day: "Day 4",
        title: "Amboseli → Lake Nakuru",
        bullets: ["Long scenic drive via Nairobi.", "Late afternoon game drive in Nakuru."],
        stay: "Lake Nakuru",
      },
      {
        day: "Day 5",
        title: "Nakuru → Masai Mara",
        bullets: ["Drive to Masai Mara.", "Afternoon game drive."],
        stay: "Masai Mara",
      },
      {
        day: "Day 6",
        title: "Masai Mara full day",
        bullets: ["Full-day game drive with picnic lunch.", "Optional Maasai village visit."],
        stay: "Masai Mara",
      },
      {
        day: "Day 7",
        title: "Masai Mara → Nairobi → Departure",
        bullets: ["Morning drive back to Nairobi.", "Airport drop-off."],
      },
    ],
  },
  {
    slug: "4-days-landcruiser-masai-mara-lake-nakuru",
    title: "4 Days Landcruiser Safari to Masai Mara & Lake Nakuru",
    destination: "Kenya",
    duration: "4 Days",
    durationDays: 4,
    group: "0–30",
    type: "Group tour",
    img: tsavo,
    highlights: "Masai Mara · Lake Nakuru",
    price: 1450,
    rating: 4,
    reviews: 33,
    overview: [
      "A small-group safari adventure to Masai Mara Game Reserve with big-game concentration and to Lake Nakuru, home to millions of flamingos and an ornithological paradise.",
      "The Masai Mara is named the 8th Wonder of the New World due to the annual wildebeest migration. Lake Nakuru is a birder's haven and home to the critically endangered black and white rhinos.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Masai Mara",
        bullets: [
          "Morning pickup in Nairobi.",
          "Scenic drive via the Great Rift Valley.",
          "Afternoon game drive in the Masai Mara.",
        ],
        stay: "Masai Mara",
      },
      {
        day: "Day 2",
        title: "Masai Mara full day",
        bullets: [
          "Full-day game drive with picnic lunch.",
          "Optional Maasai village visit.",
          "Optional hot air balloon safari.",
        ],
        stay: "Masai Mara",
      },
      {
        day: "Day 3",
        title: "Masai Mara → Lake Nakuru",
        bullets: [
          "Morning game drive in the Mara.",
          "Drive to Lake Nakuru National Park.",
          "Afternoon game drive — flamingos, rhino and Rothschild's giraffe.",
        ],
        stay: "Lake Nakuru",
      },
      {
        day: "Day 4",
        title: "Lake Nakuru → Nairobi",
        bullets: ["Morning game drive.", "Drive back to Nairobi, arriving late afternoon."],
      },
    ],
  },
  {
    slug: "3-days-maasai-mara-from-nairobi",
    title: "3 Days Maasai Mara Guided Safari from Nairobi",
    destination: "Kenya",
    duration: "3 Days",
    durationDays: 3,
    group: "0–30",
    type: "Group tour",
    img: maasaiMara,
    highlights: "Masai Mara · Big Five · Great Migration",
    price: 720,
    rating: 5,
    reviews: 41,
    overview: [
      "A guided three-day safari to the world-famous Maasai Mara — home of the Big Five and the seasonal Great Migration across the Mara River.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Masai Mara",
        bullets: [
          "Morning departure from Nairobi.",
          "Drive via the Great Rift Valley viewpoint.",
          "Lunch at lodge.",
          "Afternoon game drive in the Mara.",
        ],
        stay: "Masai Mara",
      },
      {
        day: "Day 2",
        title: "Masai Mara full day",
        bullets: [
          "Full day in the reserve with picnic lunch.",
          "Track lions, cheetah, leopard and elephant herds.",
          "Optional balloon safari at sunrise.",
          "Optional Maasai village visit.",
        ],
        stay: "Masai Mara",
      },
      {
        day: "Day 3",
        title: "Masai Mara → Nairobi",
        bullets: [
          "Early morning game drive.",
          "Breakfast and check-out.",
          "Drive back to Nairobi, arriving late afternoon.",
        ],
      },
    ],
  },
  {
    slug: "private-safari-nairobi-national-park",
    title: "Private Safari Tour: Nairobi National Park",
    destination: "Kenya",
    duration: "Half Day",
    durationDays: 1,
    group: "0–15",
    type: "Private tour",
    img: nairobi,
    highlights: "Nairobi National Park · Big-city skyline backdrop · Lion & rhino",
    price: 100,
    rating: 5,
    reviews: 36,
    overview: [
      "Africa's only wildlife park inside a capital city. A few hours' game drive in Nairobi National Park rewards you with lion, rhino, buffalo and giraffe — with the city skyline as the backdrop.",
    ],
    included: DAY_TRIP_INCLUDED,
    excluded: DAY_TRIP_EXCLUDED,
    itinerary: [
      {
        day: "Half day",
        title: "Nairobi National Park game drive",
        bullets: [
          "Hotel pickup at 06:00 (morning) or 13:00 (afternoon).",
          "Drive to the main gate (≈30 min).",
          "3–4 hour game drive.",
          "Look for lion, rhino, buffalo, giraffe, zebra and over 400 bird species.",
          "Return to your hotel.",
        ],
      },
    ],
  },
  {
    slug: "3-day-masai-mara-governors-camp",
    title: "3 Day Masai Mara Adventure at Governor's Camp",
    destination: "Kenya",
    duration: "3 Days",
    durationDays: 3,
    group: "0–7",
    type: "Private tour",
    img: mara,
    highlights: "Governor's Camp · Riverside luxury · Big Five",
    price: 1850,
    rating: 5,
    reviews: 11,
    overview: [
      "A premium three-day Mara experience based at the legendary Governor's Camp on the banks of the Mara River — one of the most iconic safari camps in Africa.",
    ],
    included: DEFAULT_INCLUDED.concat(["Two-way scheduled flight Nairobi (Wilson) ↔ Masai Mara"]),
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Masai Mara (fly)",
        bullets: [
          "Morning transfer to Wilson Airport.",
          "Scheduled flight to the Mara.",
          "Camp pickup and lunch.",
          "Afternoon game drive.",
        ],
        stay: "Governor's Camp",
      },
      {
        day: "Day 2",
        title: "Masai Mara full day",
        bullets: [
          "Full day in the reserve.",
          "Optional sunrise hot-air balloon safari with champagne breakfast.",
          "Riverside lunch.",
          "Afternoon game drive.",
        ],
        stay: "Governor's Camp",
      },
      {
        day: "Day 3",
        title: "Masai Mara → Nairobi (fly)",
        bullets: [
          "Early morning game drive.",
          "Brunch at camp.",
          "Airstrip transfer.",
          "Flight back to Nairobi.",
        ],
      },
    ],
  },
  {
    slug: "3-day-masai-mara-safari-tour",
    title: "3-Day Masai Mara Safari Tour",
    destination: "Kenya",
    duration: "3 Days",
    durationDays: 3,
    group: "0–5",
    type: "Private tour",
    img: underStars,
    highlights: "Masai Mara · Private 4x4 · Mid-range lodge",
    price: 850,
    rating: 5,
    reviews: 17,
    overview: [
      "A classic private three-day Masai Mara safari with a 4x4 Landcruiser, a dedicated guide and mid-range lodge accommodation — Kenya's most popular short safari.",
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Masai Mara",
        bullets: [
          "08:00 pickup from your Nairobi hotel.",
          "Drive via the Great Rift Valley.",
          "Lunch at lodge.",
          "Afternoon game drive.",
        ],
        stay: "Masai Mara mid-range lodge",
      },
      {
        day: "Day 2",
        title: "Masai Mara full day",
        bullets: [
          "Sunrise game drive.",
          "Breakfast and rest.",
          "Optional Maasai village visit (additional cost).",
          "Afternoon game drive.",
        ],
        stay: "Masai Mara mid-range lodge",
      },
      {
        day: "Day 3",
        title: "Masai Mara → Nairobi",
        bullets: [
          "Morning game drive.",
          "Breakfast and check-out.",
          "Drive back to Nairobi, arriving by late afternoon.",
        ],
      },
    ],
  },
  {
    slug: "6-days-nairobi-meru-experience",
    title: "6 Days Nairobi – Meru Experience",
    destination: "Kenya",
    duration: "6 Days",
    durationDays: 6,
    group: "0–15",
    type: "Package tour",
    img: meru,
    highlights: "Nairobi · Elsa's Kopje Meru · Carnivore Restaurant",
    price: 2800,
    rating: 5,
    reviews: 8,
    overview: [
      "An immersive six-day journey to Meru National Park — one of Kenya's most unspoiled wilderness areas, made famous by Joy Adamson's Born Free. Stay at the legendary Elsa's Kopje, walk with professional guides, track game at night, and fish in the river before ending with dinner at Nairobi's iconic Carnivore Restaurant.",
    ],
    included: [
      "2 nights accommodation in Nairobi on bed and breakfast (Hemingways Hotel)",
      "3 nights accommodation in Meru on full board (Elsa's Kopje)",
      "Domestic scheduled flights to and from Meru",
      "All airport pick up and drop off in Nairobi and Meru",
      "Shared game drives in 4x4 Land Cruisers",
      "One night game drive during your stay",
      "Guided walking safari with a professional guide",
      "Fishing — hand line, catch and release, with guide",
      "Bush sundowner",
      "Dinner at Carnivore Restaurant",
      "All taxes",
    ],
    excluded: [
      "Extra meals and drinks",
      "International flights",
      "Any other item not mentioned above",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: [
          "Met and assisted by our airport representatives on arrival at JKIA.",
          "Transfer to Hemingways Hotel.",
          "Overnight on bed and breakfast basis.",
        ],
        stay: "Hemingways Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi – Meru National Park",
        bullets: [
          "Transfer to Wilson Airport for your flight to Meru National Park.",
          "Check in at Elsa's Kopje and enjoy lunch.",
          "Afternoon game drive through one of Kenya's most unspoiled parks.",
          "Dinner and overnight at camp.",
        ],
        stay: "Elsa's Kopje Meru",
      },
      {
        day: "Day 3",
        title: "Game Drive, Walking Safari & Night Drive",
        bullets: [
          "Breakfast followed by a morning game drive.",
          "Return to camp for lunch.",
          "2-hour guided walking safari with a professional guide.",
          "Evening night game drive within the park.",
          "Dinner and overnight at camp.",
        ],
        stay: "Elsa's Kopje Meru",
      },
      {
        day: "Day 4",
        title: "Game Drive, Fishing & Sundowner",
        bullets: [
          "Breakfast followed by a morning game drive.",
          "Lunch at camp.",
          "Afternoon guided hand-line catch-and-release fishing experience.",
          "Evening bush sundowner as the sun sets over Meru.",
          "Dinner and overnight at camp.",
        ],
        stay: "Elsa's Kopje Meru",
      },
      {
        day: "Day 5",
        title: "Meru – Nairobi City Experience",
        bullets: [
          "Transfer to the airstrip for your flight back to Nairobi.",
          "Afternoon shopping and city tour of Nairobi.",
          "Sumptuous dinner at the legendary Carnivore Restaurant.",
          "Overnight at Hemingways Hotel.",
        ],
        stay: "Hemingways Nairobi",
      },
      {
        day: "Day 6",
        title: "Departure",
        bullets: ["Breakfast and check out.", "Transfer to the airport for your flight back home."],
      },
    ],
  },
  {
    slug: "6-days-loisaba-conservancy",
    title: "6 Days Nairobi – Loisaba Private Conservancy",
    destination: "Kenya",
    duration: "6 Days",
    durationDays: 6,
    group: "0–15",
    type: "Private tour",
    img: liosaba,
    highlights: "Nairobi · Loisaba Tented Camp · Horse Safari · Camel Safari · E-Bikes",
    price: 3200,
    rating: 5,
    reviews: 6,
    overview: [
      "Loisaba Conservancy in Laikipia is one of Kenya's most extraordinary private wildlife destinations — 56,000 acres of open savannah, hills and riverine forest with spectacular views to Mount Kenya. This six-day itinerary combines classic game drives with a guided horse or camel safari, e-bikes, mountain biking, an anti-poaching sniffer dog experience, and a memorable dinner at Carnivore on your return to Nairobi.",
    ],
    included: [
      "2 nights accommodation in Nairobi on bed and breakfast (Hemingways Hotel)",
      "3 nights accommodation in Loisaba on full board (Loisaba Tented Camp)",
      "Domestic scheduled flights to and from Loisaba",
      "All airport pick up and drop off in Nairobi and Loisaba",
      "Shared game drives in 4x4 Land Cruisers",
      "One night game drive during your stay",
      "Guided walking safari with a professional guide",
      "2-hr guided horse or camel back safari",
      "Bush sundowner",
      "Bush breakfast or bush lunch",
      "Dinner at Carnivore Restaurant",
      "Anti-poaching sniffer dog experience",
      "E-bikes up to 4 hours",
      "Mountain biking escorted up to 4 hours",
      "All taxes",
    ],
    excluded: [
      "Extra meals and drinks",
      "International flights",
      "Any other item not mentioned above",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: [
          "Met and assisted by our airport representatives at JKIA.",
          "Transfer to Hemingways Hotel.",
          "Overnight on bed and breakfast basis.",
        ],
        stay: "Hemingways Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi – Loisaba Conservancy",
        bullets: [
          "Transfer to Wilson Airport for your flight to Loisaba.",
          "Check in at Loisaba Tented Camp and enjoy lunch.",
          "Afternoon game drive across 56,000 acres of open conservancy.",
          "Dinner and overnight at camp.",
        ],
        stay: "Loisaba Tented Camp",
      },
      {
        day: "Day 3",
        title: "Game Drive, Walking Safari & Night Drive",
        bullets: [
          "Breakfast followed by a morning game drive.",
          "Lunch at camp.",
          "2-hour guided walking safari with a professional guide.",
          "Evening night game drive within the conservancy.",
          "Dinner and overnight at camp.",
        ],
        stay: "Loisaba Tented Camp",
      },
      {
        day: "Day 4",
        title: "Horse or Camel Safari, Bush Lunch & Sundowner",
        bullets: [
          "Breakfast followed by a 2-hour guided horse or camel back safari.",
          "Bush lunch in the wilderness.",
          "Afternoon game drive.",
          "Anti-poaching sniffer dog experience.",
          "Evening sundowner.",
          "Dinner and overnight at camp.",
        ],
        stay: "Loisaba Tented Camp",
      },
      {
        day: "Day 5",
        title: "Loisaba – Nairobi City Experience",
        bullets: [
          "Optional morning e-bike or mountain biking excursion.",
          "Transfer to the airstrip for your flight back to Nairobi.",
          "Afternoon shopping and city tour.",
          "Sumptuous dinner at Carnivore Restaurant.",
          "Overnight at Hemingways Hotel.",
        ],
        stay: "Hemingways Nairobi",
      },
      {
        day: "Day 6",
        title: "Departure",
        bullets: ["Breakfast and check out.", "Transfer to the airport for your flight home."],
      },
    ],
  },
  {
    slug: "7-days-luxury-bush-beach-hemingways",
    title: "7 Days Luxury Bush & Beach — A Hemingways Collection",
    destination: "Kenya",
    duration: "7 Days",
    durationDays: 7,
    group: "0–15",
    type: "Private tour",
    img: beach,
    highlights: "Nairobi · Hemingways Ol Seki Mara · Hemingways Watamu",
    price: 4500,
    rating: 5,
    reviews: 9,
    overview: [
      "The ultimate Kenyan luxury experience — three iconic Hemingways properties in one seamless journey. Begin at Hemingways Nairobi, fly to the Maasai Mara for game drives and a night safari at Hemingways Ol Seki, then connect to the white sands of Watamu for three days of Indian Ocean bliss at Hemingways Watamu.",
    ],
    included: [
      "Return airport transfers in Nairobi",
      "Return flights to Maasai Mara and Malindi",
      "Full-board accommodation in Maasai Mara with selected drinks included (Hemingways Ol Seki Mara)",
      "Half-board accommodation in Watamu (Hemingways Watamu)",
      "Two shared game drives daily in Maasai Mara",
      "One night game drive in the conservancy",
      "Unlimited game drives in Maasai Mara",
      "One bush breakfast in Maasai Mara (weather permitting)",
      "Maasai Mara conservancy fees, park fees and reserve fund fees",
      "All applicable government taxes and levies",
    ],
    excluded: ["International flights", "Personal items", "Extra meals and drinks"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: [
          "Met at JKIA by our representative.",
          "Transferred to Hemingways Nairobi.",
          "Spend the day at leisure enjoying the hotel's facilities.",
          "Overnight on bed and breakfast basis.",
        ],
        stay: "Hemingways Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi – Maasai Mara",
        bullets: [
          "After breakfast, fly from Wilson Airport to the Maasai Mara.",
          "Met by your safari guide at the airstrip.",
          "Transferred to Hemingways Ol Seki Mara in a private conservancy.",
          "Lunch and afternoon shared game drive.",
          "Dinner and overnight at camp.",
        ],
        stay: "Hemingways Ol Seki Mara",
      },
      {
        day: "Day 3",
        title: "Full Day Maasai Mara Safari",
        bullets: [
          "Two shared game drives through the Mara ecosystem.",
          "Bush breakfast in the wilderness (weather permitting).",
          "July to October: opportunity to witness the wildebeest migration.",
          "Evening night game drive within the conservancy.",
          "Dinner and overnight at camp.",
        ],
        stay: "Hemingways Ol Seki Mara",
      },
      {
        day: "Day 4",
        title: "Maasai Mara – Watamu Coast",
        bullets: [
          "After breakfast, fly back to Nairobi and connect to Malindi.",
          "Transferred to Hemingways Watamu on the Kenyan coast.",
          "Spend the afternoon at leisure on pristine white sandy beaches.",
          "Dinner and overnight on half-board basis.",
        ],
        stay: "Hemingways Watamu",
      },
      {
        day: "Day 5",
        title: "Watamu Beach Leisure",
        bullets: [
          "Full day at leisure.",
          "Swim in the Indian Ocean or relax by the beach.",
          "Optional activities: snorkelling, diving, dolphin watching, deep-sea fishing.",
          "Optional visit to Watamu Marine National Park.",
          "Dinner and overnight.",
        ],
        stay: "Hemingways Watamu",
      },
      {
        day: "Day 6",
        title: "Watamu Beach Relaxation",
        bullets: [
          "Another day unwinding in tropical paradise.",
          "Enjoy the beach, resort amenities and coastal scenery.",
          "Optional excursions available.",
          "Dinner and overnight.",
        ],
        stay: "Hemingways Watamu",
      },
      {
        day: "Day 7",
        title: "Watamu – Nairobi – Departure",
        bullets: [
          "After breakfast, transfer to Malindi Airport.",
          "Scheduled flight to Nairobi.",
          "Connect with your international departure flight.",
        ],
      },
    ],
  },
  {
    slug: "5-days-honeymoon-nairobi-samburu-ol-pejeta",
    title: "5 Days Honeymoon to the North — Nairobi, Samburu & Ol Pejeta",
    destination: "Kenya",
    duration: "5 Days",
    durationDays: 5,
    group: "0–2",
    type: "Private tour",
    img: honeymoon,
    highlights: "Nairobi · Samburu Special Five · Ol Pejeta Big Five · Romantic sundowner",
    price: 3300,
    rating: 5,
    reviews: 0,
    overview: [
      "A romantic five-day honeymoon safari to Northern Kenya, pairing the wild beauty of Samburu National Reserve with the Big Five of Ol Pejeta Conservancy — private game drives, a celebratory sundowner, a spa treatment and an intimate à la carte dinner make this an unforgettable start to married life.",
    ],
    included: [
      "1 night accommodation in Nairobi",
      "2 nights accommodation in Samburu",
      "1 night accommodation in Ol Pejeta",
      "Meals on full board",
      "Return airport transfers",
      "Transport in a private 4x4 Landcruiser",
      "Service of a professional safari guide",
      "Park entrance fees",
      "Unlimited game drives",
      "A celebratory private sundowner experience at Samburu",
      "Complimentary 30-minute spa treatment at Samburu",
      "À la carte dining experience at Ol Pejeta",
      "Special room décor arrangement at Ol Pejeta",
      "One premium complimentary bottle of wine at each hotel",
    ],
    excluded: ["International flight", "Personal items"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: [
          "Warmly welcomed by our representative upon arrival at Jomo Kenyatta International Airport (JKIA).",
          "Transferred to your hotel in Nairobi.",
          "Rest of the day at leisure — relax or explore the city at your own pace.",
          "Overnight stay as you prepare for your romantic safari adventure.",
        ],
        stay: "Nairobi",
      },
      {
        day: "Day 2",
        title: "Nairobi — Samburu National Reserve",
        bullets: [
          "Depart Nairobi after breakfast in a private 4x4 Land Cruiser with your professional safari guide.",
          "Journey north through Kenya's highlands to Samburu National Reserve, arriving in time for lunch.",
          "Afternoon game drive — home to the Samburu Special Five: Grevy's zebra, reticulated giraffe, Somali ostrich, Beisa oryx and gerenuk.",
          "Private celebratory sundowner experience as the sun sets over Samburu.",
          "Complimentary 30-minute spa treatment during your stay.",
          "Dinner and overnight at the lodge.",
        ],
        stay: "Samburu",
      },
      {
        day: "Day 3",
        title: "Full day, Samburu National Reserve",
        bullets: [
          "Breakfast, then a full day of unlimited game drives.",
          "Explore the habitats surrounding the Ewaso Nyiro River — elephants, lions, leopards, cheetahs and prolific birdlife.",
          "Time to relax and enjoy the lodge's facilities between safari activities.",
          "Dinner and overnight at the lodge.",
        ],
        stay: "Samburu",
      },
      {
        day: "Day 4",
        title: "Samburu — Ol Pejeta Conservancy",
        bullets: [
          "Depart after breakfast for Ol Pejeta Conservancy in your private 4x4 Land Cruiser.",
          "Arrive in time for lunch, then an afternoon game drive — home to the Big Five and the last remaining northern white rhinos.",
          "Romantic room décor arrangement prepared for your honeymoon celebration.",
          "Exclusive à la carte dining experience in the evening, with a premium complimentary bottle of wine.",
          "Romantic overnight stay.",
        ],
        stay: "Ol Pejeta",
      },
      {
        day: "Day 5",
        title: "Ol Pejeta Conservancy — Nairobi — Departure",
        bullets: [
          "Final morning at leisure, or an optional early morning game drive.",
          "Scenic drive back to Nairobi, arriving in the afternoon.",
          "Transfer to Jomo Kenyatta International Airport for your departure flight.",
        ],
      },
    ],
  },
  {
    slug: "7-days-ultra-luxury-kenya-safari",
    title: "7-Day Ultra Luxury Kenyan Safari",
    destination: "Kenya",
    duration: "7 Days",
    durationDays: 7,
    group: "0–15",
    type: "Private tour",
    // TODO: placeholder image reused from Naivasha stops elsewhere — swap
    // for a dedicated PAX Manor / Loldia House / Angama Mara photo.
    img: naivasha,
    highlights: "Nairobi · Lake Naivasha · Masai Mara · Private Jet · Balloon Safari",
    price: 16850,
    rating: 5,
    reviews: 0,
    overview: [
      "A seven-day ultra-luxury journey from Nairobi's boutique PAX Manor to the tranquil shores of Lake Naivasha at Loldia House, concluding with a private jet transfer to the iconic Maasai Mara for game drives, a guided walking safari and a dawn hot-air balloon safari from Angama Mara.",
      "Price from USD 16,850 per adult sharing.",
    ],
    included: [
      "Full board accommodation at Loldia House and Angama Mara",
      "Boat rides on Lake Naivasha and guided nature walks",
      "Custom-built 4WD transfers and game drives at Loldia House",
      "All guided safaris into the Mara Triangle at Angama Mara",
      "Guided walking safaris on the Oloololo Escarpment",
      "All meals and drinks at Angama Mara (excluding French Champagne & reserve wines)",
      "Laundry service and WiFi",
      "Private jet transfer from Naivasha to the Maasai Mara",
      "Emergency medical evacuation insurance",
      "VAT and all applicable levies",
    ],
    excluded: [
      "International flights",
      "Tips and gratuities",
      "Visa fees",
      "Optional activities not mentioned above",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi — Overnight at PAX Manor",
        bullets: [
          "Arrival at Jomo Kenyatta International Airport and transfer to PAX Manor in Muthaiga.",
          "Afternoon and evening at leisure enjoying the manor's luxurious suites and fine dining.",
        ],
        stay: "PAX Manor Muthaiga",
      },
      {
        day: "Day 2",
        title: "Nairobi → Lake Naivasha (Loldia House)",
        bullets: [
          "Scenic descent into the Great Rift Valley (approx. 2–2.5 hours).",
          "Arrival at Loldia House for a warm welcome and outdoor lunch.",
          "Afternoon options: boat ride on Lake Naivasha, guided nature walk, a Crescent Island walking safari, or a gentle game drive.",
          "Sundowners on the lake followed by candlelit dinner.",
        ],
        stay: "Loldia House",
      },
      {
        day: "Day 3",
        title: "Full-Day Safari to Lake Nakuru National Park",
        bullets: [
          "Relaxed breakfast overlooking the water before departing for Lake Nakuru National Park (1.5–2 hours each way).",
          "Game viewing among rhino, lion, buffalo herds and rich birdlife, with a picnic lunch inside the park.",
          "Return to Loldia House in the afternoon.",
        ],
        stay: "Loldia House",
      },
      {
        day: "Day 4",
        title: "Private Jet to Maasai Mara (Angama Mara)",
        bullets: [
          "Private jet transfer from Naivasha to Kichwa Tembo Airstrip (approx. 45 min–1 hour).",
          "Welcome by the Angama team and a short transfer to the lodge.",
          "Lunch with escarpment views, followed by your first afternoon game drive in the Mara Triangle.",
        ],
        stay: "Angama Mara",
      },
      {
        day: "Day 5",
        title: "Full Day in Maasai Mara + Hot Air Balloon Safari",
        bullets: [
          "Pre-dawn hot air balloon safari with a champagne bush breakfast on landing.",
          "Full-day game drive across the Mara Triangle with a picnic lunch.",
        ],
        stay: "Angama Mara",
      },
      {
        day: "Day 6",
        title: "Full Day in Maasai Mara",
        bullets: [
          "Choice of an early morning game drive or a guided walking safari along the Oloololo Escarpment.",
          "Lunch and relaxation time at the lodge.",
          "Afternoon game drive or a cultural visit to a local Maasai village.",
          "Sundowners and dinner overlooking the savannah.",
        ],
        stay: "Angama Mara",
      },
      {
        day: "Day 7",
        title: "Maasai Mara → Nairobi — Departure",
        bullets: [
          "Relaxed breakfast, with the option of an early morning game drive.",
          "Transfer to Kichwa Tembo Airstrip for your private flight to Nairobi.",
          "Onward transfer to Jomo Kenyatta International Airport for your departure.",
        ],
      },
    ],
  },
  {
    slug: "8-days-kenya-ultimate-luxury-fly-in-safari",
    title: "8 Days / 7 Nights Kenya Ultimate Luxury Fly-in Safari",
    destination: "Kenya",
    duration: "8 Days",
    durationDays: 8,
    group: "0–15",
    type: "Private tour",
    // TODO: placeholder image — swap for a dedicated Hemingways / Angama
    // Amboseli / Mara Plains / Governors' Mugie photo.
    img: buffalo,
    highlights: "Nairobi · Amboseli · Maasai Mara · Laikipia · Scheduled Flights",
    price: 14750,
    rating: 5,
    reviews: 0,
    overview: [
      "Kenya's finest luxury safari destinations connected by seamless scheduled flights — from Hemingways Nairobi to the elephant herds of Amboseli, the predator-rich Olare Motorogi Conservancy in the Maasai Mara, and the working-ranch conservation experience of Governors' Mugie in Laikipia.",
      "Validity: October and December departures only (excluding the festive season). From USD 14,750 per person.",
    ],
    included: [
      "Meet and greet services upon arrival",
      "Airport transfers in Nairobi",
      "Scheduled return flights from Nairobi Wilson Airport to all destinations",
      "Guided walking safaris in Kimana Sanctuary",
      "Laundry service, WiFi, all on-property guest experiences and scheduled airstrip transfers",
      "Emergency medical evacuation insurance",
      "All national park and conservancy conservation fees",
      "Full board accommodation including breakfast, lunch and dinner",
      "Soft drinks, beers, house wines and non-premium spirits (apart from Angama)",
      "Bed and breakfast meals in Nairobi",
      "Transportation in custom-built 4WD safari vehicles",
      "Two extended excursions daily within Mugie Ranch and surrounding areas",
      "All government taxes and VAT where applicable",
    ],
    excluded: [
      "International flights",
      "Premium wines and French Champagne where excluded",
      "Optional activities not mentioned above",
      "Gratuities and tips",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi — Welcome to Kenya",
        bullets: [
          "Warm welcome at JKIA after immigration and customs, then transfer to Hemingways Nairobi in Karen.",
          "Afternoon at leisure — swimming pool, landscaped gardens or an optional spa treatment.",
        ],
        stay: "Hemingways Nairobi",
      },
      {
        day: "Day 2",
        title: "Fly to Amboseli National Park (Angama Amboseli)",
        bullets: [
          "Scheduled flight from Wilson Airport to Kimana Airfield, with aerial views over the Great Rift Valley.",
          "Transfer to the lodge with your first game-viewing en route.",
          "Lunch overlooking the wilderness, then an afternoon game drive through Amboseli — famous for its enormous elephant herds.",
          "Sundowners, dinner and overnight at the lodge.",
        ],
        stay: "Angama Amboseli",
      },
      {
        day: "Day 3",
        title: "Discover Amboseli National Park",
        bullets: [
          "Early sunrise safari with Mount Kilimanjaro at its clearest.",
          "Leisurely breakfast, then a choice of signature experiences: private Kimana Sanctuary safaris, guided walking safaris, photography or birdwatching.",
          "Afternoon exploration of another section of the park, followed by sunset drinks and a gourmet dinner.",
        ],
        stay: "Angama Amboseli",
      },
      {
        day: "Day 4",
        title: "Fly to the Maasai Mara (Mara Plains Camp)",
        bullets: [
          "Scheduled flight to Olare Motorogi Airstrip in the Maasai Mara.",
          "Transfer to camp through the exclusive Olare Motorogi Conservancy.",
          "Afternoon game drive — renowned for outstanding lion, leopard and cheetah sightings.",
        ],
        stay: "Mara Plains Camp",
      },
      {
        day: "Day 5",
        title: "Full Day Exploring the Maasai Mara",
        bullets: [
          "Early morning safari during peak predator activity and golden light.",
          "Full-day safari into the Maasai Mara National Reserve, with a picnic lunch in the bush.",
          "Chance to witness the Great Migration river crossings (approx. July–October).",
        ],
        stay: "Mara Plains Camp",
      },
      {
        day: "Day 6",
        title: "Fly to Laikipia (Governors' Mugie)",
        bullets: [
          "Scheduled flight north to Mugie Airstrip in the Laikipia region.",
          "Transfer through the scenic Mugie Conservancy, where wildlife coexists with a working cattle ranch.",
          "Afternoon wildlife excursion in search of elephants, giraffes, Grevy's zebras, lions and leopards.",
          "Sundowners overlooking the conservancy.",
        ],
        stay: "Governors' Mugie",
      },
      {
        day: "Day 7",
        title: "Experience Mugie Conservancy",
        bullets: [
          "Choice of guided activities: wildlife drives, lion tracking with conservation teams, guided bush walks, canoeing, electric bike safaris, bush breakfasts and sundowners.",
          "Optional visits to the anti-poaching unit, resident giraffe Tala, and community conservation initiatives.",
          "Final safari evening dinner under the African stars.",
        ],
        stay: "Governors' Mugie",
      },
      {
        day: "Day 8",
        title: "Fly Back to Nairobi — Departure",
        bullets: [
          "Leisurely breakfast before transferring to Mugie Airstrip for your scheduled flight back to Wilson Airport, Nairobi.",
          "Onward transfer to Jomo Kenyatta International Airport for your international departure.",
        ],
      },
    ],
  },
  {
    slug: "4-days-royal-zebra-river-lodge-maasai-mara",
    title: "4 Days Royal Zebra River Lodge Fly-in Safari",
    destination: "Kenya",
    duration: "4 Days",
    durationDays: 4,
    group: "0–15",
    type: "Private tour",
    // TODO: placeholder image reused from Governor's Camp — swap for a
    // dedicated Zebra Royal River Lodge photo.
    img: maasaiMara,
    highlights: "Maasai Mara · Fly-in Safari · Bush Dining · Maasai Village Visit",
    // TODO: no rate was provided in the source itinerary (pay-2-stay-3
    // offer, price on request). Replace 0 with the actual per-person rate
    // once confirmed — this will otherwise render as "$0" wherever price
    // is formatted on the site.
    price: 1200,
    rating: 5,
    reviews: 0,
    overview: [
      "A four-day fly-in safari based at Zebra Royal River Lodge in the Maasai Mara, pairing classic game drives with a guided walking safari, a Maasai village visit, a private-vehicle sundowner and a memorable bush dinner under the stars — part of a pay-2-stay-3 offer.",
    ],
    included: [
      "Scheduled return flights between Nairobi and the Maasai Mara",
      "Private customized open 4x4 safari vehicle with a dedicated guide",
      "Full board accommodation (lunch & dinner Day 1, full board thereafter)",
      "Bubbly Bush Breakfast and Bush Dinner experiences",
      "Guided walking safari with naturalist guides",
      "Complimentary massage",
      "Unlimited premium alcoholic and non-alcoholic beverages",
      "Complimentary laundry services and WiFi",
    ],
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Maasai Mara National Reserve",
        bullets: [
          "Morning transfer to Wilson Airport for your scheduled flight to Ol Kiombo Airstrip in the Maasai Mara.",
          "Game drive en route to Zebra Royal River Lodge, followed by check-in and lunch.",
          "First afternoon game drive in a private open 4x4 safari vehicle.",
          "Sundowner experience in the bush before dinner, with private butler service throughout your stay.",
        ],
        stay: "Zebra Royal River Lodge",
      },
      {
        day: "Day 2",
        title: "Safari Adventures & Exclusive Lodge Experiences",
        bullets: [
          "Bubbly Bush Breakfast in a scenic Mara location, followed by a morning game drive.",
          "Guided walking safari with naturalist guides.",
          "Complimentary massage after lunch, then a late-afternoon game drive.",
          "Optional Night Game Drive in the Lemek or Ripoi Conservancy for guests on the Game Package.",
          "Unlimited premium alcoholic and non-alcoholic beverages throughout the day.",
        ],
        stay: "Zebra Royal River Lodge",
      },
      {
        day: "Day 3",
        title: "Culture, Wildlife & Bush Dining",
        bullets: [
          "Morning game drive exploring different areas of the Mara.",
          "Visit to a Maasai village to learn about local traditions and culture.",
          "Afternoon game drive followed by a Bush Dinner under the African sky.",
          "Complimentary laundry services and WiFi throughout your stay.",
        ],
        stay: "Zebra Royal River Lodge",
      },
      {
        day: "Day 4",
        title: "Maasai Mara → Nairobi",
        bullets: [
          "Leisurely breakfast before check-out.",
          "Final game drive en route to Ol Kiombo Airstrip.",
          "Scheduled return flight to Nairobi.",
        ],
      },
    ],
  },
];

export function getTour(slug: string) {
  return TOURS.find((t) => t.slug === slug);
}
