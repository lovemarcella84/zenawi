export type PropertyStatus = 'available' | 'sold';

export interface Property {
  id: string;
  name: string;
  status: PropertyStatus;
  location: string;
  price: string;
  size: string;
  /** Real photo path if we have one; otherwise omitted and PlotArt placeholder is used */
  image?: string;
  gallery?: string[];
  tagline: string;
  summary: string;
  features: string[];
}

export const PROPERTIES: Property[] = [
  {
    id: 'golden-crest-estate',
    name: 'Golden Crest Estate',
    status: 'available',
    location: 'Joska',
    price: 'From KES 1.2M',
    size: '1/8 acre',
    image: '/img/properties/golden-crest-estate.jpg',
    tagline: 'Prime Joska Plots – Ready for Your Dream Home! 🔥',
    summary: 'Imagine owning land in a fast-growing neighborhood surrounded by beautiful developments and modern homes. Located just 2KM off Kangundo Road, Joska is one of the fastest-growing areas with high value appreciation — ideal for building, investment, or securing your family\'s future.',
    features: ['Security is a top priority', 'Water & electricity available', 'All-weather access roads', 'Developed neighbourhood', 'Proximity to schools and amenities', 'Ideal for residential or investment', 'Secure & peaceful environment'],
  },
  {
    id: 'sun-valley-estate',
    name: 'Sun Valley Estate Kikuyu',
    status: 'sold',
    location: 'Kikuyu, Kamangu',
    price: 'From KES 995K',
    size: '1/8 acre',
    image: '/img/properties/sun-valley-estate.jpg',
    tagline: 'Prime Kikuyu plots with clear title and strong growth potential.',
    summary: 'Sun Valley Estate offers affordable, strategically located plots in the fast-growing Kikuyu, Kamangu area — a developed neighbourhood ideal for building your dream home or making a smart investment with strong value appreciation.',
    features: ['Strategically located in a developed neighbourhood', 'Ready title deeds', 'Ready to build', 'Water & electricity available', 'Good access roads', 'Developed & secure environment', 'Ideal for residential homes & investment', 'Ideal for diaspora investors'],
  },
  {
    id: 'prestige-eden-phase-3',
    name: 'Prestige Eden Phase 3 Kamakis',
    status: 'sold',
    location: 'Ruiru, Kamakis (Silicon Valley Estate)',
    price: 'KES 2.1M',
    size: '1/8 acre',
    image: '/img/properties/prestige-eden-phase-3.jpg',
    tagline: 'Your dream property awaits, and we are here to make it a reality.',
    summary: 'Ready-to-build residential and commercial plots in Silicon Valley Estate, Kamakis, 2.8km from the Eastern Bypass with water, electricity and sewer already connected.',
    features: ['2.8km from Eastern Bypass, touches main road', 'Water, electricity & sewer on site', 'Next to Kapari Works/Kapblox Co.', '5 min drive from Mutonya Hospital', 'Residential: KES 2.4M | Commercial: KES 2.6M'],
  },
  {
    id: 'fadhili-gardens',
    name: 'Fadhili Gardens Malaa',
    status: 'available',
    location: 'Malaa',
    price: 'From KES 495K',
    size: '1/8 acre',
    image: '/img/properties/fadhili-gardens.jpg',
    tagline: 'Off Kangundo Road, near Malaa town — signposted and secured.',
    summary: 'Fadhili Gardens offers affordable Malaa plots with perimeter walling, utilities on site and ready title deeds — perfect for building your dream home or making a smart investment in a fast-growing area.',
    features: ['Offer price: KES 495K', 'Perimeter fence', 'Water & electricity', 'Gated community', 'Street lighting', 'Ready title deeds', 'Secure neighbourhood'],
  },
  {
    id: 'pendo-gardens',
    name: 'Pendo Gardens Phase 2',
    status: 'available',
    location: 'Kilimambogo',
    price: 'From KES 395K',
    size: '1/8 acre',
    image: '/img/properties/pendo-gardens.jpg',
    tagline: 'Kilimambogo Prime Plots – Your Perfect Place to Build & Invest!',
    summary: 'Own a beautiful 1/8 acre plot in the peaceful and fast-growing area of Kilimambogo, ideal for your dream home or future investment.',
    features: ['Special offer – now only KES 395K', 'Just 1 KM off tarmac', 'Ready title deeds', 'Ready to build', 'Water & electricity on site', 'Good access roads', 'Serene & secure environment', 'Developed neighbourhood', 'Perfect for residential homes & investment'],
  },
  {
    id: 'royal-groove-estate',
    name: 'Royal Groove Estate',
    status: 'available',
    location: 'Juja Farm',
    price: 'KES 1.5M',
    size: '1/8 acre',
    image: '/img/properties/royal-groove-estate.jpg',
    tagline: 'Own a piece of land in a secure and growing community!',
    summary: 'Royal Groove Estate is strategically located in Juja Farm, just a 5-minute drive from Juja Farm Town, offering convenience, accessibility, and a great environment for both residential development and investment.',
    features: [
      'Only 5 minutes from Juja Farm Town',
      'Ready Title Deeds',
      'Located in a gated community with a perimeter wall and gate',
      'Water on site',
      'Electricity on site',
      'Ideal for building your dream home or investing',
      'KSh 1.5 Million which is Title Transfer Inclusive',
    ],
  },
  {
    id: 'muthaara-phase-22',
    name: 'Muthaara Phase 22',
    status: 'available',
    location: 'Thika, Muthaara, Kiambu County',
    price: 'KES 695K',
    size: '1/8 acre',
    image: '/img/properties/muthaara-phase-22.jpg',
    tagline: 'Own Land. Build Your Future. Invest with Confidence.',
    summary: 'Muthaara Phase 22 is a thoughtfully planned residential land development in Thika, Muthaara, Kiambu County, offering an excellent opportunity for homebuyers and property investors looking to secure land in a developing area. Developed with accessibility, convenience, and long-term value in mind, Muthaara Phase 22 provides an ideal foundation for building your dream home, developing rental units, or securing land as part of your long-term property investment portfolio. Muthaara is an increasingly attractive destination for residential development, benefiting from ongoing infrastructure and settlement growth. Muthaara Phase 22 gives you the opportunity to secure a parcel of land while the area continues to develop. Whether you are a first-time land buyer, aspiring homeowner, or property investor, this project offers a practical pathway to land ownership with flexible payment options and professional support throughout the buying process. Land remains a valuable asset for individuals looking to establish homes and build long-term wealth. With essential utilities, accessible roads, and title documentation in place, buyers can make informed decisions as they plan for construction or future investment. At Zenawi Real Estate Company, we believe that buying land should be a transparent and supported process. From selecting your preferred plot to documentation and ownership, our team is available to guide you every step of the way. Don\'t just dream about owning land, take the step towards making it a reality.',
    features: [
      'Strategic location: Thika, Muthaara, Kiambu County',
      'Residential plots: Ideal for home construction and property development',
      'Ready title deeds: Secure your ownership with proper documentation',
      'Water available on site',
      'Electricity available on site',
      'Accessible roads',
      'Flexible installment payment options',
      'Complimentary site visits for interested clients',
      'Professional guidance from the Zenawi Real Estate team',
    ],
  },
  {
    id: 'juja-eden-phase-18',
    name: 'Juja Eden Phase 18',
    status: 'available',
    location: 'Juja, Muthaara',
    price: 'From KES 595K',
    size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-18.jpg',
    tagline: 'Ready for immediate settlement — a worthy investment.',
    summary: 'Just 6KM from Thika Superhighway and 30 minutes from Nairobi CBD, Eden Phase 18 offers well-demarcated 1/8-acre plots in a fast-growing, well-serviced neighbourhood — perfect for a dream home or rental investment.',
    features: ['6KM from Thika Superhighway, 30 mins to Nairobi CBD', 'Close to schools, hospitals, shopping & churches', 'Ready individual freehold title deeds', 'Water, electricity & access roads on site', 'Cash: KES 595,000 | Installments: KES 695,000 (up to 6 months)', 'Bank financing available', 'Free site visits daily at 10:00 AM & 2:00 PM'],
  },
  {
    id: 'juja-eden-phase-14',
    name: 'Juja Eden Phase 14',
    status: 'sold',
    location: 'Juja, Kwa Murage',
    price: 'KES 850K',
    size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-14-gal-1.jpg',
    tagline: 'Value-added Juja plots with title deeds inclusive.',
    summary: 'A gated community 150m from the ongoing tarmac in Kwa Murage, Juja Farm, just 100m from Juja Athi Shopping Center and close to schools, hospitals and police.',
    features: ['100m from Juja Athi Shopping Center', 'Near schools, churches, hospitals & police post', 'Water & electricity on site', 'Cash offer: KES 850,000 (interest-free, 90 days)', 'Installment plans up to 12 months', '30 min drive from Nairobi CBD'],
  },
  {
    id: 'kikuyu-eden-phase-1',
    name: 'Kikuyu Eden Phase 1 — Thigio',
    status: 'sold',
    location: 'Kikuyu, Thigio',
    price: 'KES 1,200,000',
    size: '1/8 acre',
    image: '/img/properties/kikuyu-eden-phase-1.jpg',
    tagline: 'Ready-to-build plots in Kikuyu — book now.',
    summary: 'Kikuyu Eden Phase 1 in Thigio sits near the Thogoto–Mutarakwa road with gated security and ready titles.',
    features: ['Gated community', 'Water & electricity on site', 'Ready title deeds', 'Perimeter fence', 'Proximity to Kikuyu town', 'Ideal for home building'],
  },
  {
    id: 'juja-eden-phase-5',
    name: 'Juja Eden Phase 5',
    status: 'sold',
    location: 'Juja',
    price: 'KES 585K',
    size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-5.jpg',
    tagline: 'Affordable Juja Eden living with flexible payment plans.',
    summary: 'Juja Eden Phase 5 remains a popular choice for first-time buyers seeking verified land near Juja town.',
    features: ['Flexible payment plan', 'Ready title deeds', 'Water & electricity', 'Access roads', 'Secure neighbourhood', 'Free site visit'],
  },
  {
    id: 'juja-eden-phase-6', name: 'Juja Eden Phase 6', status: 'sold', location: 'Juja', price: 'KES 890K', size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-6.jpg',
    tagline: 'Fully subscribed — thank you to our clients.', summary: 'Juja Eden Phase 6 sold out. Explore our available Juja Eden phases for similar plots.',
    features: ['Title deed ready', 'Water and electricity', 'Gated community', 'Access roads'],
  },
  {
    id: 'juja-eden-phase-7', name: 'Juja Eden Phase 7', status: 'sold', location: 'Juja', price: 'KES 950K', size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-7.jpg',
    tagline: 'Fully subscribed.', summary: 'Juja Eden Phase 7 is sold out. Ask our team about current Juja availability.',
    features: ['Title deed ready', 'Water and electricity', 'Developed neighbourhood'],
  },
  {
    id: 'juja-eden-phase-8', name: 'Juja Eden Phase 8', status: 'sold', location: 'Juja', price: 'KES 875K', size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-8.jpg',
    tagline: 'Fully subscribed.', summary: 'Juja Eden Phase 8 sold out successfully. Similar plots are available in later phases.',
    features: ['Title deed ready', 'Water and electricity', 'Access roads'],
  },
  {
    id: 'juja-eden-phase-9', name: 'Juja Eden Phase 9', status: 'sold', location: 'Juja', price: 'KES 1.35M', size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-9.jpg',
    tagline: 'Fully subscribed.', summary: 'Juja Eden Phase 9 is sold out. Contact us for the latest Juja listings.',
    features: ['Title deed ready', 'Water and electricity', 'Gated community'],
  },
  {
    id: 'juja-eden-phase-10', name: 'Juja Eden Phase 10', status: 'sold', location: 'Juja', price: 'KES 500K', size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-10-gal-1.jpg',
    tagline: 'Fully subscribed.', summary: 'Juja Eden Phase 10 sold out. See Juja Eden Phase 14 and 18 for available options.',
    features: ['Title deed ready', 'Water and electricity', 'Access roads'],
  },
  {
    id: 'juja-eden-phase-11', name: 'Juja Eden Phase 11', status: 'sold', location: 'Juja', price: 'KES 690K', size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-11.jpg',
    tagline: 'Fully subscribed.', summary: 'Juja Eden Phase 11 is sold out.',
    features: ['Title deed ready', 'Water and electricity', 'Gated community'],
  },
  {
    id: 'juja-eden-phase-12', name: 'Juja Eden Phase 12', status: 'sold', location: 'Juja', price: 'KES 1.2M', size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-12.jpg',
    tagline: 'Fully subscribed.', summary: 'Juja Eden Phase 12 sold out.',
    features: ['Title deed ready', 'Water and electricity', 'Access roads'],
  },
  {
    id: 'juja-eden-phase-13',
    name: 'Juja Eden Phase 13',
    status: 'sold',
    location: 'Juja, Muthaara',
    price: 'KES 595K',
    size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-13-gal-1.jpg',
    tagline: 'Fully subscribed.',
    summary: 'Located in Muthaara next to Malaba Shopping Centre, 8km from Thika Superhighway, with a gated community setup suited to residential or speculative buyers.',
    features: ['Next to Malaba Shopping Centre', '8KM from Thika Superhighway', 'Room for home, 2 parking spaces & compound', 'Gated community', 'Accessible via graded murram road'],
  },
  {
    id: 'juja-eden-phase-17',
    name: 'Juja Eden Phase 17',
    status: 'sold',
    location: 'Juja',
    price: 'KES 895K',
    size: '1/8 acre',
    image: '/img/properties/juja-eden-phase-17.jpg',
    tagline: "Don't wait — invest in Juja Eden Phase 17 today and be part of its incredible growth!",
    summary: 'Following the sellout of Phase 16, Eden Phase 17 offers spacious plots just 3KM from Juja Farm Town via tarmacked Juja Farm Road — 10 minutes from Thika Superhighway and 25 minutes from Nairobi CBD, in a rapidly growing real estate hotspot.',
    features: ['3KM from Juja Farm Town via tarmacked road', '10 mins to Thika Superhighway, 25 mins to Nairobi CBD', 'Ready freehold title deeds', 'Water, electricity & maintained access roads', "Near JKUAT, Juja Preparatory & Mang'u High School", 'Near Kalimoni Mission & Juja Modern Hospital', 'Juja City Mall, Naivas & Spur Mall nearby', 'Cash: KES 895,000 | Installments: KES 945,000 (up to 6 months)', 'Bank financing available'],
  },
  {
    id: 'prestige-eden-phase-1', name: 'Prestige Eden Phase 1 Kamakis', status: 'sold', location: 'Ruiru, Kamakis', price: 'KES 3M', size: '1/8 acre',
    image: '/img/properties/prestige-eden-phase-1.jpg',
    tagline: 'Fully subscribed.', summary: 'Prestige Eden Phase 1 Kamakis sold out. Phase 3 remains available in Kamakis.',
    features: ['Title deed ready', 'Water and electricity', 'Strategic Kamakis location'],
  },
  {
    id: 'prestige-eden-phase-2',
    name: 'Prestige Eden Phase 2 Kamakis',
    status: 'sold',
    location: 'Ruiru, Kamakis (Silicon Valley Estate)',
    price: 'KES 1.5M',
    size: '1/8 acre',
    image: '/img/properties/prestige-eden-phase-2.jpg',
    tagline: 'Your dream property awaits, and we are here to make it a reality.',
    summary: 'Prime residential and commercial plots in Silicon Valley Estate, Kamakis, 4km from the Eastern Bypass with water, electricity and sewer already on site.',
    features: ['4km from Eastern Bypass', 'Water, electricity & sewer on site', 'Near Neema Oasis, Wisdom Towers Schools & North Park Mall', 'Close to RFH Hospital', 'Residential: KES 1.5M | Commercial: KES 1.7M'],
  },
  {
    id: 'malaa-eden-phase-2', name: 'Malaa Eden Phase 2', status: 'sold', location: 'Malaa, Kangundo Rd', price: 'KES 550K', size: '1/8 acre',
    image: '/img/properties/malaa-eden-phase-2-gal-1.jpg',
    tagline: 'Fully subscribed.', summary: 'Malaa Eden Phase 2 is sold out. See Fadhili Gardens Malaa for current Malaa availability.',
    features: ['Title deed ready', 'Water and electricity', 'Off Kangundo Road'],
  },
];

export const CONTACT = {
  whatsapp: '254794000888',
  whatsappDisplay: '0794 000 888',
  phoneDisplay: '0758 000 111 | 0794 000 888',
  email: 'info@zenawi.co.ke',
};

export function waLink(msg: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/** Gallery slots — uses custom gallery if set, otherwise derives from the
 *  {id}-gal-1.jpg / {id}-gal-2.jpg naming convention used on disk.
 *  Capped at 2 images per property (primary shot + one alternate angle). */
export function getPropertyGallery(property: Property): string[] {
  if (property.gallery?.length) return property.gallery.slice(0, 2);
  return [
    `/img/properties/${property.id}-gal-1.jpg`,
    `/img/properties/${property.id}-gal-2.jpg`,
  ];
}