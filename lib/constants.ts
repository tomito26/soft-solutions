import {
  BadgeCheck,
  BriefcaseBusiness,
  Compass,
  Database,
  Gem,
  Handshake,
  LayoutGrid,
  LifeBuoy,
  Network,
  PencilRuler,
  Rocket,
  Shield,
  SquarePen,
  Users,
  Wrench,
} from "lucide-react";

export const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    subLink: [
      {
        title: "Software Development",
        link: "/software-development",
      },
      {
        title: "Networking",
        link: "/networking",
      },
      {
        title: "Cyber Security",
        link: "/cyber-security",
      },
      {
        title: "Cloud Services",
        link: "/cloud-services",
      },
    ],
  },
];

// Reusable eyebrow + heading copy for section headers
export const sectionHeaders = {
  capabilities: {
    eyebrow: "Our Capabilities",
    title: "End-to-end IT expertise, under one roof",
    subtitle:
      "From architecture to security, we cover the full technology stack so you can focus on your business.",
  },
  offer: {
    eyebrow: "What we offer",
    title: "We provide truly prominent digital solutions.",
  },
  why: {
    eyebrow: "Why choose us",
    title: "Innovative, Secure, and Scalable IT Services Tailored for You",
    subtitle:
      "At Soft Solutions Technologies, we combine innovation, expertise, and a customer-centric approach to deliver exceptional IT solutions.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Delivering innovative IT solutions that exceed expectations",
  },
  partners: {
    eyebrow: "Our Partners",
    title: "Creating Value Through Meaningful Partnerships",
  },
  // About page
  philosophies: {
    eyebrow: "Our Philosophy",
    title: "Commitment to Innovation, Quality, and Collaboration",
  },
  values: {
    eyebrow: "Our Values",
    title: "The principles that guide every project",
    subtitle:
      "These values define who we are, shape our decisions, and anchor the long-term partnerships we build with our clients.",
  },
  approach: {
    eyebrow: "How We Work",
    title: "A clear, collaborative path from idea to impact",
    subtitle:
      "Every engagement follows a proven process designed to reduce risk and keep you in control.",
  },
} as const;

export const aboutHero = {
  eyebrow: "About Us",
  title: "Empowering Businesses Through Innovative Solutions",
  subtitle:
    "A dynamic team of IT professionals delivering technology that helps businesses thrive in a fast-paced digital world.",
} as const;

// Headline metrics. TODO(client): confirm real figures before launch.
export const metrics = [
  { id: 1, icon: BadgeCheck, value: 10, suffix: "+", label: "Years Experience" },
  { id: 2, icon: Users, value: 150, suffix: "+", label: "Happy Clients" },
  {
    id: 3,
    icon: BriefcaseBusiness,
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
  },
];

export const services = [
  {
    id: 1,
    title: "System Design & Architecture",
    description:
      "Crafting efficient, scalable systems that meet the unique demands of your business.",
    icon: SquarePen,
  },
  {
    id: 2,
    title: "Web & App Development",
    description:
      "Building modern, user-friendly web and mobile applications that deliver seamless experiences.",
    icon: LayoutGrid,
  },
  // {
  //   id: 3,
  //   title: "Cloud Storage & Infrastructure",
  //   description:
  //     "Secure, reliable cloud solutions for data storage, management, and scalability.",
  //   icon: Server,
  // },
  {
    id: 4,
    title: "IT Support & Consulting",
    description:
      "Providing ongoing support and expert guidance to help you navigate the tech landscape.",
    icon: Users,
  },
  {
    id: 5,
    title: "Cyber Security",
    description:
      "We offer advanced cybersecurity solutions that safeguard your business from data breaches, ransomware, & malicious attacks.",
    icon: Shield,
  },
  {
    id: 6,
    title: "Data Management & Analytics",
    description:
      "We provide comprehensive data management services to help businesses organize, store, and analyze their data effectively.",
    icon: Database,
  },
  // {
  //   id: 7,
  //   title: "Hardware Services",
  //   description:
  //     "Comprehensive hardware services including procurement, repair, and installation of computers and other electronic hardware.",
  //   icon: HardDrive,
  // },
  {
    id: 8,
    title: "Networking Solutions",
    description:
      "Deployment of network infrastructures for enterprises, including hybrid cloud and edge computing solutions.",
    icon: Network,
  },
];

