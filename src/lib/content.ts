export const company = {
  name: "EKA Consulting and Trading PLC",
  email: "contact@ekaconsultingtrading.com",
  phones: [
    { label: "0966348408", href: "tel:+251966348408" },
    { label: "0970277375", href: "tel:+251970277375" },
  ],
  address: "Woreda 04, Kolfe Keranio Sub City, Addis Ababa, Ethiopia",
  amharic: "ኢካ የማማከርና እና ትሬዲንግ ኃ/የተ/የግ/ማ",
  motto: "Tomorrow Begins with Today's Best.",
  mottoAmharic: "የነገ ጅማሬ የዛሬ ምርጥ ሥራ ነው!",
  belief:
    "Our motto reflects EKA's fundamental belief that the future is shaped by the quality of decisions, investments, and actions organizations make today.",
  overview:
    "EKA Consulting and Trading PLC is a professional consulting, technical advisory, training, safety solutions, supply, and trading company providing practical solutions to organizations across different sectors.",
  vision:
    "To be a trusted leader in consulting, technical services, training, and trading, driving safety, excellence, and sustainability.",
  mission:
    "To deliver reliable consulting, technical services, training, and quality products that enhance safety, performance, compliance, and sustainability.",
} as const;

export const disciplines = [
  "Consulting",
  "Technical Services",
  "Training",
  "HSEQ",
  "Risk",
  "Compliance",
  "Sustainability",
  "Trading & Supply",
] as const;

export const leaders = [
  { name: "Engidawork Kibneh Abdi", role: "General Manager" },
  { name: "Lidet Darge", role: "Office Manager" },
] as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/supply", label: "Supply" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

export const pillars = [
  {
    index: "01",
    title: "Consulting, Technical Services & Training",
    body: "Professional advisory, assessment, inspection, audit, management-system, risk-management, HSEQ, environmental, occupational health and safety, fire-safety, and competency-development services.",
    href: "/services",
    cta: "Explore services",
  },
  {
    index: "02",
    title: "Trading, Supply & Technical Solutions",
    body: "Safety, fire protection, PPE, technical, industrial, and related products and equipment, supported where required by inspection, installation, commissioning, servicing, training, and technical advisory.",
    href: "/supply",
    cta: "See supply",
  },
] as const;

export type ServiceGroup = {
  id: string;
  index: string;
  title: string;
  summary: string;
  href: string;
  items: readonly string[];
};

export const serviceGroups: readonly ServiceGroup[] = [
  {
    id: "hseq",
    index: "01",
    title: "HSEQ Management",
    summary: "Systems, audits, policy, leadership, and performance.",
    href: "/services#hseq",
    items: [
      "HSEQ Gap Analysis",
      "HSEQ Performance Audits",
      "HSEQ Management System Development",
      "HSEQ Policy and Manual Development",
      "Digital HSE Transformation",
      "Safety Leadership Coaching",
      "Safety Leadership Mentoring",
      "Machine Safety Assessment",
      "Environmental and Social Audits",
      "HSEQ KPI and Dashboard Development",
      "Compliance and Conformance Assessment",
    ],
  },
  {
    id: "risk",
    index: "02",
    title: "Risk Assessment",
    summary: "Identify, assess, control, and manage operational risk.",
    href: "/services#risk",
    items: [
      "Fire Risk Assessment",
      "Job Safety Analysis (JSA)",
      "Arc Flash Risk Assessment",
      "Workplace Risk Assessment",
      "Emergency Risk Assessment",
      "Environmental Risk Assessment",
      "Machine Safety Risk Assessment",
      "Construction Safety Risk Assessment",
      "Occupational Health Risk Assessment",
      "Hazard Identification and Risk Assessment (HIRA)",
      "Other specialized risk assessments according to client requirements",
    ],
  },
  {
    id: "fire",
    index: "03",
    title: "Fire & Emergency",
    summary: "Prevention, preparedness, equipment, and response.",
    href: "/services#fire",
    items: [
      "Fire Safety Training",
      "Fire Evacuation Plans",
      "Emergency Response Training",
      "Fire Safety Audits and Inspections",
      "Emergency Drill Design and Evaluation",
      "Fire Alarm and Detection System Assessment",
      "Emergency Response and Preparedness Plans",
      "Fixed Fire-Fighting System Inspection and Installation",
      "Portable Fire-Fighting Equipment Inspection and Servicing",
      "Emergency Preparedness Assessment",
    ],
  },
  {
    id: "health",
    index: "04",
    title: "Occupational Health and Safety",
    summary: "Exposure, hygiene, and workplace health and safety advice.",
    href: "/services#health",
    items: [
      "Noise Monitoring",
      "Air Quality Monitoring",
      "Ergonomic Assessment",
      "Heat Stress Assessment",
      "Industrial Hygiene Surveys",
      "Chemical Exposure Assessment",
      "Workplace Exposure Assessment",
      "Occupational Health Risk Assessment",
      "Respiratory Protection Program Development",
      "Occupational Health and Safety Advisory Services",
    ],
  },
  {
    id: "environment",
    index: "05",
    title: "Environment & Sustainability",
    summary: "Compliance, impact, waste, and environmental performance.",
    href: "/services#environment",
    items: [
      "Environmental Compliance Audits",
      "Environmental Risk Assessments",
      "Environmental Impact Assessment (EIA)",
      "Waste Management Plans",
      "Spill Prevention and Response Plans",
      "Environmental Management Systems",
      "Environmental and Social Audits",
      "Sustainability Advisory Services",
      "Environmental Performance Improvement",
      "Resource Efficiency and Pollution Prevention Programs",
    ],
  },
  {
    id: "technical",
    index: "06",
    title: "Technical Advisory",
    summary: "Inspections, machinery safety, and management systems.",
    href: "/services#technical",
    items: [
      "Technical advisory services",
      "Machinery and equipment safety inspection",
      "ISO management systems",
      "Integrated management systems",
    ],
  },
];

export const trainingGroups = [
  {
    title: "HSEQ and the workplace",
    items: [
      "HSEQ Training",
      "Workplace Safety Training",
      "Safety Leadership Training",
      "Construction Safety Training",
      "Integrated Management Systems",
      "Incident Investigation and Root Cause Analysis",
      "ISO Management System Standard (MSS) Trainings",
    ],
  },
  {
    title: "Fire and emergency",
    items: [
      "Emergency Response and Preparedness",
      "Emergency Drill Training",
      "Fire and Emergency Training",
      "Fire-Fighting Training",
      "First Aid and CPR",
    ],
  },
  {
    title: "Technical safety",
    items: [
      "Lifting Operations and Rigging Safety",
      "Confined Space Entry",
      "Work at Height",
      "Electrical Safety",
      "Arc Flash Safety",
      "Machine Safety",
      "Crane Safety",
    ],
  },
  {
    title: "Soft skills",
    items: ["Presentation Skills", "Soft Skills Training"],
  },
] as const;

export const supplyPoints = [
  "Safety products and equipment",
  "Fire protection equipment",
  "Personal protective equipment and safety clothing",
  "Technical, industrial, and related products",
  "Fire-fighting equipment supply, installation, inspection, servicing, and refilling",
] as const;

export const supplySupport = [
  "Inspection",
  "Installation",
  "Commissioning",
  "Servicing",
  "Training",
  "Technical advisory",
] as const;

export const enquiryTopics = [
  "Consulting and technical advisory",
  "HSEQ",
  "Risk assessment",
  "Fire and emergency",
  "Occupational Health and Safety",
  "Environment and sustainability",
  "Training",
  "Trading and supply",
  "Another request",
] as const;
