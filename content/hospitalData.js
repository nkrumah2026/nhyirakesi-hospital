export const hospitalInfo = {
  name: "Nhyirakesi Wellness Hospital",
  shortName: "Nhyirakesi Hospital",
  slogan: "Natural & Scientific Healthcare, Spine Rehabilitation & Wellness.",
  category: "Alternative & Holistic Health Facility",
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
    categoryName: "General Practice",
    iconName: "Stethoscope",
    imagePath: "/images/cupping-therapy.jpeg",
    shortDesc: "Comprehensive medical evaluations combining validated botanical therapies with modern diagnostic assessments.",
    fullDesc: "Our practice integrates evidence-informed botanical medicine with standard clinical diagnostics. We focus on identifying the underlying causes of health concerns, managing chronic conditions, and supporting long-term health.",
    features: [
      "Comprehensive Patient Health Assessments",
      "Evidence-Informed Phytotherapy",
      "Chronic Condition Support & Care",
      "Dietary & Nutritional Consultation",
      "Preventive Health & Immunity Guidance"
    ],
    highlight: "Combining natural therapies with diagnostic evaluations."
  },
  {
    id: "spine-joint-rehab",
    slug: "spine-joint-rehab",
    title: "Spine, Joint & Pain Rehabilitation",
    categoryName: "Pain Care",
    iconName: "Activity",
    imagePath: "/images/spine-joint-therapy.jpeg",
    shortDesc: "Non-surgical physical therapy, spinal alignment, and targeted rehabilitation for back, joint, and nerve pain.",
    fullDesc: "Specialized non-invasive rehabilitation designed to relieve back pain, sciatica, arthritis discomfort, and joint stiffness through physical restoration protocols and targeted posture correction.",
    features: [
      "Spinal Alignment & Posture Correction",
      "Sciatica & Nerve Compression Relief",
      "Arthritis & Joint Wear Management",
      "Non-Surgical Musculoskeletal Therapy",
      "Flexibility & Movement Restoration"
    ],
    highlight: "Non-surgical pain relief and physical therapy."
  },
  {
    id: "wellness-longevity",
    slug: "wellness-longevity",
    title: "Wellness & Rejuvenation Therapies",
    categoryName: "Therapies",
    iconName: "Sparkles",
    imagePath: "/images/eye-massage-therapy.jpeg",
    shortDesc: "Therapeutic care focused on circulation support, stress reduction, physical restoration, and eye relaxation.",
    fullDesc: "Restorative treatments designed to support physical recovery, ease muscle tension, improve circulation, and promote overall wellness in a comfortable clinical environment.",
    features: [
      "Circulation & Detoxification Care",
      "Hijama & Cupping Physical Therapy",
      "Optical Vision & Eye Strain Relief",
      "Stress Reduction & Relaxation",
      "Customized Wellness Guidance"
    ],
    highlight: "Restorative care for physical recovery and tension relief."
  },
  {
    id: "24-7-consultation-emergency",
    slug: "24-7-consultation-emergency",
    title: "24/7 Clinical Consultation & Urgent Care",
    categoryName: "Clinical Care",
    iconName: "Clock",
    imagePath: "/images/hospital-hallway.jpeg",
    shortDesc: "Round-the-clock medical consultations, outpatient care, and walk-in clinical evaluations for individuals and families.",
    fullDesc: "Nhyirakesi Wellness Hospital operates 24 hours a day, 7 days a week to provide prompt medical consultations, clinical assistance, and diagnostic guidance whenever you need it.",
    features: [
      "24/7 Physician Consultations",
      "Outpatient Clinical Care",
      "Preventive Health Screenings",
      "Walk-In Clinical Evaluations",
      "Family Health & Consultation Services"
    ],
    highlight: "Open 24 hours a day, 7 days a week in Takoradi."
  }
];

export const firstVisitSteps = [
  {
    step: "01",
    title: "Book or Walk In",
    description: "Schedule online, call our receptionists directly, or walk into our facility on Adientem Road, Takoradi at any time."
  },
  {
    step: "02",
    title: "Initial Consultation",
    description: "Meet with our clinical team to discuss your health history, current symptoms, and specific concerns."
  },
  {
    step: "03",
    title: "Diagnostic Assessment",
    description: "Undergo necessary evaluations to understand the underlying causes of your discomfort or condition."
  },
  {
    step: "04",
    title: "Personalized Care Plan",
    description: "Receive a clear treatment plan combining natural therapies, physical rehabilitation, and lifestyle recommendations."
  }
];