export const our_services = [
  {
    id: 1,
    title: "Software Development",
    description:
      "We build custom software solutions designed to meet your business needs.",
    image: "/assets/app-development.png",
    link: "/software-development",
  },
  {
    id: 2,
    title: "Cloud Services",
    description:
      "We deliver cloud-based solutions for data storage, application hosting, and computing resources. ",
    image: "/assets/cloud-computing.png",
    link: "/cloud-services",
  },
  {
    id: 3,
    title: "Cyber Security",
    description:
      "We offer threat detection, vulnerability assessments, and robust security systems",
    image: "/assets/cyber-security (2).png",
    link: "/cyber-security",
  },
  {
    id: 4,
    title: "Networking",
    description:
      "We design, install, and maintain secure and efficient networks tailored to your organization's",
    image: "/assets/local-area.png",
    link: "/networking",
  },
];

export const why_choose_us = [
  {
    id: 2,
    title: "Tailored Solutions",
    description: "We design services that meet your unique business needs.",
  },
  {
    id: 3,
    title: "Expert Team",
    description:
      "Our experienced professionals ensure top-notch quality and reliability.",
  },
  {
    id: 4,
    title: "Cutting-Edge Technology:",
    description: "We leverage the latest tools and trends to keep you ahead.",
  },

  {
    id: 6,
    title: "Commitment to Excellence",
    description:
      "Your satisfaction is our priority, and we're dedicated to delivering results that exceed expectations.",
  },
];

export const testimonials = [
  {
    id: 1,
    testimony:
      "Working with Soft Solutions Technologies has been an incredible experience. Their attention to detail and commitment to delivering the best possible IT solutions have exceeded our expectations.",
    client: {
      name: "Emily Thompson",
      title: "Operations Manager",
      company: "BrightFuture Inc.",
      profile_photo_url:
        "/assets/businesswoman-executive-professional-success-concept.jpg",
    },
  },
  {
    id: 2,
    testimony:
      "Soft Solutions Technologies has been an exceptional partner in our IT journey. Their expertise in cloud storage and software development transformed the way we manage our data and applications",
    client: {
      name: "Alex Carter",
      title: "CEO",
      company: "Apex Motor Industries",
      profile_photo_url:
        "/assets/medium-shot-man-working-as-real-estate-agent.jpg",
    },
  },
];
// Real partner logos only. TODO(client): add NCBA + other logos when supplied
// (the previous `Rectangle 35/36.png` entries were unfinished placeholders).
export const our_partners = [
  {
    id: 1,
    logo: "/assets/cisco.png",
    partner: "Cisco",
  },
  {
    id: 2,
    logo: "/assets/safaricom.png",
    partner: "Safaricom",
  },
];

export const philosophies = [
  {
    icon: Rocket,
    title: "Our Mission",
    description:
      "To deliver innovative and reliable IT solutions that drive business transformation, empower organizations to achieve their full potential, and foster growth through cutting-edge technology, collaboration, and exceptional service.",
  },
  {
    icon: Gem,
    title: "Our vision",
    description:
      "To be a global leader in IT solutions, recognized for our commitment to innovation, quality, and customer success, while continuously evolving to meet the changing needs of the digital world.",
  },
  {
    icon: Handshake,
    title: "Our Commitment",
    description:
      "We are committed to delivering excellence in every project, maintaining transparency and trust with our clients, and creating long-term partnerships that ensure sustainable success.",
  },
];
export const values = [
  {
    title: "Innovation",
    description:
      "We drive creativity and leverage the latest technologies to deliver cutting-edge solutions that meet evolving client needs.",
  },
  {
    title: "Integrity",
    description:
      "We uphold honesty and transparency, building trust through consistent and ethical practices in everything we do.",
  },
  {
    title: "Customer-Centricity",
    description:
      "We prioritize our clients, tailoring solutions to their needs and ensuring their success is at the heart of everything we do.",
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in every project, delivering exceptional quality and unmatched expertise.",
  },
];

// How-we-work process steps shown on the About page.
export const process = [
  {
    step: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We start by understanding your goals, constraints, and existing systems to define the right problem to solve.",
  },
  {
    step: "02",
    icon: PencilRuler,
    title: "Design",
    description:
      "We architect a tailored solution and map a clear roadmap, so you know exactly what we're building and why.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Build",
    description:
      "Our engineers deliver in focused iterations, keeping you involved and the work transparent at every stage.",
  },
  {
    step: "04",
    icon: LifeBuoy,
    title: "Support",
    description:
      "We don't disappear at launch — we monitor, maintain, and evolve your solution as your business grows.",
  },
];
