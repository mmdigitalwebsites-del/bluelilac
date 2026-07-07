import naivasha from "@/assets/blt 7.jpg";
import tsavo from "@/assets/blt 16.jpg";
import olpejeta from "@/assets/rhino.jpg";
import samburu from "@/assets/tour-serengeti.jpg";
import diani from "@/assets/beach.png";
import nairobi from "@/assets/blt 15.jpg";
import travel from "@/assets/view.jpg";
import guide from "@/assets/game-drive.jpg";
import wildlife from "@/assets/blt 8.jpg";
import comparison from "@/assets/blt 3.jpg";
import maasaiMara from "@/assets/wilderbeast.png";
import kenyaSafari from "@/assets/kenya.png";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  img: string;
  content: string[];
  stats?: { value: string; label: string }[];
  experiences?: { number: number; title: string; body: string }[];
  quote?: { text: string; author: string };
  faqs?: { q: string; a: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "lake-naivasha-safari-guide",
    title: "Lake Naivasha Safari Guide: Hippos, Boat Safaris & Crescent Island",
    excerpt:
      "Lake Naivasha delivers Kenya's most serene safari experience — hippos at close range, walking safaris on Crescent Island and Rift Valley sunsets.",
    category: "Destination Guides",
    date: "March 14, 2026",
    author: "Blue Lilac Team",
    img: naivasha,
    stats: [
      { value: "1,884m", label: "Altitude above sea level" },
      { value: "139 km²", label: "Lake surface area" },
      { value: "400+", label: "Bird species recorded" },
      { value: "2 hrs", label: "Drive from Nairobi" },
    ],
    quote: {
      text: "The hippos surfaced so close I could hear them breathe. Nothing in 20 years of travel has matched that moment on the water at sunset.",
      author: "Blue Lilac guest, Lake Naivasha, January",
    },
    experiences: [
      {
        number: 1,
        title: "Boat Safari — Hippos & Fish Eagles at Close Range",
        body: "A late afternoon boat safari on Lake Naivasha is one of Kenya's most accessible yet extraordinary wildlife experiences. You glide within metres of hippo pods as they surface to breathe, while fish eagles dive for tilapia and pelicans drift in formation across the water. Your guide narrates every sighting, pointing out kingfishers, cormorants, and herons in the papyrus beds.",
      },
      {
        number: 2,
        title: "Crescent Island Walking Safari",
        body: "Crescent Island is a private game sanctuary set on a peninsula in the lake — and one of the only places in Kenya where you can walk freely among giraffes, zebras, wildebeest, and waterbuck without a vehicle. There are no predators on the island, making it perfect for families and photographers who want to get close to wildlife on foot.",
      },
      {
        number: 3,
        title: "Hell's Gate National Park — Cycling & Gorge Walks",
        body: "Just 30 minutes from Naivasha, Hell's Gate is Kenya's only park where you can cycle through wildlife. The dramatic gorge walk takes you through towering lava columns, hot springs, and natural spa pools. Zebra, buffalo, and giraffe wander alongside the cycling tracks — an experience unlike anything else in East Africa.",
      },
      {
        number: 4,
        title: "Rift Valley Escarpment Sunsets",
        body: "Lake Naivasha sits in the Great Rift Valley at 1,884 metres above sea level. As the sun drops behind the escarpment, the lake turns gold, the flamingos turn pink, and the air cools sharply. It is one of Kenya's most memorable natural spectacles — and you have it almost entirely to yourself.",
      },
    ],
    faqs: [
      {
        q: "How do I get to Lake Naivasha from Nairobi?",
        a: "Lake Naivasha is approximately 90 km northwest of Nairobi — about 2 hours by road via the Rift Valley escarpment viewpoint. Blue Lilac arranges private transfers as part of any itinerary.",
      },
      {
        q: "How long should I spend at Lake Naivasha?",
        a: "One to two nights is ideal — enough for a boat safari, Crescent Island walk, and a visit to Hell's Gate. Naivasha works perfectly as a stopover between Nairobi and the Maasai Mara.",
      },
      {
        q: "Is Lake Naivasha good for families?",
        a: "Excellent — the boat safari and Crescent Island walking safari are both child-friendly and produce memorable wildlife encounters without the intensity of a big-cat-focused park.",
      },
      {
        q: "What is the best time to visit Lake Naivasha?",
        a: "Lake Naivasha is excellent year-round. January to February and June to October offer the clearest weather. The green season (April to May) is lush and uncrowded, with the lowest accommodation rates.",
      },
    ],
    content: [
      "Lake Naivasha sits high in Kenya's Great Rift Valley and is one of the most relaxed stops on any classic Kenyan safari. Unlike the open plains of the Mara, Naivasha rewards travellers with water-based wildlife — pods of hippos, fish eagles diving for tilapia, and endless flocks of pelicans drifting across the lake.",
      "A boat safari is the headline experience. Most guests head out in the late afternoon when the light softens and hippos surface to feed. Expect to glide within metres of them, with your guide narrating their behaviour and pointing out kingfishers, cormorants, and herons along the shoreline.",
      "Crescent Island, a private game sanctuary on the lake, is one of the only places in Kenya where you can walk freely among giraffes, zebras, wildebeest, and waterbuck — there are no predators. It is a magical add-on for families and photographers.",
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
    author: "Blue Lilac Team",
    img: tsavo,
    stats: [
      { value: "22,000 km²", label: "Total protected area" },
      { value: "1,500+", label: "Elephants in Tsavo" },
      { value: "60+", label: "Mammal species" },
      { value: "500+", label: "Bird species" },
    ],
    quote: {
      text: "We had a herd of 40 red elephants to ourselves for 45 minutes. Not another vehicle in sight. That is what Tsavo feels like.",
      author: "Blue Lilac guest, Tsavo East, July",
    },
    experiences: [
      {
        number: 1,
        title: "The Red Elephants of Tsavo",
        body: "Tsavo's elephants are coloured deep terracotta by the iron-rich red dust they bathe in daily — a sight found nowhere else on earth. Tsavo East's open savannah makes spotting large herds straightforward, and the elephants here are among the biggest-tusked in Kenya. Sightings are frequently private, with no other vehicles present.",
      },
      {
        number: 2,
        title: "Mzima Springs — Crystal Clear Water in the Wilderness",
        body: "Deep in Tsavo West, Mzima Springs produces 50 million gallons of crystal-clear water daily from an underground volcanic aquifer. An underwater viewing chamber lets you watch hippos walk along the riverbed and crocodiles float overhead. It is one of Kenya's most extraordinary natural phenomena.",
      },
      {
        number: 3,
        title: "Shetani Lava Fields",
        body: "The Shetani lava flows in Tsavo West are a dramatic reminder of the volcanic forces that shaped this landscape 200 years ago. Walking across the cooled lava field with a guide — seeing where the flow consumed everything in its path — is a humbling and visually extraordinary experience.",
      },
      {
        number: 4,
        title: "Lugard Falls & the Galana River",
        body: "In Tsavo East, the Galana River creates a dramatic series of rapids and whirlpools at Lugard Falls. Crocodiles sun themselves on the rocks, and the riverbanks are lined with doum palms and wildlife. Sundowner stops here rank among Kenya's most scenic.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between Tsavo East and Tsavo West?",
        a: "Tsavo East is larger, flatter, and more open — ideal for big elephant herds and self-drive. Tsavo West is more rugged and scenic, with Mzima Springs, the Shetani lava flows, and the Ngulia rhino sanctuary. Most Blue Lilac itineraries combine both.",
      },
      {
        q: "Is Tsavo good for the Big Five?",
        a: "Yes. Tsavo has all Big Five, though rhino are rare and typically spotted in the Ngulia sanctuary in Tsavo West. Lions, elephants, buffalo, and leopard are regularly sighted across both parks.",
      },
      {
        q: "How long does it take to drive from Nairobi to Tsavo?",
        a: "Tsavo East gate (Voi) is approximately 330 km from Nairobi — about 4.5 hours by road. Tsavo West (Mtito Andei gate) is closer at around 250 km and 3.5 hours.",
      },
      {
        q: "Can I combine Tsavo with a beach holiday?",
        a: "Perfectly — Tsavo is Kenya's most natural beach-safari combination. Diani Beach and Mombasa are 2 hours from Tsavo East, making a 4-night Tsavo plus 3-night beach itinerary one of Kenya's most satisfying short trips.",
      },
    ],
    content: [
      "Tsavo National Park is split into Tsavo East and Tsavo West and together they form Kenya's largest protected wilderness — over 22,000 square kilometres of bush, lava flows, and palm-fringed rivers.",
      "The park's signature sight is its red elephants — coloured by the iron-rich dust they bathe in. Tsavo East offers open savannah perfect for spotting big herds, while Tsavo West is more rugged with volcanic landscapes, the crystal-clear Mzima Springs, and the Shetani lava flows.",
      "Game viewing is exceptional but less crowded than the Mara. You will often have sightings entirely to yourself — a rare gift on a Kenyan safari today.",
      "Tsavo pairs beautifully with a beach extension to Diani or Mombasa, and is best visited during the dry months of June through October or January to February.",
    ],
  },
  {
    slug: "ol-pejeta-conservancy-guide",
    title:
      "Ol Pejeta Conservancy Guide: Rhinos, Chimps & the World's Last Two Northern White Rhinos",
    excerpt:
      "Ol Pejeta Conservancy is where Kenya's greatest conservation story is being written in real time — Africa's largest black rhino sanctuary, the last two northern white rhinos on Earth, rescued chimpanzees, and world-class Big Five safaris.",
    category: "Conservation",
    date: "February 28, 2026",
    author: "James K.",
    img: olpejeta,
    stats: [
      { value: "364 km²", label: "Conservancy area" },
      { value: "2", label: "Last northern white rhinos on earth" },
      { value: "105+", label: "Black rhinos in sanctuary" },
      { value: "13", label: "Rescued chimpanzees" },
    ],
    quote: {
      text: "When Najin looked at me — the last female northern white rhino who can still stand — I felt the full weight of what extinction means. Not as a concept. As a fact.",
      author: "Blue Lilac guest, Ol Pejeta, September",
    },
    experiences: [
      {
        number: 1,
        title: "The Northern White Rhinos — A Once-in-History Encounter",
        body: "Najin and Fatu, mother and daughter, are the last two northern white rhinos on earth. They live under 24-hour armed guard in a dedicated enclosure within Ol Pejeta. Standing with these animals — knowing that you are in the presence of a subspecies that will not exist in the wild again — is an experience that changes how you think about conservation.",
      },
      {
        number: 2,
        title: "Black Rhino Tracking on Foot",
        body: "Ol Pejeta supports Africa's largest population of black rhinos — over 105 individuals across its 364 km². Rangers track individual rhinos on foot using radio telemetry and traditional tracking skills, and guests can join these walks. Standing on open ground as a black rhino emerges from the scrub at fifty metres is one of Kenya's most visceral wildlife experiences.",
      },
      {
        number: 3,
        title: "Sweetwaters Chimpanzee Sanctuary",
        body: "The Sweetwaters Chimpanzee Sanctuary within Ol Pejeta is home to 13 rescued chimpanzees from the Congo Basin. Watching chimpanzees — our closest genetic relatives, sharing 98.7% of our DNA — interact, groom, play, and communicate is an encounter that blurs the line between observing wildlife and meeting kin.",
      },
      {
        number: 4,
        title: "Night Game Drive — Kenya's Hidden Safari",
        body: "Ol Pejeta is one of the very few places in Kenya where night game drives are permitted. The conservancy's nocturnal cast is extraordinary: leopards moving openly, aardvarks excavating termite mounds, bat-eared foxes, civets, and occasionally the rare and elusive aardwolf.",
      },
      {
        number: 5,
        title: "Big Five Safari Game Drives",
        body: "Beyond the specialist experiences, Ol Pejeta delivers outstanding general game-viewing. Lions, cheetahs, leopards, elephants, buffalos, and the full suite of plains game are resident year-round. Because guest numbers are strictly controlled and guides have off-road access, the quality of viewing per hour consistently exceeds what is possible in the adjacent national parks.",
      },
    ],
    faqs: [
      {
        q: "What is Ol Pejeta Conservancy?",
        a: "Ol Pejeta Conservancy is a 364 km² private wildlife conservancy in Laikipia County, central Kenya — Africa's largest black rhino sanctuary and the only place in Kenya where you can see chimpanzees.",
      },
      {
        q: "What makes Ol Pejeta different from a national park?",
        a: "As a private conservancy, Ol Pejeta offers experiences unavailable in Kenya's national parks: night game drives, guided bush walks, chimpanzee sanctuary visits, and the opportunity to track rhinos on foot with rangers.",
      },
      {
        q: "Can I see the northern white rhino at Ol Pejeta?",
        a: "Yes. The last two northern white rhinos on earth — Najin and Fatu — live at Ol Pejeta under 24-hour armed guard. Visiting them is a profoundly moving experience.",
      },
      {
        q: "How do I get to Ol Pejeta Conservancy?",
        a: "Ol Pejeta is approximately 250 km north of Nairobi — about 3 to 4 hours by road via Nyeri and Nanyuki. Charter flights land at Nanyuki airstrip, approximately 20 minutes from the conservancy.",
      },
      {
        q: "Is Ol Pejeta good for first-time safari visitors?",
        a: "Excellent — Ol Pejeta's private conservancy status means guides have more freedom to go off-road, spend extended time at sightings, and access areas unavailable to public park vehicles.",
      },
    ],
    content: [
      "Ol Pejeta Conservancy is where Kenya's greatest conservation story is being written in real time. This 364 km² private conservancy in Laikipia is Africa's largest black rhino sanctuary, the last refuge of the world's only two remaining northern white rhinos, the only place in Kenya where you can see rescued chimpanzees, and a world-class Big Five safari destination.",
      "National parks are managed for mass access. Ol Pejeta is managed for depth of experience. As a private conservancy, it sets its own rules — night game drives, guided bush walks, and chimpanzee sanctuary visits are all available here.",
      "Every dollar spent at Ol Pejeta directly funds the conservancy's conservation and community programmes. The black rhino sanctuary costs millions of dollars per year to maintain — armed ranger patrols, veterinary care, habitat management, and the community benefits that make local people into conservation allies.",
      "Ol Pejeta sits perfectly between Samburu National Reserve to the north and Nairobi to the south, making it a natural centre-point in a northern Kenya circuit: Samburu then Ol Pejeta then Lake Nakuru then Masai Mara.",
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
    stats: [
      { value: "165 km²", label: "Reserve area" },
      { value: "5", label: "Samburu Special Five species" },
      { value: "900+", label: "Elephants in the ecosystem" },
      { value: "450+", label: "Bird species recorded" },
    ],
    quote: {
      text: "I had seen hundreds of giraffes in the Mara. But a reticulated giraffe in Samburu — with that completely different coat pattern — felt like seeing the animal for the first time.",
      author: "Blue Lilac guest, Samburu, March",
    },
    experiences: [
      {
        number: 1,
        title: "The Samburu Special Five",
        body: "Samburu is home to five species found nowhere else in Kenya's southern parks: the reticulated giraffe (a completely different species to the Maasai giraffe), Grevy's zebra (larger, with narrower stripes), Beisa oryx, gerenuk (the giraffe-necked antelope that stands on its hind legs to browse), and Somali ostrich. Spotting all five in a single game drive is common.",
      },
      {
        number: 2,
        title: "Ewaso Ng'iro River Game Drives",
        body: "The muddy Ewaso Ng'iro river is the lifeblood of Samburu, drawing elephants, lions, leopards, and crocodiles to its banks throughout the day. Game drives along the river produce some of Kenya's most reliable big-cat sightings — particularly leopard, which are seen here with unusual frequency.",
      },
      {
        number: 3,
        title: "Samburu Cultural Village Visits",
        body: "The Samburu people — cousins of the Maasai, equally striking in their red ochre and beaded jewellery — live alongside the reserve. Many lodges arrange respectful community visits where you meet warriors, learn about traditional medicine, and understand how a semi-nomadic culture has co-existed with wildlife for centuries.",
      },
      {
        number: 4,
        title: "Night Game Drives & Bush Walks",
        body: "Like Ol Pejeta, several Samburu lodges offer night game drives revealing the reserve's nocturnal wildlife: aardvarks, striped hyenas, bat-eared foxes, and porcupines. Early morning bush walks with a Samburu guide and armed ranger offer an entirely different perspective on tracking and reading the landscape.",
      },
    ],
    faqs: [
      {
        q: "What is the best time to visit Samburu?",
        a: "Samburu is excellent year-round due to its arid climate with no true rainy season. June to October and January to February offer the driest conditions and best game viewing. The short rains (October to November) bring green landscapes and lower rates.",
      },
      {
        q: "How far is Samburu from Nairobi?",
        a: "Samburu is approximately 350 km north of Nairobi — about 5 hours by road or 45 minutes by charter flight to Samburu airstrip. Blue Lilac arranges both road and air transfers.",
      },
      {
        q: "Can I combine Samburu with the Maasai Mara?",
        a: "Absolutely — the classic northern Kenya circuit combines Samburu, Ol Pejeta, and the Maasai Mara in one seamless itinerary. Our 9 Days Northern Frontier Classic Kenya is built around exactly this route.",
      },
      {
        q: "Is Samburu good for elephants?",
        a: "Exceptionally so. The Samburu-Buffalo Springs-Shaba ecosystem supports over 900 elephants, and many individuals are known by name to researchers. Elephant sightings at the Ewaso Ng'iro river are a daily highlight.",
      },
    ],
    content: [
      "Samburu National Reserve lies in Kenya's hot, arid north — a landscape of doum palms, the muddy Ewaso Ng'iro river, and rugged hills. The wildlife here is unlike anywhere else in Kenya.",
      "Samburu is famous for the Special Five — Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk, and Somali ostrich — species you will not find further south. Leopards, lions, and elephants are common along the river.",
      "It is also a cultural highlight. The Samburu people, cousins of the Maasai, live alongside the reserve and many lodges arrange respectful village visits.",
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
    author: "Blue Lilac Team",
    img: diani,
    stats: [
      { value: "17 km", label: "Of white sand beach" },
      { value: "27°C", label: "Average ocean temperature" },
      { value: "45 min", label: "Flight from Nairobi" },
      { value: "Oct–Mar", label: "Best diving season" },
    ],
    quote: {
      text: "We went from tracking lions in the Mara to snorkelling a coral reef in 48 hours. Kenya is the only country in the world where that sentence makes sense.",
      author: "Blue Lilac guest, Diani, October",
    },
    experiences: [
      {
        number: 1,
        title: "Snorkelling & Diving the Coral Reef",
        body: "Diani's fringing coral reef begins just 200 metres offshore. The water is warm (27C year-round), clear, and teeming with parrotfish, lionfish, sea turtles, and moray eels. Several dive operators offer PADI courses and daily boat dives to the outer reef. October to March is the prime diving season when visibility peaks.",
      },
      {
        number: 2,
        title: "Kite Surfing & Water Sports",
        body: "Diani's consistent south-easterly winds make it one of East Africa's top kite-surfing destinations. The beach also offers jet skiing, glass-bottom boat trips, deep-sea fishing, and sunset dhow cruises — the traditional Arab sailing vessel that has traded along this coast for a thousand years.",
      },
      {
        number: 3,
        title: "Colobus Conservation Centre",
        body: "The endangered Angolan colobus monkey — black and white, with a dramatic white cape — lives in the coastal forest behind Diani's beach hotels. The Colobus Conservation Centre rescues and rehabilitates injured individuals and runs educational walks through the forest. A beautiful contrast to the beach.",
      },
      {
        number: 4,
        title: "Shimba Hills National Reserve",
        body: "Just 30 minutes inland from Diani, Shimba Hills is a coastal forest reserve home to sable antelope (found nowhere else in Kenya), elephants, and rare forest birds. A half-day trip here with a Blue Lilac guide adds a genuine wildlife dimension to your beach extension.",
      },
    ],
    faqs: [
      {
        q: "How do I get to Diani Beach from Nairobi?",
        a: "Fly from Wilson Airport or Jomo Kenyatta to Ukunda Airstrip (45 minutes) — transfers from the strip to your hotel take 10 minutes. Alternatively, an overnight train to Mombasa followed by a short road transfer takes approximately 6 hours total.",
      },
      {
        q: "What is the best time to visit Diani Beach?",
        a: "October to March offers the calmest seas and best diving conditions. June to September has stronger winds, ideal for kite surfing. April and May bring the long rains and the lowest hotel rates.",
      },
      {
        q: "Is Diani safe for swimming?",
        a: "Yes — Diani's reef protects the beach from strong currents, making it one of Kenya's safest swimming beaches. Always follow local advice about tides and any seasonal jellyfish.",
      },
      {
        q: "How many nights do I need at Diani?",
        a: "Three to four nights allows time for snorkelling, a dhow cruise, a Colobus walk, and proper relaxation. Two nights is the minimum for a meaningful beach extension after a safari.",
      },
    ],
    content: [
      "Diani Beach stretches for 17 kilometres along Kenya's south coast — talcum-white sand, palm trees, and water in every shade of turquoise. It has been voted Africa's leading beach destination multiple times.",
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
    author: "Blue Lilac Team",
    img: nairobi,
    stats: [
      { value: "1,700m", label: "Altitude above sea level" },
      { value: "117 km²", label: "Nairobi National Park" },
      { value: "4M+", label: "City population" },
      { value: "30 min", label: "Park from city centre" },
    ],
    quote: {
      text: "I photographed a lion with the Nairobi skyline in the background. My friends at home thought I had photoshopped it. I had not.",
      author: "Blue Lilac guest, Nairobi National Park, February",
    },
    experiences: [
      {
        number: 1,
        title: "Nairobi National Park — Big Five in the City",
        body: "Nairobi National Park is the only wildlife park in the world adjacent to a capital city. Lions, leopards, cheetahs, rhinos, buffalos, and over 400 bird species live within 30 minutes of the city centre. The iconic photograph of a lion with Nairobi's skyline in the background is taken here. Morning game drives regularly produce cheetah and lion sightings.",
      },
      {
        number: 2,
        title: "David Sheldrick Wildlife Trust — Orphaned Elephants",
        body: "Every morning at 11am, the David Sheldrick Wildlife Trust opens its elephant nursery to visitors. Baby elephants rescued from across Kenya — orphaned by poaching, human-wildlife conflict, and natural causes — play in the mud, drink from bottles, and interact with visitors at close range. It is one of Kenya's most emotional wildlife experiences.",
      },
      {
        number: 3,
        title: "Giraffe Centre — Hand-Feed Rothschild's Giraffes",
        body: "The African Fund for Endangered Wildlife runs the Giraffe Centre in Karen, where you can hand-feed Rothschild's giraffes — one of the world's most endangered giraffe subspecies — from an elevated platform. The giraffes take food directly from your mouth if you are brave enough. The centre also has a warthog family that considers itself part of the staff.",
      },
      {
        number: 4,
        title: "Nairobi Food Scene — Africa's Most Exciting City Kitchen",
        body: "Nairobi's restaurant scene rivals any African capital. Try Talisman in Karen for continental cuisine in a garden setting, Cultiva for farm-to-table Kenyan ingredients, Mama Oliech for legendary nyama choma (roast meat) and ugali, or the Carnivore for a theatrical all-you-can-eat meat experience that has been feeding safari travellers since 1980.",
      },
    ],
    faqs: [
      {
        q: "How many days should I spend in Nairobi?",
        a: "One full day covers the key highlights — Nairobi National Park in the morning, Giraffe Centre or Sheldrick Trust in the late morning, and lunch in Karen. Two days allows for the Nairobi Museum, Kazuri Beads workshop, and a proper evening out.",
      },
      {
        q: "Is Nairobi safe for tourists?",
        a: "Yes, for tourists using reputable transport and staying in established areas. Blue Lilac provides private transfers throughout your Nairobi time and guides who know the city well.",
      },
      {
        q: "What neighbourhood should I stay in Nairobi?",
        a: "Karen and Gigiri are the two most popular areas for safari travellers — both are green, calm, and close to the Giraffe Centre, Sheldrick Trust, and Nairobi National Park.",
      },
      {
        q: "Can I do Nairobi National Park without a guide?",
        a: "Technically yes, but a guide dramatically improves sightings. Our Nairobi Park guides know where the lions and cheetahs are on any given morning and have the park radio network to track movement.",
      },
    ],
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
    stats: [
      { value: "100%", label: "Private guide & vehicle" },
      { value: "0", label: "Compromises on itinerary" },
      { value: "24/7", label: "Blue Lilac support" },
      { value: "Any", label: "Pace you choose" },
    ],
    quote: {
      text: "I was nervous about solo travel in Africa. By day two I realised my guide was the best travel companion I had ever had. We stayed at a cheetah sighting for two hours because I wanted to.",
      author: "Blue Lilac guest, Maasai Mara, solo trip, April",
    },
    experiences: [
      {
        number: 1,
        title: "A Completely Private Vehicle & Guide",
        body: "On a solo safari with Blue Lilac, the entire vehicle and your expert guide are yours alone. You stop when you want, stay as long as you want, and go where you want. No votes, no compromises. If you want to spend three hours watching a leopard in a tree, you spend three hours watching a leopard in a tree.",
      },
      {
        number: 2,
        title: "Flexible Daily Scheduling",
        body: "Solo safaris allow complete flexibility — early starts, long lunches at camp, afternoon walks, or spontaneous route changes based on radio reports of wildlife movement. Your guide builds each day around what you most want to experience, adjusting in real time.",
      },
      {
        number: 3,
        title: "Small-Group Departures as an Alternative",
        body: "If budget is a consideration, Blue Lilac's small-group scheduled departures are an excellent alternative. You join a maximum of 6 guests in a shared vehicle, often meeting like-minded travellers from around the world. The wildlife experience is identical; the cost per person is significantly lower.",
      },
      {
        number: 4,
        title: "Safety & Support Throughout",
        body: "Safety on a guided safari is excellent. You are never alone in the bush — your guide is trained in first aid, wilderness protocols, and has radio communication with lodges and other vehicles at all times. Blue Lilac's 24/7 support line means someone is always available for any issue, large or small.",
      },
    ],
    faqs: [
      {
        q: "Is it safe to go on safari alone?",
        a: "Yes. A guided safari is one of the safest ways to travel in East Africa. You have a professional guide with you at all times, lodges with security, and Blue Lilac's 24/7 support throughout your trip.",
      },
      {
        q: "Is solo safari expensive?",
        a: "A private solo safari costs more per person than sharing a vehicle. However, the experience — a guide entirely focused on you, flexible timing, no compromises — is significantly richer. Blue Lilac also offers small-group departures for solo travellers on a budget.",
      },
      {
        q: "Will I meet other travellers on a solo safari?",
        a: "At lodges and camps, yes — meal times are social and you will meet other guests from around the world. On game drives, you have your own vehicle. Many solo travellers find this the ideal balance of independence and connection.",
      },
      {
        q: "What is the best safari for a solo first-timer?",
        a: "Our 7 Days Kenya Classic Safari is our most popular solo itinerary — the Maasai Mara, Amboseli, and Lake Nakuru in one week, with a private guide throughout and lodges that are particularly welcoming to solo guests.",
      },
    ],
    content: [
      "A solo safari in Kenya is one of the most rewarding ways to travel. With a private guide and vehicle, you set the pace — early starts, long lunches, or as many leopard stake-outs as you want.",
      "Safety on a guided safari is excellent. You are never alone in the bush, and the lodges and camps we use are designed with single travellers in mind.",
      "Costs are higher per person than for groups, but a small-group scheduled departure is a great alternative — you meet like-minded travellers and share the vehicle.",
      "Solo travellers often tell us the safari is one of the most transformative trips of their lives. Sunrise on the Mara plains hits differently when you are sharing it only with the silence.",
    ],
  },
  {
    slug: "kenya-safari-budget-guide",
    title: "Kenya Safari Budget Guide: How Much Does a Kenya Safari Cost?",
    excerpt:
      "Kenya safari costs range from $250 to $1,500+ per person per night. Here's how to plan a trip that fits your budget without compromising the experience.",
    category: "Safari Planning",
    date: "January 6, 2026",
    author: "Blue Lilac Team",
    img: guide,
    stats: [
      { value: "$250–$500", label: "Mid-range per person/night" },
      { value: "$500–$900", label: "Upper-mid per person/night" },
      { value: "$900–$1,500+", label: "Luxury per person/night" },
      { value: "June & Nov", label: "Best value months" },
    ],
    quote: {
      text: "We had the same lion sighting as the guests at the $1,200/night camp next door. Our lodge cost $380. Budget well, not just big.",
      author: "Blue Lilac guest, Maasai Mara, June",
    },
    experiences: [
      {
        number: 1,
        title: "What Your Budget Actually Gets You",
        body: "Budget on a Kenya safari primarily determines accommodation quality, not wildlife quality. A mid-range tented camp at $350/night and a luxury private villa at $1,200/night share the same national park, the same animals, and often the same guide network. The difference is the quality of your bed, food, and facilities — not what you see on the game drive.",
      },
      {
        number: 2,
        title: "The Biggest Cost Drivers",
        body: "Park fees are non-negotiable and significant — the Masai Mara costs $100-$200 per person per day in park fees alone. Flying between parks costs $150-$400 per leg per person. Accommodation is the largest variable. Blue Lilac provides complete transparent pricing with no hidden costs — every quote specifies exactly what is and is not included.",
      },
      {
        number: 3,
        title: "Best Value Safari Circuits",
        body: "Our 4 Days Masai Mara and Lake Nakuru Safari delivers maximum wildlife in minimum time at the most accessible price point. Our 7 Days Kenya Classic Safari covers three parks with multiple Big Five sightings for $2,800-$4,200 per person at the mid-range tier — exceptional value for one of Africa's greatest wildlife journeys.",
      },
      {
        number: 4,
        title: "How to Travel in Shoulder Season",
        body: "June and November are Kenya's best-kept secrets. The Mara's resident lions, elephants, and cheetahs are there year-round — only the wildebeest migration is seasonal. In June and November, accommodation rates drop 20-40%, parks are quieter, and the landscape turns dramatically green after the rains. Blue Lilac's shoulder-season specials make luxury safari accessible on a mid-range budget.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum budget for a Kenya safari?",
        a: "A genuine Kenya safari with a qualified guide, reliable vehicle, and decent accommodation starts at approximately $250-$300 per person per night all-inclusive. Below this, quality compromises become significant. Blue Lilac does not offer safaris below this threshold.",
      },
      {
        q: "Are park fees included in Blue Lilac quotes?",
        a: "Yes. Every Blue Lilac quote is fully inclusive of park fees, accommodation, meals, game drives, and transfers. We never quote without park fees — they are not optional extras.",
      },
      {
        q: "Is it cheaper to book a Kenya safari independently?",
        a: "Rarely. Blue Lilac's relationships with lodges and camps produce rates individual travellers cannot access. Our volume also means priority allocation during peak season when independent bookers are waitlisted.",
      },
      {
        q: "What is the most cost-effective Kenya safari itinerary?",
        a: "Our 4 Days Masai Mara and Lake Nakuru Safari offers the best wildlife-to-cost ratio for short trips. For longer visits, our 7 Days Kenya Classic Safari is the definitive value-for-experience option.",
      },
    ],
    content: [
      "A Kenya safari can cost anywhere from $250 per person per night for a mid-range mobile camping trip to over $1,500 for an ultra-luxury private conservancy stay. Most travellers land between $400 and $700 per night for a high-quality mid-range to upper-mid-range experience.",
      "The biggest cost drivers are the parks you visit, the type of accommodation, and whether you fly between destinations or drive. Park fees alone are $100 to $200 per person per day in the Mara and conservancies.",
      "Budget tips: travel during the green season (April to May, November), share a 4x4 with a small group, and stick to one or two parks rather than racing across the country.",
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
    stats: [
      { value: "22,000+", label: "Anti-poaching rangers in Kenya" },
      { value: "34%", label: "Of Kenya's land under conservation" },
      { value: "2x", label: "Community land vs national parks" },
      { value: "$0", label: "Poaching revenue when tourism thrives" },
    ],
    quote: {
      text: "The ranger who guided our bush walk had protected this land for 18 years. His knowledge, his pride, his connection to these animals — that is what conservation looks like in person.",
      author: "Blue Lilac guest, Mara Conservancy, August",
    },
    experiences: [
      {
        number: 1,
        title: "Community Conservancies — Wildlife Surviving Outside Parks",
        body: "Community conservancies now protect more land in Kenya than the national parks themselves. The Northern Rangelands Trust alone supports 43 conservancies covering 42,000 km² — land owned and managed by Maasai, Samburu, and Laikipia communities who have turned wildlife into their most valuable economic asset. When you stay at a conservancy lodge, your money funds this directly.",
      },
      {
        number: 2,
        title: "Anti-Poaching Rangers — The Front Line",
        body: "Over 22,000 rangers protect Kenya's wildlife, many of them from the communities that historically hunted the same animals. The shift from poacher to protector — driven entirely by the economic opportunity tourism creates — is one of conservation's greatest success stories. Several lodges offer ranger walk-alongs where you hear these stories directly.",
      },
      {
        number: 3,
        title: "How Blue Lilac Supports Conservation",
        body: "Blue Lilac deliberately weights itineraries toward community conservancies and private reserves. The wildlife experience is superior (night drives, walking safaris, fewer vehicles), and the financial benefit to conservation is direct. A share of every booking also goes to wildlife and community initiatives through our conservation partnerships.",
      },
      {
        number: 4,
        title: "Conservation Success Stories You Will See",
        body: "Kenya's black rhino population has recovered from 254 individuals in 1984 to over 750 today — entirely through conservation effort. Elephant populations in community areas are growing. The Maasai Mara's lion population is one of the densest on earth. These are not accidents; they are the result of decades of commitment that your safari visit continues to fund.",
      },
    ],
    faqs: [
      {
        q: "Does safari tourism actually help conservation?",
        a: "Yes, directly and significantly. Tourism revenue funds rangers, anti-poaching operations, veterinary care, habitat management, and the community payments that make local people into conservation allies rather than threats.",
      },
      {
        q: "What is a community conservancy?",
        a: "A community conservancy is wildlife land owned and managed by local communities — Maasai, Samburu, Laikipia, and others — who receive direct economic benefit from the tourism their wildlife generates. They now cover more land than Kenya's national parks.",
      },
      {
        q: "Is conservation tourism ethical?",
        a: "When done correctly, yes. The key markers are: is the community benefiting directly? Are guests limited to protect wildlife from overcrowding? Is the operator transparent about where money goes? Blue Lilac only works with operators who meet all three criteria.",
      },
      {
        q: "Can I meet conservation rangers or researchers during my safari?",
        a: "Yes. Several conservancies offer researcher walk-alongs, behind-the-scenes rhino tracking experiences, and ranger Q&A sessions. Ask Blue Lilac to include one of these in your itinerary — they are among the most memorable experiences we offer.",
      },
    ],
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
    author: "Blue Lilac Team",
    img: comparison,
    stats: [
      { value: "1,500 km²", label: "Masai Mara area" },
      { value: "14,750 km²", label: "Serengeti area (10x larger)" },
      { value: "1.5M+", label: "Wildebeest in the migration" },
      { value: "Both", label: "Our recommendation" },
    ],
    quote: {
      text: "I asked them Kenya or Tanzania. They said both. I thought that was a sales pitch. It was not — it was the right answer.",
      author: "Blue Lilac guest, 13-day Kenya and Tanzania circuit, September",
    },
    experiences: [
      {
        number: 1,
        title: "Choose Kenya If — Logistics, Lions, and Conservancies",
        body: "Kenya offers easier logistics, lower domestic flight costs, and more variety in a short trip. The Masai Mara has one of the highest lion densities per km² on the continent — lion sightings on almost every game drive. Community conservancies allow walking safaris and night drives unavailable in Tanzanian national parks. Nairobi is East Africa's best-connected hub.",
      },
      {
        number: 2,
        title: "Choose Tanzania If — Scale, Crater, and Zanzibar",
        body: "Tanzania offers sheer scale — the Serengeti is 10 times the size of the Mara. The Ngorongoro Crater is the single most wildlife-dense location on earth, a collapsed volcano with over 25,000 animals in 260 km². And only Tanzania gives you Kilimanjaro — the backdrop to Amboseli from across the border — as the finale to a Zanzibar beach extension.",
      },
      {
        number: 3,
        title: "Choose Both — The Grand East Africa Circuit",
        body: "Blue Lilac's 13 Days Kenya and Tanzania Safari is our most beloved itinerary — Masai Mara, Lake Naivasha, Amboseli, Ngorongoro Crater, and the Serengeti in one seamless circuit. Two countries, five parks, the Great Migration, Kilimanjaro, and the crater. It answers the Kenya-or-Tanzania question by making it irrelevant.",
      },
      {
        number: 4,
        title: "The Migration — Which Country, Which Month",
        body: "The Great Migration is a year-round circular movement through both countries. Tanzania's Serengeti hosts calving season (January to March) and Grumeti River crossings (May to July). Kenya's Masai Mara hosts the dramatic Mara River crossings (July to October). The migration follows the rains through both countries — the right choice depends entirely on when you travel.",
      },
    ],
    faqs: [
      {
        q: "Is Kenya or Tanzania better for the Great Migration?",
        a: "Both. The migration is a circular, year-round event spanning both countries. Kenya's Mara River crossings (July to October) are the most dramatic spectacle. Tanzania's Serengeti hosts the calving season (January to March) and the Grumeti crossings (May to July).",
      },
      {
        q: "Is Kenya cheaper than Tanzania for safari?",
        a: "Kenya is generally slightly less expensive due to lower park fees and more competitive accommodation. Tanzania's park fees (particularly Ngorongoro and Serengeti) are among Africa's highest, but the experiences justify the cost.",
      },
      {
        q: "Can I do Kenya and Tanzania in one trip?",
        a: "Absolutely — our 9 Days Kenya Tanzania Safari and 13 Days Kenya and Tanzania Safari are built around seamless cross-border itineraries. We handle all permits, border crossings, and transfers.",
      },
      {
        q: "Do I need different visas for Kenya and Tanzania?",
        a: "Yes — they are separate countries requiring separate visas. However, both offer e-visas online and the process is straightforward. Blue Lilac sends detailed visa guidance after booking.",
      },
    ],
    content: [
      "Both Kenya and Tanzania protect parts of the same Mara-Serengeti ecosystem and both deliver world-class safaris. The right choice depends on the experience you are after.",
      "Choose Kenya if you want easier logistics, lower costs, more variety in a short trip (Mara, Amboseli, Samburu, the coast), and conservancy-style safaris with walking and night drives.",
      "Choose Tanzania if you want sheer scale (the Serengeti is six times the size of the Mara), the Ngorongoro Crater, Kilimanjaro, or to combine safari with Zanzibar.",
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
    author: "Blue Lilac Team",
    img: maasaiMara,
    stats: [
      { value: "1.5M+", label: "Wildebeest in the migration" },
      { value: "300,000", label: "Zebras in the migration" },
      { value: "Jul–Oct", label: "Peak Mara River crossings" },
      { value: "9–12 mo", label: "Advance booking recommended" },
    ],
    quote: {
      text: "The crossing lasted 40 minutes. Thousands of wildebeest, crocodiles, chaos. Then silence. Then the next wave began. Nothing prepares you for it.",
      author: "Blue Lilac guest, Mara River, August",
    },
    experiences: [
      {
        number: 1,
        title: "The Mara River Crossing — The Greatest Show on Earth",
        body: "Between July and October, wildebeest herds of tens of thousands gather on the banks of the Mara River before launching themselves across. Crocodiles wait in the water. Lions watch from the banks. The crossing can last minutes or hours, with multiple waves surging back and forth. It is chaotic, violent, and extraordinary — a raw natural spectacle that cannot be manufactured or predicted.",
      },
      {
        number: 2,
        title: "How to Maximise Your Chances of Seeing a Crossing",
        body: "Stay a minimum of 3 to 4 nights in the Mara or a bordering conservancy. Position yourself at crossing points early and wait — crossings cannot be scheduled. A good guide with radio contact to other vehicles dramatically improves your odds. Mara North, Olare Motorogi, and Naboisho conservancies offer excellent crossing access with fewer vehicles than the main reserve.",
      },
      {
        number: 3,
        title: "Migration Beyond the Crossing — Massed Predator Action",
        body: "The migration is not only about the river crossing. The arrival of 1.5 million wildebeest draws the Mara's lion prides, cheetah coalitions, and leopards into concentrated predator action unlike anything seen at other times of year. Kills happen daily. The general game viewing during migration season is the best in Africa.",
      },
      {
        number: 4,
        title: "The Calving Season — Tanzania, January to March",
        body: "If you cannot travel in July to October, January to March in Tanzania's Serengeti offers the calving season — 8,000 wildebeest calves born per day in the southern Serengeti. Predator activity is extraordinary as cheetahs, wild dogs, and lions hunt the vulnerable newborns. The calving plains at Ndutu are one of Africa's most electric wildlife environments.",
      },
    ],
    faqs: [
      {
        q: "When is the best time to see the Great Migration in Kenya?",
        a: "July through October is the peak window for Mara River crossings in Kenya. The herds typically arrive in the Mara in late June or early July, with crossings peaking in August. Exact timing shifts every year with the rains.",
      },
      {
        q: "Is the Great Migration guaranteed?",
        a: "No wildlife experience is guaranteed, but the migration is the most reliable large-scale wildlife spectacle in Africa. With 3 to 4 nights in the Mara during peak season and a knowledgeable guide, the odds of witnessing a river crossing are very high.",
      },
      {
        q: "How far in advance should I book for the migration?",
        a: "9 to 12 months in advance for July to September. The top camps in the Mara conservancies sell out a full year ahead. Blue Lilac secures allocations with lodges for the following season — contact us early.",
      },
      {
        q: "Should I stay inside the Masai Mara or in a conservancy?",
        a: "Conservancies (Mara North, Olare Motorogi, Naboisho) offer night drives, walking safaris, off-road driving, and far fewer vehicles at sightings. For the migration, they also provide excellent access to crossing points. Blue Lilac recommends conservancy stays for the most complete experience.",
      },
    ],
    content: [
      "The Great Migration is a year-round movement of over 1.5 million wildebeest, 300,000 zebras, and hundreds of thousands of gazelles between Tanzania's Serengeti and Kenya's Masai Mara — chasing the rain and the fresh grass.",
      "In the Masai Mara, the peak window is July through October. The herds cross the Mara River in dramatic, crocodile-filled spectacles — typically between mid-July and early September, though exact timing shifts every year with the rains.",
      "For the best chance of a river crossing, stay 3 to 4 nights inside the reserve or in a conservancy bordering the river (Mara North, Olare Motorogi). Conservancy stays mean fewer vehicles at sightings and the option to do walking and night safaris.",
      "Book 9 to 12 months in advance for July to September — the top camps sell out a year ahead. We can secure lodges, light-aircraft flights from Nairobi and an experienced migration guide as part of any tailor-made itinerary.",
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
    img: kenyaSafari,
    stats: [
      { value: "15 kg", label: "Typical light aircraft weight limit" },
      { value: "8x42", label: "Ideal binocular specification" },
      { value: "SPF 50+", label: "Recommended sunscreen" },
      { value: "Neutral", label: "Clothing colours only" },
    ],
    quote: {
      text: "I packed for two weeks in a soft bag the size of a carry-on. My guide said I was the most organised guest he had ever had. The secret is layers and neutrals.",
      author: "Blue Lilac guest, Kenya 14-day circuit, October",
    },
    experiences: [
      {
        number: 1,
        title: "Clothing — Layers, Neutrals, Nothing Bright",
        body: "The golden rule: neutral colours only. Khaki, olive, beige, tan, and grey. Avoid bright white (reflects glare), dark blue (attracts tsetse flies), and black (absorbs heat). Pack 3 to 4 lightweight long-sleeve shirts, 2 pairs of zip-off trousers, a mid-layer fleece for cold dawn drives, a wind and waterproof shell for open vehicles in rain, a wide-brim hat, and comfortable closed-toe shoes. Most camps offer same-day laundry.",
      },
      {
        number: 2,
        title: "Camera & Optics — Your Most Important Safari Investment",
        body: "Binoculars are non-negotiable — 8x42 is the ideal safari specification (enough magnification, wide enough field of view). For cameras, a lens of 200 to 400mm is ideal for wildlife. Bring a power bank as charging opportunities in remote camps can be limited to certain hours. A dust bag for your camera is useful in dry-season conditions.",
      },
      {
        number: 3,
        title: "Health & Wellness Essentials",
        body: "High-SPF sunscreen (SPF 50 minimum — the equatorial sun is intense), strong insect repellent with DEET or picaridin for evenings, any prescription medications in original packaging with a copy of your prescription, anti-malarial prophylaxis (confirm with your doctor 4 to 6 weeks before travel), and a basic first-aid kit. Hand sanitiser is provided at most lodges but useful to carry.",
      },
      {
        number: 4,
        title: "The Small Things People Forget",
        body: "A refillable water bottle — most camps now ban single-use plastic and provide filtered water. A small head torch for walking between tents at night. Crisp USD notes in small denominations for tipping guides and camp staff (the most important gesture you can make). A copy of your e-visa confirmation. And a journal — you will want to write things down.",
      },
    ],
    faqs: [
      {
        q: "Is there a luggage weight limit on Kenya safaris?",
        a: "Yes — light aircraft transfers (common between parks) typically restrict luggage to 15 kg in a soft-sided bag. No wheels, no hard shells. Blue Lilac provides detailed packing guidance including a weight checklist after booking.",
      },
      {
        q: "Do I need special safari clothing?",
        a: "No specialist gear required. Standard lightweight travel clothing in neutral colours works perfectly. Avoid camouflage patterns which are restricted in some East African countries.",
      },
      {
        q: "Should I bring a drone to photograph wildlife?",
        a: "No — drones are prohibited in all Kenyan national parks and most conservancies without specific permits. They disturb wildlife and other guests. Leave it at home.",
      },
      {
        q: "How much cash should I bring to Kenya?",
        a: "Budget approximately $15 to $20 per person per day for gratuities (guide and camp staff), plus spending money for curio shops and personal purchases. Crisp USD bills are preferred — old or damaged notes are sometimes refused.",
      },
    ],
    content: [
      "Safari packing is all about layers, neutral colours and travelling light — most light-aircraft transfers limit you to 15 kg in a soft duffel bag.",
      "Clothing: 3 to 4 lightweight long-sleeve shirts (khaki, olive, beige — avoid bright white, dark blue and black), 2 pairs of zip-off trousers, a fleece for dawn drives, a wind and waterproof shell, a wide-brim hat, and comfortable closed-toe shoes. Most camps offer same-day laundry.",
      "Gear that matters: binoculars (8x42 is ideal), a camera with a 200 to 400mm zoom, a power bank, sunglasses, high-SPF sunscreen and strong insect repellent (DEET or picaridin).",
      "Do not forget: a refillable water bottle (most camps now ban single-use plastic), a small head torch, prescription medication in original packaging, and crisp US dollars for tips. Visas for Kenya are e-Visa only — apply at least a week before travel.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
