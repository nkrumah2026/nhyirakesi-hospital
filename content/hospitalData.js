export const hospitalInfo = {
  name: "Nhyirakesi Wellness Hospital",
  shortName: "Nhyirakesi Hospital",
  slogan: "HOME of Natural, Scientific Health, Wellness, Beauty & Longevity.",
  category: "Alternative & Holistic Health Services",
  status: "Open 24/7",
  address: {
    street: "BU211 Polo Street, Adientem Road",
    landmark: "Opposite Ponty International School, Near Adonai Int. Church",
    city: "Takoradi",
    region: "Western Region",
    country: "Ghana",
    fullAddress: "BU211 Polo Street, Adientem Road, Opposite Ponty International School, Takoradi, Ghana",
  },
  phones: [
    { display: "050 588 8327", value: "0505888327", isPrimary: true, isWhatsapp: true },
    { display: "059 143 4840", value: "0591434840", isPrimary: false, isWhatsapp: false },
    { display: "020 760 0777", value: "0207600777", isPrimary: false, isWhatsapp: false },
  ],
  whatsappNumber: "233505888327",
  email: "nhyirakesiwellnesshospital@gmail.com",
  social: {
    instagram: "https://instagram.com/nhyirakesiwellnesshospital",
    facebook: "https://facebook.com/NhyirakesiWellnessHospital",
  },
  logoPath: "/images/logo-signboard.jpeg",
  servicesFlyerPath: "/images/services-flyer.jpeg",
  contactFlyerPath: "/images/contact-info-flyer.jpeg",
  doctorPhotoPath: "/images/doctor-consultation.jpeg",
  receptionPhotoPath: "/images/reception-lounge.jpeg",
  hallwayPhotoPath: "/images/hospital-hallway.jpeg",
  treatmentsCollagePath: "/images/wellness-treatments-collage.jpeg",
};

export const servicesList = [
  {
    id: "natural-scientific-health",
    slug: "natural-scientific-health",
    title: "Natural & Scientific Medicine",
    iconName: "Stethoscope",
    imagePath: "/images/cupping-therapy.jpeg",
    shortDesc: "Evidence-backed holistic medical solutions combining botanical therapies with modern diagnostic science.",
    fullDesc: "Our flagship practice integrates validated natural treatments with modern medical diagnostics. We address chronic conditions, metabolic disorders, and immune system health by treating the root cause rather than suppressing symptoms.",
    features: [
      "Comprehensive Diagnostic Assessments",
      "Evidence-Based Phytotherapy & Botanical Medicine",
      "Metabolic & Immune Optimization",
      "Chronic Disease Management",
      "Personalized Wellness Plans"
    ],
    highlight: "Root-cause healing backed by medical science."
  },
  {
    id: "spine-joint-rehab",
    slug: "spine-joint-rehab",
    title: "Spine, Joint & Pain Management",
    iconName: "Activity",
    imagePath: "/images/spine-joint-therapy.jpeg",
    shortDesc: "Specialized physical rehabilitation, posture correction, and non-invasive joint pain restoration.",
    fullDesc: "Pain limits your freedom. Our spine and joint rehabilitation program utilizes specialized non-invasive alignment therapies, targeted nerve relief techniques, and physical restoration protocols for arthritis, back pain, and joint wear.",
    features: [
      "Spinal Alignment & Posture Correction",
      "Arthritis & Joint Pain Relief",
      "Sciatica & Nerve Compression Care",
      "Non-Surgical Musculoskeletal Therapy",
      "Movement & Flexibility Restoration"
    ],
    highlight: "Non-invasive pain relief & mobility restoration."
  },
  {
    id: "wellness-longevity",
    slug: "wellness-longevity",
    title: "Wellness, Beauty & Anti-Aging",
    iconName: "Sparkles",
    imagePath: "/images/eye-massage-therapy.jpeg",
    shortDesc: "Rejuvenation protocols designed to boost cellular vital force, skin health, and long-term longevity.",
    fullDesc: "True beauty and longevity begin at the cellular level. Our wellness therapies focus on detoxification, cellular rejuvenation, hormonal balance, and skin health using natural scientific methodologies.",
    features: [
      "Cellular Detoxification & Cleanse",
      "Natural Anti-Aging Therapies",
      "Skin Rejuvenation & Glow Treatments",
      "Stress Reduction & Mental Vitality",
      "Nutritional & Lifestyle Counseling"
    ],
    highlight: "Revitalize your body inside and out."
  },
  {
    id: "24-7-consultation-emergency",
    slug: "24-7-consultation-emergency",
    title: "24/7 Clinical Consultation & Care",
    iconName: "Clock",
    imagePath: "/images/hospital-hallway.jpeg",
    shortDesc: "Round-the-clock medical consultations, outpatient care, and wellness evaluations for families.",
    fullDesc: "Health concerns can arise at any hour. Nhyirakesi Wellness Hospital operates 24/7 to provide prompt consultations, diagnostic guidance, and immediate attention for acute health needs.",
    features: [
      "24/7 Doctor Consultations",
      "Outpatient Clinical Care",
      "Preventive Health Screenings",
      "Family Medicine Services",
      "Urgent Care & Triage"
    ],
    highlight: "Always open, 24 hours a day, 7 days a week."
  }
];

