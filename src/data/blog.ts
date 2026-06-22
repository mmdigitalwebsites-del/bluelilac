import naivasha from "@/assets/blt 7.jpg";
import tsavo from "@/assets/blt 16.jpg";
import olpejeta from "@/assets/rhino.jpg";
import samburu from "@/assets/tour-serengeti.jpg";
import diani from "@/assets/beach.png";
import nairobi from "@/assets/blt 15.jpg";
import travel from "@/assets/view.jpg";
import guide from "@/assets/game drive.jpg";
import wildlife from "@/assets/blt 8.jpg";
import comparison from "@/assets/blt 3.jpg";
import maasaiMara from "@/assets/wilderbeast.png";
import KenyaSafari from "@/assets/kenya.png";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  img: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "lake-naivasha-safari-guide",
    title: "Lake Naivasha Safari Guide: Hippos, Boat Safaris & Crescent Island",
    excerpt:
      "Lake Naivasha delivers Kenya's most serene safari experience — hippos at close range, walking safaris on Crescent Island and Rift Valley sunsets.",
    category: "Destination Guides",
    date: "March 14, 2026",
    author: "Bluelilac Team",
    img: naivasha,
    content: [
      "Lake Naivasha sits high in Kenya's Great Rift Valley and is one of the most relaxed stops on any classic Kenyan safari. Unlike the open plains of the Mara, Naivasha rewards travellers with water-based wildlife — pods of hippos, fish eagles diving for tilapia, and endless flocks of pelicans drifting across the lake.",
      "A boat safari is the headline experience. Most guests head out in the late afternoon when the light softens and hippos surface to feed. Expect to glide within metres of them, with your guide narrating their behaviour and pointing out kingfishers, cormorants, and herons along the shoreline.",
      "Crescent Island, a private game sanctuary on the lake, is one of the only places in Kenya where you can walk freely among giraffes, zebras, wildebeest, and waterbuck — there are no predators. It's a magical add-on for families and photographers.",
      "Most travellers stay one or two nights, often combined with Hell's Gate National Park for cycling or as a stopover between Nairobi and the Maasai Mara. Sunsets over the Rift Valley escarpment are unforgettable.",
    ],
  },
  {
    slug: "tsavo-national-park-guide",
    title: "Tsavo National Park Guide: Kenya's Wild, Red-Elephant Wilderness",
    excerpt:
      "Tsavo is Kenya's largest protected wilderness — home to the famous red elephants, Mzima Springs, and a raw, uncrowded safari feel.",
    category: "Destination Guides",
    date: "March 7, 2026",
    author: "Bluelilac Team",
    img: tsavo,
    content: [
      "Tsavo National Park is split into Tsavo East and Tsavo West and together they form Kenya's largest protected wilderness — over 22,000 square kilometres of bush, lava flows, and palm-fringed rivers.",
      "The park's signature sight is its red elephants — coloured by the iron-rich dust they bathe in. Tsavo East offers open savannah perfect for spotting big herds, while Tsavo West is more rugged with volcanic landscapes, the crystal-clear Mzima Springs, and the Shetani lava flows.",
      "Game viewing is exceptional but less crowded than the Mara. You'll often have sightings entirely to yourself — a rare gift on a Kenyan safari today.",
      "Tsavo pairs beautifully with a beach extension to Diani or Mombasa, and is best visited during the dry months of June through October or January–February.",
    ],
  },
  {
    slug: "ol-pejeta-conservancy-guide",
    title:
      "Ol Pejeta Conservancy Guide: Rhinos, Chimps & the World's Last Two Northern White Rhinos",
    excerpt:
      "Ol Pejeta is home to the world's rarest animals — the last two northern white rhinos on Earth — plus chimps, rhinos and the Big Five.",
    category: "Conservation",
    date: "February 28, 2026",
    author: "James K.",
    img: olpejeta,
    content: [
      "Ol Pejeta Conservancy is one of the most important conservation stories on the planet. Set on the Laikipia plateau in the shadow of Mount Kenya, it protects the last two northern white rhinos on Earth — Najin and Fatu — under 24-hour armed guard.",
      "Beyond the rhinos, Ol Pejeta has the highest density of wildlife in Kenya, the only chimpanzee sanctuary in the country (Sweetwaters), and excellent Big Five viewing.",
      "Activities go beyond the standard game drive — lion tracking with researchers, behind-the-scenes rhino visits, and night drives to spot aardvarks and bushbabies.",
      "Two to three nights at Ol Pejeta works beautifully on a northern Kenya itinerary, often combined with Samburu and the Maasai Mara.",
    ],
  },
  {
    slug: "samburu-national-reserve-guide",
    title: "Samburu National Reserve: A Deep-Dive into Kenya's Northern Wildlife",
    excerpt:
      "Samburu is northern Kenya's greatest secret — home to the Special Five and a wilder, drier landscape than the southern parks.",
    category: "Destination Guides",
    date: "February 19, 2026",
    author: "Amina O.",
    img: samburu,
    content: [
      "Samburu National Reserve lies in Kenya's hot, arid north — a landscape of doum palms, the muddy Ewaso Ng'iro river, and rugged hills. The wildlife here is unlike anywhere else in Kenya.",
      "Samburu is famous for the 'Special Five' — Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk, and Somali ostrich — species you won't find further south. Leopards, lions, and elephants are common along the river.",
      "It's also a cultural highlight. The Samburu people, cousins of the Maasai, live alongside the reserve and many lodges arrange respectful village visits.",
      "Pair Samburu with Ol Pejeta and the Mara for the most complete Kenyan safari you can build.",
    ],
  },
  {
    slug: "diani-beach-kenya-guide",
    title: "Diani Beach Kenya Guide: Africa's Most Beautiful Beach for Safari Travellers",
    excerpt:
      "Diani Beach is Africa's finest safari-beach combination — 17 km of white sand, warm Indian Ocean water, and easy access from Nairobi.",
    category: "Beach & Coast",
    date: "February 10, 2026",
    author: "Bluelilac Team",
    img: diani,
    content: [
      "Diani Beach stretches for 17 kilometres along Kenya's south coast — talcum-white sand, palm trees, and water in every shade of turquoise. It's been voted Africa's leading beach destination multiple times.",
      "For safari travellers, Diani is the perfect way to end a trip. After a week tracking wildlife in the Mara or Tsavo, a few nights here means snorkelling the reef, kite-surfing, sunset dhow cruises, and excellent seafood.",
      "Direct flights from the Mara, Nairobi, and Tsavo land at Ukunda Airstrip, just minutes from the beach hotels.",
      "Best visited between October and March when the ocean is calm and the diving conditions are excellent.",
    ],
  },
  {
    slug: "nairobi-city-guide-for-safari-travellers",
    title: "Nairobi City Guide for Safari Travellers: Elephants, Giraffes & Great Restaurants",
    excerpt:
      "Nairobi is far more than a transit stop — it's a city with elephants, giraffes, world-class food and a creative cultural scene.",
    category: "Destination Guides",
    date: "January 28, 2026",
    author: "Bluelilac Team",
    img: nairobi,
    content: [
      "Nairobi is one of the only capital cities in the world with a national park inside it. Nairobi National Park sits a 20-minute drive from the city centre and offers genuine Big Five game viewing against a skyline backdrop.",
      "Beyond the park, the David Sheldrick Wildlife Trust lets you meet orphaned elephants during the daily public feeding hour, while the Giraffe Centre in Karen lets you hand-feed endangered Rothschild's giraffes.",
      "The food scene rivals any African capital — try Talisman in Karen, Cultiva, or Mama Oliech for Kenyan classics like ugali and fried tilapia.",
      "We recommend at least one full day in Nairobi at the start or end of any safari — it sets the tone for the journey.",
    ],
  },
  {
    slug: "solo-safari-kenya-guide",
    title: "Solo Safari Kenya: The Complete Guide to Travelling Alone in the Bush",
    excerpt:
      "A solo Kenya safari gives you a private guide, flexible itinerary and the freedom to make the trip entirely your own.",
    category: "Safari Planning",
    date: "January 19, 2026",
    author: "Amina O.",
    img: travel,
    content: [
      "A solo safari in Kenya is one of the most rewarding ways to travel. With a private guide and vehicle, you set the pace — early starts, long lunches, or as many leopard stake-outs as you want.",
      "Safety on a guided safari is excellent. You're never alone in the bush, and the lodges and camps we use are designed with single travellers in mind.",
      "Costs are higher per person than for groups, but a small-group scheduled departure is a great alternative — you meet like-minded travellers and share the vehicle.",
      "Solo travellers often tell us the safari is one of the most transformative trips of their lives. Sunrise on the Mara plains hits differently when you're sharing it only with the silence.",
    ],
  },
  {
    slug: "kenya-safari-budget-guide",
    title: "Kenya Safari Budget Guide: How Much Does a Kenya Safari Cost?",
    excerpt:
      "Kenya safari costs range from $250 to $1,500+ per person per night. Here's how to plan a trip that fits your budget without compromising the experience.",
    category: "Safari Planning",
    date: "January 6, 2026",
    author: "Bluelilac Team",
    img: guide,
    content: [
      "A Kenya safari can cost anywhere from $250 per person per night for a mid-range mobile camping trip to over $1,500 for an ultra-luxury private conservancy stay. Most travellers land between $400 and $700 per night for a high-quality mid-range to upper-mid-range experience.",
      "The biggest cost drivers are the parks you visit, the type of accommodation, and whether you fly between destinations or drive. Park fees alone are $100–$200 per person per day in the Mara and conservancies.",
      "Budget tips: travel during the green season (April–May, November), share a 4x4 with a small group, and stick to one or two parks rather than racing across the country.",
      "Splurge tips: a sunrise hot-air balloon over the Mara, a private conservancy with walking safaris, or a single luxury lodge night to end the trip.",
    ],
  },
  {
    slug: "kenya-wildlife-conservation-guide",
    title: "Kenya Wildlife Conservation: The Stories Behind the Safaris",
    excerpt:
      "Kenya's wildlife didn't survive by accident — it survived because of extraordinary conservation work led by communities, rangers, and conservancies.",
    category: "Conservation",
    date: "December 18, 2025",
    author: "James K.",
    img: wildlife,
    content: [
      "Every safari traveller arriving in Kenya is, knowingly or not, supporting one of the most ambitious conservation experiments on Earth. Community conservancies — land owned and managed by local Maasai, Samburu, and Laikipia communities — now protect more wildlife area than the national parks themselves.",
      "Organisations like the Northern Rangelands Trust, Ol Pejeta Conservancy, and the Mara Conservancies have shown that protecting wildlife only works when local people benefit directly.",
      "When you stay at a conservancy lodge, a share of your nightly fee goes straight to the community — funding schools, clinics, and ranger salaries.",
      "We deliberately weight our itineraries toward conservancies. The wildlife is just as good (often better, with night drives and walking safaris allowed), and your trip supports the people who keep this wilderness alive.",
    ],
  },
  {
    slug: "kenya-vs-tanzania-safari",
    title: "Kenya vs Tanzania Safari: Which Country Should You Choose?",
    excerpt:
      "Kenya vs Tanzania — an honest comparison of East Africa's two greatest safari countries, from the Mara to the Serengeti.",
    category: "Safari Planning",
    date: "December 5, 2025",
    author: "Bluelilac Team",
    img: comparison,
    content: [
      "Both Kenya and Tanzania protect parts of the same Mara-Serengeti ecosystem and both deliver world-class safaris. The right choice depends on the experience you're after.",
      "Choose Kenya if: you want easier logistics, lower costs, more variety in a short trip (Mara, Amboseli, Samburu, the coast), and conservancy-style safaris with walking and night drives.",
      "Choose Tanzania if: you want sheer scale (the Serengeti is six times the size of the Mara), the Ngorongoro Crater, Kilimanjaro, or to combine safari with Zanzibar.",
      "Our most popular itineraries combine both — a cross-border safari that takes in Amboseli, Arusha, Tarangire, the Serengeti, and Ngorongoro. You get the best of East Africa in one trip.",
    ],
  },
  {
    slug: "masai-mara-great-migration-guide",
    title: "Masai Mara Great Migration: When, Where & How to Witness It",
    excerpt:
      "The Great Migration is the greatest wildlife spectacle on Earth. Here's exactly when to go, where to stay, and how to see a river crossing.",
    category: "Safari Planning",
    date: "November 22, 2025",
    author: "Bluelilac Team",
    img: maasaiMara,
    content: [
      "The Great Migration is a year-round movement of over 1.5 million wildebeest, 300,000 zebras, and hundreds of thousands of gazelles between Tanzania's Serengeti and Kenya's Masai Mara — chasing the rain and the fresh grass.",
      "In the Masai Mara, the peak window is July through October. The herds cross the Mara River in dramatic, crocodile-filled spectacles — typically between mid-July and early September, though exact timing shifts every year with the rains.",
      "For the best chance of a river crossing, stay 3–4 nights inside the reserve or in a conservancy bordering the river (Mara North, Olare Motorogi). Conservancy stays mean fewer vehicles at sightings and the option to do walking and night safaris.",
      "Book 9–12 months in advance for July–September — the top camps sell out a year ahead. We can secure lodges, light-aircraft flights from Nairobi and an experienced migration guide as part of any tailor-made itinerary.",
    ],
  },
  {
    slug: "what-to-pack-for-a-kenya-safari",
    title: "What to Pack for a Kenya Safari: The Complete Checklist",
    excerpt:
      "Forget the safari-suit cliché. Here's the practical, tested packing list our guests actually use on Kenya safaris — clothes, gear, and the small things people forget.",
    category: "Safari Planning",
    date: "November 8, 2025",
    author: "Amina O.",
    img: KenyaSafari,
    content: [
      "Safari packing is all about layers, neutral colours and travelling light — most light-aircraft transfers limit you to 15 kg in a soft duffel bag.",
      "Clothing: 3–4 lightweight long-sleeve shirts (khaki, olive, beige — avoid bright white, dark blue and black), 2 pairs of zip-off trousers, a fleece for dawn drives, a wind/waterproof shell, a wide-brim hat, and comfortable closed-toe shoes. Most camps offer same-day laundry.",
      "Gear that matters: binoculars (8x42 is ideal), a camera with a 200–400mm zoom, a power bank, sunglasses, high-SPF sunscreen and strong insect repellent (DEET or picaridin).",
      "Don't forget: a refillable water bottle (most camps now ban single-use plastic), a small head torch, prescription medication in original packaging, and crisp US dollars for tips. Visas for Kenya are e-Visa only — apply at least a week before travel.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
