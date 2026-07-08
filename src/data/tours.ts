import naivasha from "@/assets/blt 7.jpg";
import tsavo from "@/assets/blt 16.jpg";
import olpejeta from "@/assets/rhino.jpg";
import samburu from "@/assets/tour-serengeti.jpg";
import diani from "@/assets/beach.png";
import nairobi from "@/assets/blt 15.jpg";
import comparison from "@/assets/blt 3.jpg";
import maasaiMara from "@/assets/wilderbeast.png";
import kenyaSafari from "@/assets/kenya.png";
import tourKenya from "@/assets/kenya.png";
import underStars from "@/assets/understars.png";
import buffalo from "@/assets/buffalo.png";

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
    img: comparison,
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
    img: maasaiMara,
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
];

export function getTour(slug: string) {
  return TOURS.find((t) => t.slug === slug);
}