export const facilityGallery = [
  {
    id: "doctor-consultation",
    title: "Clinical Consultation & Physician Care",
    category: "Clinical Care",
    imagePath: "/images/doctor-consultation.jpeg",
    description: "Our lead physician providing expert holistic medical consultations and diagnostics.",
  },
  {
    id: "reception-lounge",
    title: "Hospital Reception & Patient Lounge",
    category: "Facility",
    imagePath: "/images/reception-lounge.jpeg",
    description: "Warm, comfortable, and patient-centered waiting area at our Takoradi facility.",
  },
  {
    id: "cupping-therapy",
    title: "Hijama & Wet/Dry Cupping Therapy",
    category: "Therapies",
    imagePath: "/images/cupping-therapy.jpeg",
    description: "Therapeutic cupping for blood circulation, detoxification, and muscle relief.",
  },
  {
    id: "spine-joint-therapy",
    title: "Deep Tissue & Spine Alignment Rehab",
    category: "Therapies",
    imagePath: "/images/spine-joint-therapy.jpeg",
    description: "Specialized non-invasive therapy for back pain, sciatica, disc care, and joint stiffness.",
  },
  {
    id: "eye-massage-therapy",
    title: "Optical Vision & Eye Massage Therapy",
    category: "Therapies",
    imagePath: "/images/eye-massage-therapy.jpeg",
    description: "Advanced optical relaxation and eye strain relief device treatment.",
  },
  {
    id: "hospital-hallway",
    title: "Clinical Suites & Patient Corridor",
    category: "Facility",
    imagePath: "/images/hospital-hallway.jpeg",
    description: "Pristine clinical hallway connecting consultation offices and treatment rooms.",
  },
  {
    id: "wellness-treatments-collage",
    title: "Holistic Wellness & Physical Restoration",
    category: "Therapies",
    imagePath: "/images/wellness-treatments-collage.jpeg",
    description: "Comprehensive treatments including ionic foot detox, exercise bike rehab, and therapeutic massages.",
  },
];

export const coreValues = [
  {
    title: "Scientific Integrity",
    description: "Every natural remedy and clinical treatment we offer is anchored in scientific evidence and patient safety.",
    iconName: "ShieldCheck"
  },
  {
    title: "Holistic Care",
    description: "We treat the whole person — body, mind, and cellular longevity — not just isolated disease symptoms.",
    iconName: "HeartPulse"
  },
  {
    title: "24/7 Accessibility",
    description: "Our dedicated team of health professionals is available round-the-clock for Takoradi and surrounding regions.",
    iconName: "Clock"
  },
  {
    title: "Patient Empowerment",
    description: "We partner with patients through education, dietary guidance, and personalized care pathways.",
    iconName: "Users"
  }
];

export const faqList = [
  {
    question: "What makes Nhyirakesi Wellness Hospital different?",
    answer: "Nhyirakesi Wellness Hospital bridges the gap between natural holistic medicine and modern medical diagnostics. We focus on natural, scientific health solutions that restore optimal body function without unnecessary reliance on synthetic drugs."
  },
  {
    question: "Where is the hospital located in Takoradi?",
    answer: "We are located at BU211 Polo Street, Adientem Road, directly opposite Ponty International School and near Adonai Int. Church in Takoradi, Ghana."
  },
  {
    question: "Are your services available 24/7?",
    answer: "Yes! Nhyirakesi Wellness Hospital is open 24 hours a day, 7 days a week for medical consultations, clinical assistance, and emergency wellness care."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book directly through our online appointment form on this website, call us directly at 050 588 8327 / 059 143 4840 / 020 760 0777, or send us a message on WhatsApp for instant confirmation."
  },
  {
    question: "Do you offer spine and joint treatment?",
    answer: "Yes, we specialize in non-surgical spine alignment, arthritis management, sciatica relief, and comprehensive joint pain restoration."
  }
];
