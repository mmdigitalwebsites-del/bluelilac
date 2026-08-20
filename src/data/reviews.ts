export type GoogleReview = {
  name: string;
  stars: number;
  tour: string;
  date?: string;
  text: string;
};

// Sourced from Google Business Profile reviews. Shared between
// src/routes/index.tsx and src/routes/about.tsx so the review list only
// needs to be updated in one place.
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Andrew King",
    stars: 5,
    tour: "Nairobi National Park Safari",
    date: "Aug 11, 2026",
    text: "Our safari with Blue Lilac Tours and Travel was memorable. Our guide, Boniface, made every game drive exciting with his knowledge and great sense of humor. I recall watching a group of giraffes up close. Boniface shared fascinating facts, including that giraffes have the same number of neck vertebrae as humans, just seven, but each can be over 25 cm long. It is also interesting that the long tongues of giraffes help them reach thorny acacia leaves. Boniface knew exactly where to take us for the best views and patiently waited while we enjoyed the moment. Everything was well organized, from the drives to the accommodation. Blue Lilac gave us an authentic and memorable taste of East Africa. Highly recommended.",
  },
  {
    name: "Ariya Otieno",
    stars: 5,
    tour: "Lake Nakuru National Park Safari",
    date: "Aug 11, 2026",
    text: "Blue Lilac Tours and Travel gave my family those moments you wish you could bottle and take home. Glenn, our driver, took us through Lake Nakuru National Park, where we came across rhinos in the wild. The kids went from excited whispers to sitting quietly with their eyes glued to the animals, intent on not missing any sight. Glenn handled the moment perfectly, keeping a respectful distance and giving us time to watch without rushing us along. What I appreciated most was how relaxed the whole experience felt. No pressure, no chasing sightings, just a beautifully paced family adventure.",
  },
  {
    name: "Martin Oloo",
    stars: 5,
    tour: "10-Day Group Safari",
    date: "Aug 10, 2026",
    text: "I recently joined a 10-day group tour with Blue Lilac Tours and Travel, and it was honestly a memorable experience. The trip was well organized, and travelling as a group made the whole experience even more enjoyable. One of the biggest highlights was visiting Tsavo East National Park. The wildlife experience was incredible, especially getting to see elephants in their natural habitat. A special thank you to Faith, our tour consultant, for keeping everything well coordinated throughout the trip. Our tour guides, Boniface and Glenn, were also very friendly, helpful, and knowledgeable, making the safari comfortable and enjoyable. I would definitely recommend Blue Lilac Tours and Travel to anyone looking for a memorable wildlife and safari experience in Kenya.",
  },
  {
    name: "Hellen Long",
    stars: 5,
    tour: "Lake Naivasha & Tsavo East",
    date: "Aug 8, 2026",
    text: "My experience with Blue Lilac Tours and Travel was honestly a great one. The trip to Lake Naivasha was beautiful, especially getting to see the flamingoes and the amazing scenery around the lake. We also visited Tsavo East National Park, and that was another incredible part of the trip. A big thank you to Edna, our tour consultant, for making the arrangements smooth and keeping everything well organized. Our tour guides, Boniface and Glenn, were also fantastic and made the trip enjoyable from start to finish. I would definitely recommend them to anyone looking to explore Kenya.",
  },
  {
    name: "Angeline Wanja",
    stars: 5,
    tour: "Nairobi National Park & Giraffe Centre",
    date: "Jul 2026",
    text: "We booked a full-day tour with Blue Lilac to Nairobi National Park and the Giraffe Centre, and it exceeded every expectation. At Nairobi National Park, our guide was incredibly knowledgeable — we spotted giraffes, zebras, and even a rhino, all with the city skyline in the background. The Giraffe Centre was the perfect follow-up; hand-feeding the Rothschild giraffes up close was a highlight for the whole family. What stood out most was how attentive and professional the team was throughout. Highly recommend Blue Lilac for a well-run, memorable safari experience!",
  },
  {
    name: "Isaac Biggedi",
    stars: 5,
    tour: "Weekend Safari Getaway",
    date: "Jul 2026",
    text: "I joined this trip saying it was just a weekend getaway. It was therapy disguised as a vacation. The vibes were 10/10 and the people turned into family before the trip was over. It was just laugh after laugh, good food, and great memories. Book that trip — life is not just a job. (Translated from Swahili)",
  },
  {
    name: "mlread22",
    stars: 5,
    tour: "6 Night / 7 Day Private Safari",
    date: "Mar 2026",
    text: "We just returned from a 6 night / 7 day private safari with Blue Lilac Tours, and the entire experience exceeded our expectations from start to finish. Edna was responsive, professional, and so easy to work with, and helped us craft an itinerary that was perfect for us. Once on safari, we were in the capable hands of our guide and driver, Boniface, who was knowledgeable, warm, and truly exceptional at spotting wildlife. Before booking, I received a quote from a 'luxury' safari company that was nearly twice the price, including two of the same lodges on our itinerary. We felt we received an exceptional, high-quality experience without paying an inflated premium simply for a label.",
  },
  {
    name: "Cherono Chepkwony",
    stars: 5,
    tour: "Zanzibar Getaway",
    date: "Jul 2026",
    text: "Such an amazing team you have at Blue Lilac. We enjoyed our stay in Zanzibar thanks to your planning. All the best!",
  },
  {
    name: "LuxeLoop Concierge",
    stars: 5,
    tour: "Nairobi National Park Safari",
    date: "Jul 2026",
    text: "Our experience exploring Nairobi National Park, the only park in the world situated within a city, was epic — an amazing itinerary from their tour consultants and a friendly, knowledgeable guide who ensured we saw all the Big 5 animals within the park. If you're visiting Kenya from outside, just reach out to them and they will help.",
  },
  {
    name: "Kariuki Kamau",
    stars: 5,
    tour: "Private Safari",
    date: "Jul 2026",
    text: "I loved how we were handled professionally throughout our itinerary.",
  },
  {
    name: "Kevin Okoth",
    stars: 5,
    tour: "Safari",
    date: "Dec 2025",
    text: "Amazing services offered from the staffs.",
  },
  {
    name: "Wayne Mugaditsi",
    stars: 5,
    tour: "Safari",
    date: "Aug 2025",
    text: "Obviously a five star review — the best travel agency right now in Kenya. Great customer care, fun destinations. A year of wonders without numbers.",
  },
  {
    name: "Monari Eugine",
    stars: 5,
    tour: "Safari",
    date: "Aug 2025",
    text: "We took so many pictures. It was a fantastic lifetime moment. I highly recommend this company — well organized and highly professional.",
  },
  {
    name: "Esther Muasya",
    stars: 5,
    tour: "Nairobi National Park Safari",
    date: "Aug 2024",
    text: "I had the best experience ever going to the Nairobi National Park with Blue Lilac Tours & Travel. The team was especially informative — I even got to know that we have the special five in addition to the Big Five. The driver maneuvered the trails with ease and expertise, and there were snacks on board to keep our sugar levels okay. I can't wait for my next adventure — indeed my best travel partner!",
  },
  {
    name: "William Mwendia",
    stars: 5,
    tour: "Safari",
    date: "Aug 2024",
    text: "Nice place to be, enjoy your African safaris and explore the world's exciting places with Blue Lilac Tours and Travel.",
  },
  {
    name: "Hilda Vuhasio",
    stars: 5,
    tour: "Nairobi National Park Safari",
    date: "Aug 2023",
    text: "Had an amazing experience visiting the Nairobi National Park courtesy of Blue Lilac Travels! Highly recommend and commend you guys on the good job.",
  },
  {
    name: "Vallary Kandie",
    stars: 5,
    tour: "Safari",
    date: "Aug 2023",
    text: "It was an amazing experience, their services were top notch. The tour guide was so good, making the experience unforgettable. I will definitely do it again.",
  },
  {
    name: "Edward Kinyanjui",
    stars: 5,
    tour: "Mombasa Trip",
    date: "Aug 2023",
    text: "Awesome experience with Blue Lilac Travels on my Mombasa trip.",
  },
  {
    name: "Andrew Oyileh",
    stars: 5,
    tour: "Safari",
    date: "Aug 2023",
    text: "It was nothing less of a beautiful experience.",
  },
  {
    name: "Wilfred Mwangi",
    stars: 5,
    tour: "Safari",
    date: "Aug 2023",
    text: "We had a wonderful experience with Blue Lilac. The team was very attentive to detail and their services were top notch. Looking forward to future expeditions with them.",
  },
  {
    name: "Jenifer Musyoka",
    stars: 5,
    tour: "Safari",
    date: "Aug 2023",
    text: "Loved your services. No inconveniences.",
  },
];
