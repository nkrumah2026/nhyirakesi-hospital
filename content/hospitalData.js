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
    shortTitle: "Natural Medicine",
    categoryName: "General Practice",
    iconName: "Stethoscope",
    imagePath: "/images/cupping-therapy.jpeg",
    shortDesc: "Personalized healthcare combining clinical medical assessments with natural botanical and supportive remedies.",
    fullDesc: "Our practice integrates proven botanical remedies with standard medical assessments to treat health concerns safely and effectively. We focus on understanding your overall health and creating clear, practical treatment plans.",
    howWeCanHelp: [
      "Chronic illness management and general health monitoring",
      "Nutritional guidance and dietary support for ongoing wellness",
      "Safe integration of natural botanical remedies alongside regular medications",
      "Preventive evaluations to support immune health and vitality"
    ],
    availableTreatments: [
      "Clinical Patient Assessments & Consultation",
      "Botanical & Herbal Remedy Guidance",
      "Dietary & Lifestyle Counseling",
      "Preventive Health Guidance"
    ],
    whatToExpect: "During your visit, a practitioner will review your symptoms, take a detailed medical history, perform standard clinical checks, and outline a realistic care plan combining clinical advice and supportive natural therapies.",
    highlight: "Personalized healthcare combining medical assessment with natural therapies."
  },
  {
    id: "spine-joint-rehab",
    slug: "spine-joint-rehab",
    title: "Spine, Joint & Pain Care",
    shortTitle: "Spine & Joint Care",
    categoryName: "Pain Rehabilitation",
    iconName: "Activity",
    imagePath: "/images/spine-joint-therapy.jpeg",
    shortDesc: "Non-surgical physical therapy and spine alignment to relieve back, joint, sciatica, and chronic mobility pain.",
    fullDesc: "Specialized non-surgical physical rehabilitation designed to ease back pain, joint stiffness, sciatica, and nerve discomfort. We use targeted alignment techniques and physical exercises to help restore comfortable movement.",
    howWeCanHelp: [
      "Lower back pain, upper back stiffness, and posture-related strain",
      "Sciatica, pinched nerves, and radiating leg or neck pain",
      "Joint pain, knee discomfort, and age-related mobility issues",
      "Recovery support following minor musculoskeletal injuries"
    ],
    availableTreatments: [
      "Spinal Alignment & Posture Adjustment",
      "Sciatica & Nerve Pressure Relief Therapy",
      "Joint Mobility & Stiffness Rehabilitation",
      "Therapeutic Stretching & Physical Care"
    ],
    whatToExpect: "Your therapist will examine your spine, posture, and joint movement, identify areas of tension or compression, and apply gentle physical therapies and stretches designed to reduce pain and restore flexibility.",
    highlight: "Non-surgical physical therapies for spinal alignment and mobility."
  },
  {
    id: "wellness-longevity",
    slug: "wellness-longevity",
    title: "Beauty & Wellness Therapies",
    shortTitle: "Beauty & Wellness",
    categoryName: "Therapeutic Care",
    iconName: "Sparkles",
    imagePath: "/images/eye-massage-therapy.jpeg",
    shortDesc: "Supportive wellness treatments designed for stress relief, circulation support, optical relaxation, and healthy skin.",
    fullDesc: "Restorative therapies created to reduce tension, support healthy blood circulation, relieve eye strain, and promote overall physical well-being in a calm, professional environment.",
    howWeCanHelp: [
      "Persistent stress, muscular tension, and physical fatigue",
      "Poor circulation, heavy legs, and bodily stiffness",
      "Digital eye strain, tension headaches, and facial fatigue",
      "General skin wellness and relaxing bodily recovery"
    ],
    availableTreatments: [
      "Hijama & Cupping Therapy",
      "Optical Vision Strain Relief & Eye Massage",
      "Circulation & Detox Support Care",
      "Stress Reduction & Physical Relaxation"
    ],
    whatToExpect: "You will receive therapy in a quiet, sanitized clinical room. Our practitioners explain each step before starting to ensure your complete comfort throughout the session.",
    highlight: "Wellness and beauty care designed to support healthy skin and well-being."
  },
  {
    id: "24-7-consultation-emergency",
    slug: "24-7-consultation-emergency",
    title: "24/7 Consultation & Support",
    shortTitle: "Consultation & Support",
    categoryName: "Clinical Support",
    iconName: "Clock",
    imagePath: "/images/hospital-hallway.jpeg",
    shortDesc: "Round-the-clock medical consultations, outpatient evaluations, and clinical support whenever you need care.",
    fullDesc: "Nhyirakesi Wellness Hospital operates 24 hours a day, 7 days a week in Takoradi to provide accessible medical consultations, physical evaluations, and health advice for individuals and families.",
    howWeCanHelp: [
      "Immediate medical consultations for sudden symptoms or discomfort",
      "Outpatient health assessments and routine wellness checks",
      "Walk-in visits for individuals who need quick clinical guidance",
      "Follow-up care and long-term health consultations"
    ],
    availableTreatments: [
      "24/7 Practitioner Consultations",
      "Outpatient Clinical Screenings",
      "Walk-in Medical Advice & Guidance",
      "Family Health Consultations"
    ],
    whatToExpect: "You can walk in at any time of day or night. Our reception team will register your details immediately and pair you with an available physician for consultation.",
    highlight: "Open 24 hours a day, 7 days a week on Adientem Road, Takoradi."
  }
];

