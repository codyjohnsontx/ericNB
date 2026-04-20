/**
 * Single source of truth for business facts and marketing copy.
 * Replace placeholders with real NAP, license, URLs, and photography before launch.
 */

export const business = {
  businessName: "Comal River Bodywork",
  therapistName: "Eric Uran, LMT",
  tagline: "Therapeutic massage in New Braunfels — private sessions and house calls.",
  texasLicenseNumber: "MT###### (placeholder — add your Texas massage therapy license)",
  phoneDisplay: "(830) 555-0142",
  phoneTel: "+18305550142",
  email: "hello@comalriverbodywork.example",
  city: "New Braunfels",
  state: "TX",
  streetAddress: "Private studio near downtown New Braunfels (exact address shared after booking)",
  postalCode: "78130",
  country: "US",
  /** Full production URL; keep in sync with astro.config.mjs `site` */
  canonicalOrigin: "https://example.com",
  bookingUrl: "https://example.com/booking-placeholder",
  /** If you embed Square/Acuity, paste the HTTPS embed URL here */
  bookingEmbedUrl: "",
  responseTimeNote:
    "Messages are checked between sessions. If you need a same-day answer, text is fastest.",
  hours: [
    { days: "Tuesday – Friday", hours: "10:00a – 6:00p" },
    { days: "Saturday", hours: "9:00a – 2:00p" },
    { days: "Sunday – Monday", hours: "Closed" },
  ],
  serviceAreas: [
    "New Braunfels",
    "Gruene",
    "Bulverde (within radius)",
    "Garden Ridge (within radius)",
    "Schertz / Cibolo (house calls, travel fee may apply)",
  ],
  serviceAreaSummary:
    "Private sessions in a quiet New Braunfels studio, plus house calls within a practical driving radius of downtown New Braunfels.",
  travel: {
    radiusMiles: 12,
    feeInsideRadius: 0,
    feeOutsideNote:
      "House calls outside the included radius may be available with an added travel fee — ask when you book.",
    parkingNote:
      "For house calls, please reserve a calm space with room for a portable table and clear walkway access.",
  },
  payments: {
    methods: ["Card", "Apple Pay / Google Pay (via booking checkout)", "HSA/FSA cards when accepted by processor", "Local Venmo / Zelle (by request for returning clients)"],
    depositNote:
      "Online booking may collect a card on file or a small deposit to protect appointment time. You will see the exact policy at checkout.",
  },
  cancellation: {
    summary:
      "Please cancel or reschedule at least 24 hours in advance when possible. Late cancellations may be subject to a fee, especially for house calls — details are shown at booking checkout.",
  },
  trustHighlights: [
    "Texas-licensed massage therapist",
    "Straightforward pricing — no surprise add-ons at checkout",
    "Online booking with clear session options",
    "Local to New Braunfels with transparent travel boundaries",
  ],
  hero: {
    headline: "Massage therapy in New Braunfels that fits real life.",
    supporting:
      "Therapeutic and relaxation-focused sessions in a private studio — or a professional house call when you need care at home. Easy online booking, clear pricing, and a calm, professional experience.",
  },
  aboutPreview: {
    bio: "I’m Eric, a New Braunfels-based licensed massage therapist. My work blends focused therapeutic techniques with slower relaxation work — so you leave feeling more comfortable in your body, not “worked over.”",
    cta: "Read more about credentials and approach",
  },
  aboutPage: {
    bioExtended: [
      "I started Comal River Bodywork to offer something simple: skilled massage therapy with clear expectations, respectful communication, and flexible options for busy people and parents.",
      "Before moving to New Braunfels, I worked in clinical-adjacent and spa settings. I liked pieces of both worlds — the structure of therapeutic work and the calm pacing of relaxation massage — but I wanted a more local, personal practice with fewer surprises at checkout.",
      "Today, I see clients in a private studio near downtown New Braunfels and offer house calls when it is a good fit for your space and schedule.",
    ],
    credentials: [
      "Licensed Massage Therapist (Texas)",
      "Continuing education in prenatal, deep tissue, and pain-science informed approaches",
      "Clear intake process and conservative treatment planning",
    ],
    philosophy:
      "Massage therapy should feel steady and professional — not salesy, not clinical-cold. I’ll meet you where you are, explain what I’m doing in plain language, and adjust pressure and techniques based on your goals and comfort.",
    whyExists:
      "New Braunfels is growing fast, and a lot of people are juggling work, kids, training, and travel. I wanted a local option that respects your time: book online, know what it costs, and get care that supports sleep, recovery, and everyday comfort.",
    studioVsHouseCall:
      "The studio is ideal when you want a quiet, controlled environment. House calls are a strong option if you are postpartum, managing a flare-up, or simply want to stay home — as long as there is adequate space and a calm setting for safe table setup.",
  },
  giftCards: {
    note: "Gift cards are coming soon. For now, you can book a session for someone else by choosing their appointment time and paying at checkout — or text us to arrange a simple gift certificate.",
  },
  addOns: {
    note: "Add-ons (focused scalp work, extra foot work, aromatherapy) may be offered seasonally. Ask at booking if you want a few minutes dedicated to a specific area.",
  },
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "",
  },
  /** Used in previews and pricing tables */
  sessionPricing: [
    { minutes: 60, studioPrice: 125, houseCallPrice: 155 },
    { minutes: 90, studioPrice: 165, houseCallPrice: 195 },
    { minutes: 120, studioPrice: 205, houseCallPrice: 235 },
  ],
  seo: {
    defaultTitle: "Comal River Bodywork | Massage Therapy in New Braunfels, TX",
    defaultDescription:
      "Licensed massage therapist in New Braunfels offering therapeutic massage, deep tissue, prenatal, sports, and relaxation sessions — private studio and house calls with transparent pricing and online booking.",
  },
} as const;

export type Business = typeof business;