export const careTeam = [
  {
    name: "Medical Consultation Team",
    role: "Physicians & Practitioners",
    bio: "Our medical practitioners provide patient-focused consultations, combining modern diagnostics with natural therapeutic solutions.",
    imagePath: "/images/doctor-consultation.jpeg"
  },
  {
    name: "Physical Therapy Team",
    role: "Rehabilitation Specialists",
    bio: "Specialized practitioners focusing on spine alignment, joint pain relief, cupping therapy, and non-surgical mobility restoration.",
    imagePath: "/images/spine-joint-therapy.jpeg"
  }
];

export const facilityGallery = [
  {
    id: "doctor-consultation",
    title: "Physician Consultation Suite",
    category: "Clinical Care",
    imagePath: "/images/doctor-consultation.jpeg",
    description: "Private clinical room for physician consultations and patient health assessments.",
  },
  {
    id: "reception-lounge",
    title: "Hospital Reception & Lounge",
    category: "Facility",
    imagePath: "/images/reception-lounge.jpeg",
    description: "Comfortable waiting area for patients and accompanying family members.",
  },
  {
    id: "cupping-therapy",
    title: "Cupping Therapy Room",
    category: "Therapies",
    imagePath: "/images/cupping-therapy.jpeg",
    description: "Therapeutic room equipped for Hijama wet and dry cupping treatments.",
  },
  {
    id: "spine-joint-therapy",
    title: "Spine & Joint Rehabilitation Room",
    category: "Therapies",
    imagePath: "/images/spine-joint-therapy.jpeg",
    description: "Specialized therapy space for back pain relief, disc care, and spinal alignment.",
  },
  {
    id: "eye-massage-therapy",
    title: "Eye Relaxation Room",
    category: "Therapies",
    imagePath: "/images/eye-massage-therapy.jpeg",
    description: "Dedicated space for optical strain relief and therapeutic eye massage care.",
  },
  {
    id: "hospital-hallway",
    title: "Clinical Corridor",
    category: "Facility",
    imagePath: "/images/hospital-hallway.jpeg",
    description: "Pristine hallway connecting physician consultation offices and treatment rooms.",
  },
  {
    id: "wellness-treatments-collage",
    title: "Rehabilitation & Wellness Area",
    category: "Therapies",
    imagePath: "/images/wellness-treatments-collage.jpeg",
    description: "Treatment area equipped for physical recovery, foot detox, and muscle therapy.",
  },
];

export const coreValues = [
  {
    title: "Scientific Integrity",
    description: "Every natural remedy and clinical treatment we provide is guided by sound health principles and patient safety.",
    iconName: "ShieldCheck"
  },
  {
    title: "Patient-Centered Care",
    description: "We listen to your health concerns and design treatment plans tailored to your specific needs.",
    iconName: "HeartPulse"
  },
  {
    title: "24/7 Availability",
    description: "Our hospital doors and consultation lines remain open round-the-clock for Takoradi residents and visitors.",
    iconName: "Clock"
  },
  {
    title: "Clear Communication",
    description: "We help you understand your diagnosis, treatment options, and recovery progress at every step.",
    iconName: "Users"
  }
];

export const faqList = [
  {
    question: "Do I need an appointment before visiting Nhyirakesi Hospital?",
    answer: "While scheduling an appointment in advance helps minimize your waiting time, walk-in patients are always welcome. We operate 24/7."
  },
  {
    question: "What should I bring for my first consultation?",
    answer: "Please bring a valid photo ID, any previous medical reports or imaging (X-rays/scans) if available, and a list of any current medications you are taking."
  },
  {
    question: "Where is the hospital located in Takoradi?",
    answer: "We are located at BU211 Polo Street, Adientem Road, directly opposite Ponty International School and near Adonai Int. Church in Takoradi, Ghana."
  },
  {
    question: "What conditions are treated in your Spine & Joint clinic?",
    answer: "We treat back pain, sciatica, joint stiffness, knee discomfort, neck strain, arthritis pain, and posture-related issues using non-surgical alignment and physical therapy."
  },
  {
    question: "Are your consultations and care available 24/7?",
    answer: "Yes, Nhyirakesi Wellness Hospital is open 24 hours a day, 7 days a week for medical consultations, physical therapy inquiries, and clinical care."
  }
];