export const firstVisitSteps = [
  {
    step: "01",
    title: "Book or Walk In",
    description: "Schedule online, call our reception line, or visit our facility on Adientem Road, Takoradi at any time."
  },
  {
    step: "02",
    title: "Consultation",
    description: "Discuss your health history, current symptoms, and specific goals with a practitioner."
  },
  {
    step: "03",
    title: "Health Assessment",
    description: "Receive standard clinical evaluations to understand the underlying causes of your concern."
  },
  {
    step: "04",
    title: "Personalized Care Plan",
    description: "Receive a clear care plan combining natural therapies, physical rehabilitation, and practical advice."
  }
];

export const careTeam = [
  {
    name: "Medical Consultation Team",
    role: "Physicians & Practitioners",
    bio: "Our medical team provides patient-focused consultations, combining standard diagnostics with supportive natural therapies.",
    imagePath: "/images/doctor-consultation.jpeg"
  },
  {
    name: "Physical Therapy Team",
    role: "Rehabilitation Specialists",
    bio: "Experienced practitioners specializing in spine alignment, joint care, cupping therapy, and non-surgical mobility support.",
    imagePath: "/images/spine-joint-therapy.jpeg"
  }
];

export const facilityGallery = [
  {
    id: "doctor-consultation",
    title: "Physician Consultation Suite",
    category: "Clinical Care",
    imagePath: "/images/doctor-consultation.jpeg",
    description: "Private room for medical consultations and patient health assessments.",
  },
  {
    id: "reception-lounge",
    title: "Hospital Reception & Lounge",
    category: "Facility",
    imagePath: "/images/reception-lounge.jpeg",
    description: "Comfortable waiting area for patients and accompanying visitors.",
  },
  {
    id: "cupping-therapy",
    title: "Cupping Therapy Room",
    category: "Therapies",
    imagePath: "/images/cupping-therapy.jpeg",
    description: "Clean, professional room for Hijama wet and dry cupping treatments.",
  },
  {
    id: "spine-joint-therapy",
    title: "Spine & Joint Rehabilitation Room",
    category: "Therapies",
    imagePath: "/images/spine-joint-therapy.jpeg",
    description: "Dedicated space for back pain care, joint alignment, and physical therapy.",
  },
  {
    id: "eye-massage-therapy",
    title: "Eye Relaxation Room",
    category: "Therapies",
    imagePath: "/images/eye-massage-therapy.jpeg",
    description: "Calm environment for optical strain relief and eye relaxation care.",
  },
  {
    id: "hospital-hallway",
    title: "Clinical Corridor",
    category: "Facility",
    imagePath: "/images/hospital-hallway.jpeg",
    description: "Well-maintained corridor connecting consultation offices and treatment rooms.",
  },
  {
    id: "wellness-treatments-collage",
    title: "Rehabilitation Area",
    category: "Therapies",
    imagePath: "/images/wellness-treatments-collage.jpeg",
    description: "Treatment space equipped for physical recovery, foot detox, and muscle care.",
  },
];

export const coreValues = [
  {
    title: "Clinical Safety",
    description: "Every treatment and natural remedy we offer is guided by medical safety and patient-first principles.",
    iconName: "ShieldCheck"
  },
  {
    title: "Patient-Centered Care",
    description: "We listen to your health concerns and design clear treatment plans tailored to your needs.",
    iconName: "HeartPulse"
  },
  {
    title: "Open 24/7",
    description: "Our clinic doors and consultation lines remain open round-the-clock for Takoradi residents.",
    iconName: "Clock"
  },
  {
    title: "Clear Guidance",
    description: "We explain your diagnosis and treatment options simply so you feel informed and confident.",
    iconName: "Users"
  }
];

export const faqList = [
  {
    question: "Do I need an appointment before visiting Nhyirakesi Hospital?",
    answer: "Appointments help minimize waiting time, but walk-in patients are always welcome. We are open 24/7."
  },
  {
    question: "What should I bring for my first consultation?",
    answer: "Please bring a valid photo ID, any previous medical records or scans if available, and a list of current medications."
  },
  {
    question: "Where is the hospital located in Takoradi?",
    answer: "We are located at BU211 Polo Street, Adientem Road, directly opposite Ponty International School and near Adonai Int. Church in Takoradi, Ghana."
  },
  {
    question: "What conditions are treated in your Spine & Joint clinic?",
    answer: "We treat lower back pain, sciatica, joint stiffness, knee discomfort, neck strain, and posture concerns using non-surgical physical alignment therapies."
  },
  {
    question: "Are your medical consultations available 24/7?",
    answer: "Yes, Nhyirakesi Wellness Hospital is open 24 hours a day, 7 days a week for consultations, physical therapy inquiries, and clinical care."
  }
];
