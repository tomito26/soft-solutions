import {
  Database,
  Gem,
  Handshake,
  HardDrive,
  LayoutGrid,
  Rocket,
  Shield,
  SquarePen,
  Users,
} from "lucide-react";

interface NavLinkType {
  title: string;
  link?: string;
  subLink?:{
    title: string;
    link:  string
  }[]
}
export const links: NavLinkType[] = [
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
        title: "Software Services",
        link: "/software-services",
      },
      {
        title: "Hardware Services",
        link: "/hardware-services",
      },
    ],
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
  {
    id: 7,
    title: "Hardware Services",
    description:
      "Comprehensive hardware services including procurement, repair, and installation of computers and other electronic hardware.",
    icon: HardDrive,
  },
  // {
  //   id: 8,
  //   title: "Networking Solutions",
  //   description:
  //     "Deployment of network infrastructures for enterprises, including hybrid cloud and edge computing solutions.",
  //   icon: Network,
  // },
];

export const why_choose_us = [
  {
    id: 1,
    title: "Comprehensive IT Services",
    description:
      "We provide a wide range of services, from system design, web, and app development to cloud storage, IT consulting, and cybersecurity.",
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description:
      "We specialize in custom software and system development, ensuring that your IT solutions are designed specifically to meet your unique business needs and challenges.",
  },
  {
    id: 3,
    title: "Expertise and Experience:",
    description:
      "With a skilled team experienced in developing innovative and scalable solutions, we ensure that your business stays competitive in today's digital landscape.",
  },
  {
    id: 4,
    title: "Focus on Security",
    description:
      "In today's environment, cybersecurity is crucial, and we emphasize this by offering robust data protection, cyber defense, and secure networking solutions.",
  },
  {
    id: 5,
    title: "Cloud and Networking",
    description:
      "We provide expertise in cloud storage and networking solutions, allowing businesses to work more flexibly, scale easily, and manage their operations more efficiently.",
  },
  {
    id: 6,
    title: "Proven Track Record",
    description:
      "Our reputation for delivering reliable and innovative IT solutions gives confidence that you will receive top-tier service and support.",
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
    id: 1,
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
export const our_partners = [
  {
    id: 1,
    logo: "/assets/cisco.png",
    partner: "Cisco",
  },
  {
    id: 2,
    logo: "/assets/Rectangle 35.png",
    partner: "NCBA Bank",
  },
  {
    id: 3,
    logo: "/assets/Rectangle 36.png",
    partner: "NCBA Bank",
  },
  {
    id: 4,
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
      "We embrace the ever-changing world of technology, constantly seeking creative solutions that push the boundaries of what's possible for our clients.",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all our dealings, building long-lasting relationships based on trust.",
  },
  {
    title: "Customer-Centricity",
    description:
      "Our clients are at the core of everything we do. We prioritize understanding their needs and delivering solutions that exceed expectations.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, from the quality of our products to the professionalism of our team. We believe in delivering nothing but the best.",
  },
  {
    title: "Collaboration",
    description:
      "We value teamwork and the power of collaboration, both within our company and with our clients, to deliver solutions that are stronger together.",
  },
  {
    title: "Accountability",
    description:
      "We take full responsibility for the outcomes of our work, ensuring that every project is completed to the highest standard and delivers real results.",
  },
  {
    title: "Continuous Learning",
    description:
      "In a rapidly evolving industry, we remain committed to learning and growing, ensuring our solutions are always ahead of the curve.",
  },
];
