import {
  ArrowRightLeft,
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Compass,
  Database,
  Gauge,
  Gem,
  Handshake,
  LayoutGrid,
  LifeBuoy,
  Lock,
  Network,
  PencilRuler,
  Rocket,
  ScanSearch,
  Server,
  Shield,
  ShieldCheck,
  Siren,
  Smartphone,
  Sparkles,
  SquarePen,
  Users,
  Webhook,
  Wifi,
  Wrench,
} from "lucide-react";
import { FaqItem, NavLink, ServicePageContent } from "@/types/types";

export const links: NavLink[] = [
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
        icon: Code2,
        description: "Custom web, mobile & app builds",
      },
      {
        title: "Networking",
        link: "/networking",
        icon: Network,
        description: "Secure, high-speed connectivity",
      },
      {
        title: "Cyber Security",
        link: "/cyber-security",
        icon: Shield,
        description: "Threat detection & defense",
      },
      {
        title: "Cloud Services",
        link: "/cloud-services",
        icon: Cloud,
        description: "Scalable, managed cloud",
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

// 2x2 photo grid for the About "Who we are" section.
export const whoWeArePhotos = [
  {
    src: "/assets/people-office-work-day (1).jpg",
    alt: "The Soft Solutions team collaborating at their desks",
  },
  {
    src: "/assets/medium-shot-colleagues-working-office.jpg",
    alt: "Colleagues working together in the office",
  },
  {
    src: "/assets/three-happy-businesspeople-using-gadgets-office.jpg",
    alt: "Team members reviewing work on their devices",
  },
  {
    src: "/assets/businesswoman-engaging-planning-session-with-realtor-contractor.jpg",
    alt: "Consultants in a client planning session",
  },
];

// ---- Contact page content ----
export const contactHero = {
  image: "/assets/professionals-explaining-corporate-software-details.jpg",
  imageAlt: "Soft Solutions consultants talking with a client",
  eyebrow: "Contact Us",
  title: "Get in touch with us",
  intro:
    "Questions, ideas, or a project in mind? Our team is ready to help — reach out and we'll get back to you within one business day.",
  breadcrumb: "Contact",
} as const;

// TODO(client): confirm the correct phone number (the old About block used
// +254 796 108 651) and the exact street address.
export const contactDetails = {
  phone: { label: "Main Support Line", value: "+254 712 070 289", href: "tel:+254712070289" },
  email: { label: "General Enquiries", value: "info@softsolutions.com", href: "mailto:info@softsolutions.com" },
  office: { label: "Office", value: "Westlands, Nairobi, Kenya" },
  hours: { label: "Working Hours", value: "Mon – Fri, 8:00 AM – 5:00 PM EAT" },
  // Keyless Google Maps embed query (no API key required).
  mapQuery: "Westlands, Nairobi, Kenya",
  replyNote: "We typically reply within 24 hours.",
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

// ---------------------------------------------------------------------------
// Service page content — one ServicePageContent per /(our-services) route.
// Feature rows drive the alternating image/text sections; `included` drives the
// scannable capability grid; `cta` feeds the closing CtaBand.
// ---------------------------------------------------------------------------

export const softwareDevelopmentPage: ServicePageContent = {
  hero: {
    image:
      "/assets/programer-sitting-desk-with-multiple-screens-running-code-talking-with-colleague-about-artificial-intelligence-algorithm-software-developers-doing-innovative-artificial-intelligence-project (1).jpg",
    imageAlt:
      "Software developers collaborating on code across multiple screens",
    eyebrow: "Software Development",
    title: "Software Development",
    breadcrumb: "Software Development",
    intro:
      "Custom software, web, and mobile solutions engineered around your business — from first idea to ongoing support.",
  },
  features: [
    {
      title: "Custom Software Development",
      description:
        "We understand that every business is unique, which is why we offer custom software development tailored specifically to your goals. Whether you're looking to streamline internal processes, build a new product, or solve a specific challenge, we deliver software that fits your exact requirements — from small tools to large-scale enterprise applications.",
      image: "/assets/system-design.jpg",
      imageAlt: "Developer sketching a custom system design on paper",
    },
    {
      title: "Web Development",
      description:
        "In today's digital age, a strong online presence is critical. We build websites and web applications that are fast, responsive, and user-friendly. Whether it's a dynamic, content-driven site or a complex web app, our team uses cutting-edge technologies like React, Next.js, and Node.js to deliver an exceptional experience across all devices.",
      image: "/assets/website-development.jpg",
      imageAlt: "Web developer building a responsive website on a laptop",
    },
    {
      title: "Mobile App Development",
      description:
        "Want to reach your customers on the go? Our mobile app development services create seamless, intuitive, and engaging apps for both iOS and Android. Whether you need a mobile version of your web application, an e-commerce app, or a service-based app, we ensure it delivers an excellent user experience and maximizes engagement.",
      image: "/assets/smartphone-with-user-interface-concept.jpg",
      imageAlt: "Smartphone displaying a mobile app user interface",
    },
    {
      title: "Software Maintenance & Support",
      description:
        "After your software is up and running, we provide ongoing maintenance and support to keep everything working smoothly. This includes updates, bug fixes, performance improvements, and adding new features as your business evolves — so your systems stay current and perform at their best.",
      image: "/assets/6664783.jpg",
      imageAlt: "Illustration of engineers maintaining and supporting software",
    },
    {
      title: "API Development & Integration",
      description:
        "To maximize the power of your software, robust API development and integration is crucial. We build secure, scalable APIs that let your systems communicate with other services — from third-party integrations like payment gateways and social media to internal system connections — keeping your processes efficient, automated, and future-ready.",
      image: "/assets/7090333.jpg",
      imageAlt: "Illustration of connected systems integrating through APIs",
    },
    {
      title: "UI/UX Design",
      description:
        "Great design is essential to software that not only works but delights users. Our UI/UX team crafts visually stunning, user-friendly interfaces that make your software easy to navigate and enjoyable to use. We work with you to understand your users and design experiences that drive engagement and satisfaction.",
      image: "/assets/ui-ux-representations-with-laptop.jpg",
      imageAlt: "UI/UX design wireframes laid out beside a laptop",
    },
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Transform your business with the power of AI and machine learning. We integrate predictive analytics, natural language processing, and machine learning algorithms into your software to help you make data-driven decisions, automate tasks, and unlock valuable insights — from chatbots to recommendation engines and advanced analytics platforms.",
      image: "/assets/engineers-brainstorming-ways-use-ai.jpg",
      imageAlt:
        "Engineers brainstorming machine learning solutions at a whiteboard",
    },
  ],
  included: {
    eyebrow: "What's included",
    title: "Everything you need to ship great software",
    subtitle:
      "One partner across the full delivery lifecycle — from design to launch and beyond.",
    items: [
      {
        id: 1,
        title: "Custom-built software",
        description:
          "Solutions engineered around your exact workflows, not off-the-shelf compromises.",
        icon: Code2,
      },
      {
        id: 2,
        title: "Web & mobile apps",
        description:
          "Fast, responsive experiences across every device and platform.",
        icon: Smartphone,
      },
      {
        id: 3,
        title: "APIs & integrations",
        description:
          "Secure connections to payment, messaging, and third-party services.",
        icon: Webhook,
      },
      {
        id: 4,
        title: "AI & automation",
        description:
          "Predictive analytics and intelligent features that cut manual work.",
        icon: Sparkles,
      },
    ],
  },
  cta: {
    title: "Ready to get started?",
    subtitle:
      "With Soft Solutions Technologies you get more than software — a reliable, forward-thinking partner. Reach out today to see how we can transform your business with tailored software solutions.",
  },
};

export const cloudServicesPage: ServicePageContent = {
  hero: {
    image: "/assets/saas-concept-collage.jpg",
    imageAlt: "Cloud and SaaS technology concept collage",
    eyebrow: "Cloud Services",
    title: "Cloud Services",
    breadcrumb: "Cloud Services",
    intro:
      "Scalable, secure cloud solutions — from infrastructure and migration to backup, security, and fully managed operations.",
  },
  features: [
    {
      title: "Cloud Infrastructure Setup",
      description:
        "Our Cloud Infrastructure Setup service helps you establish a robust, scalable foundation for your cloud environment. We design and deploy customized solutions tailored to your business needs, ensuring optimal performance, cost-efficiency, and security from day one.",
      image: "/assets/37655.jpg",
      imageAlt: "Illustration of scalable cloud infrastructure",
    },
    {
      title: "Cloud Migration Services",
      description:
        "Our Cloud Migration Services ensure a smooth transition from on-premise systems to cloud platforms. We perform comprehensive assessments, create detailed migration plans, and execute with minimal downtime, ensuring your data and applications are transferred securely.",
      image: "/assets/6551283.jpg",
      imageAlt: "Illustration of data migrating to the cloud",
    },
    {
      title: "Cloud Backup and Disaster Recovery",
      description:
        "Protect your business from data loss with automated cloud backups and a tested disaster-recovery plan. We replicate critical data across regions and define clear recovery objectives, so you can restore operations quickly after any outage or incident.",
      image:
        "/assets/1902.i039.011.P.m004.c30.cloud services isometric icons-02.jpg",
      imageAlt: "Isometric illustration of cloud backup and recovery services",
    },
    {
      title: "Cloud Security",
      description:
        "As businesses migrate to the cloud, securing cloud-based infrastructure is paramount. We provide cloud security services to protect your applications, platforms, and data from unauthorized access, cyber threats, and breaches, ensuring compliance with industry regulations.",
      image: "/assets/20945823.jpg",
      imageAlt: "Illustration of a secured cloud platform",
    },
    {
      title: "Managed Cloud Services",
      description:
        "Outsource the management of your cloud infrastructure so you can focus on your core business. Our team handles updates, performance tuning, and round-the-clock monitoring to keep your cloud environment running smoothly.",
      image: "/assets/20945284.jpg",
      imageAlt: "Illustration of a managed, monitored cloud environment",
    },
  ],
  included: {
    eyebrow: "What's included",
    title: "End-to-end cloud, handled for you",
    subtitle:
      "From first setup to day-two operations, we cover the whole cloud lifecycle.",
    items: [
      {
        id: 1,
        title: "Scalable infrastructure",
        description: "Right-sized cloud foundations that grow with your demand.",
        icon: Cloud,
      },
      {
        id: 2,
        title: "Seamless migration",
        description:
          "Move workloads to the cloud with minimal downtime and risk.",
        icon: ArrowRightLeft,
      },
      {
        id: 3,
        title: "Built-in security",
        description:
          "Encryption, access controls, and audits keep your data safe.",
        icon: ShieldCheck,
      },
      {
        id: 4,
        title: "Managed & monitored",
        description:
          "Round-the-clock monitoring and tuning so you can focus on business.",
        icon: Server,
      },
    ],
  },
  cta: {
    title: "Ready to move to the cloud?",
    subtitle:
      "From backup and disaster recovery to migration and security, we provide end-to-end cloud solutions tailored to your business. Let's build your cloud roadmap together.",
  },
};

export const cyberSecurityPage: ServicePageContent = {
  hero: {
    image: "/assets/business-corporate-protection-safety-security-concept.jpg",
    imageAlt: "Corporate cyber security and data protection concept",
    eyebrow: "Cyber Security",
    title: "Cyber Security",
    breadcrumb: "Cyber Security",
    intro:
      "Advanced protection that safeguards your business from data breaches, ransomware, and evolving cyber threats — across every layer.",
  },
  features: [
    {
      title: "Network Security",
      description:
        "We protect your network perimeter and internal traffic with layered defenses — firewalls, intrusion detection and prevention, network segmentation, and continuous traffic inspection — to keep threats out and your sensitive data in.",
      image: "/assets/7088664.jpg",
      imageAlt: "Illustration of a protected, monitored corporate network",
    },
    {
      title: "Endpoint Protection",
      description:
        "With the growing number of remote workers and mobile devices, protecting endpoints is crucial. We provide endpoint protection — antivirus, device encryption, and threat detection — to secure every device that connects to your network, including laptops, smartphones, and tablets.",
      image: "/assets/4022190.jpg",
      imageAlt: "Illustration of secured laptops and mobile devices",
    },
    {
      title: "Application Security",
      description:
        "We secure your software applications by identifying and addressing security flaws throughout the development lifecycle. From code review to deployment, we integrate secure coding practices and automated testing to prevent vulnerabilities such as SQL injection and cross-site scripting (XSS).",
      image: "/assets/Data_security_27.jpg",
      imageAlt: "Secure application code shown on a screen",
    },
    {
      title: "Cloud Security",
      description:
        "As businesses migrate to the cloud, securing cloud-based infrastructure is paramount. We provide cloud security services to protect your applications, platforms, and data from unauthorized access, cyber threats, and breaches, ensuring compliance with industry regulations.",
      image: "/assets/20945823.jpg",
      imageAlt: "Illustration of a secured cloud environment",
    },
    {
      title: "Vulnerability Assessment & Penetration Testing",
      description:
        "Our vulnerability assessments and penetration testing identify weaknesses in your systems before hackers can exploit them. We simulate real-world cyberattacks and provide clear recommendations to address vulnerabilities, ensuring your network, applications, and infrastructure stay secure.",
      image: "/assets/20945584.jpg",
      imageAlt:
        "Illustration of a penetration tester probing for vulnerabilities",
    },
    {
      title: "Incident Response and Recovery",
      description:
        "In the event of a cyberattack or data breach, our incident response team acts swiftly to contain the threat and minimize damage. We develop disaster recovery plans so your business can recover quickly — minimizing downtime and restoring systems to normal operation.",
      image: "/assets/2953966.jpg",
      imageAlt: "Illustration of an incident response and recovery workflow",
    },
  ],
  included: {
    eyebrow: "What's included",
    title: "Defense in depth, end to end",
    subtitle:
      "Protection across every layer, backed by proactive testing and rapid response.",
    items: [
      {
        id: 1,
        title: "Layered protection",
        description:
          "Defense across network, endpoints, applications, and the cloud.",
        icon: ShieldCheck,
      },
      {
        id: 2,
        title: "Proactive testing",
        description:
          "Vulnerability assessments and penetration testing before attackers strike.",
        icon: ScanSearch,
      },
      {
        id: 3,
        title: "Data & endpoint security",
        description:
          "Encryption and threat detection for every device on your network.",
        icon: Lock,
      },
      {
        id: 4,
        title: "Rapid incident response",
        description:
          "Swift containment and recovery to minimize downtime and damage.",
        icon: Siren,
      },
    ],
  },
  cta: {
    title: "Ready to strengthen your defenses?",
    subtitle:
      "From threat detection and penetration testing to incident response, we help you protect your business against evolving cyber threats. Talk to our security team today.",
  },
};

export const networkingPage: ServicePageContent = {
  hero: {
    image: "/assets/young-network-engineer-looking-ethernet-switches.jpg",
    imageAlt: "Network engineer inspecting Ethernet switches",
    eyebrow: "Networking Services",
    title: "Networking Services",
    breadcrumb: "Networking",
    intro:
      "Secure, efficient networks designed, deployed, and maintained to keep your business connected and running at full speed.",
  },
  features: [
    {
      title: "Network Design and Architecture",
      description:
        "We provide network design and architecture services to create efficient, scalable, and secure networks tailored to your business. This includes designing the layout of your infrastructure, ensuring optimal performance, and planning for bandwidth, security, and future scalability.",
      image: "/assets/networking-architecture.png",
      imageAlt: "Diagram of a structured enterprise network architecture",
    },
    {
      title: "Network Installation and Configuration",
      description:
        "Our team handles the installation and configuration of your networking hardware and software, ensuring your routers, switches, firewalls, and other equipment are properly set up to communicate seamlessly — so your network operates efficiently right from the start.",
      image: "/assets/7088664.jpg",
      imageAlt: "Illustration of configured network routers and switches",
    },
    {
      title: "Network Monitoring and Maintenance",
      description:
        "With our network monitoring and maintenance services, we keep your network operating smoothly and efficiently. Continuous monitoring helps us detect and resolve potential issues before they affect operations, while regular maintenance ensures optimal performance.",
      image:
        "/assets/portrait-male-engineer-working-field-engineers-day-celebration.jpg",
      imageAlt: "Network engineer monitoring infrastructure on site",
    },
    {
      title: "Network Optimization and Troubleshooting",
      description:
        "To keep your network running at its peak, we provide optimization and troubleshooting services. This includes analyzing traffic patterns, eliminating bottlenecks, and resolving any performance issues that may disrupt your operations.",
      image: "/assets/technician-walking-through-server-rigs.jpg",
      imageAlt: "Technician inspecting server racks in a data center",
    },
    {
      title: "Wireless Networking",
      description:
        "We provide comprehensive wireless networking solutions that ensure fast, reliable, and secure Wi-Fi connectivity throughout your office or business premises. Our services include planning, installation, and ongoing management to optimize wireless performance.",
      image: "/assets/tablet-with-wifi-symbol.jpg",
      imageAlt: "Tablet showing a Wi-Fi signal symbol",
    },
    {
      title: "Network Consultancy and Auditing",
      description:
        "Our network consultancy services offer expert advice on improving your existing infrastructure. We conduct network audits to evaluate your current setup, identify vulnerabilities, and recommend ways to enhance performance, scalability, and security.",
      image:
        "/assets/supervisor-server-farm-overseeing-engineer-fixing-network-issues.jpg",
      imageAlt: "Supervisor and engineer auditing a server farm",
    },
  ],
  included: {
    eyebrow: "What's included",
    title: "Connectivity you can count on",
    subtitle:
      "Networks built for performance, reliability, and security at every layer.",
    items: [
      {
        id: 1,
        title: "Designed to scale",
        description:
          "Network architecture planned for performance and future growth.",
        icon: Network,
      },
      {
        id: 2,
        title: "Reliable wireless",
        description: "Fast, secure Wi-Fi coverage across your premises.",
        icon: Wifi,
      },
      {
        id: 3,
        title: "Always optimized",
        description:
          "Continuous monitoring removes bottlenecks before they bite.",
        icon: Gauge,
      },
      {
        id: 4,
        title: "Secure by design",
        description:
          "Firewalls, segmentation, and audits baked into every build.",
        icon: ShieldCheck,
      },
    ],
  },
  cta: {
    title: "Ready to connect your business?",
    subtitle:
      "Seamless connectivity is the backbone of modern business. We design, implement, and maintain robust networks tailored to your needs. Contact us to keep your business connected, secure, and efficient.",
  },
};

// ---------------------------------------------------------------------------
// FAQs — power both the visible FAQ sections and the FAQPage JSON-LD used for
// Answer Engine Optimization. Answers are written as concise, self-contained
// statements so answer engines can extract and cite them directly.
// TODO(client): confirm these answers reflect your current offering.
// ---------------------------------------------------------------------------

export const homeFaqs: FaqItem[] = [
  {
    question: "What is Soft Solutions Technologies?",
    answer:
      "Soft Solutions Technologies is a Nairobi-based IT company that provides software development, cloud services, cyber security, and networking solutions for businesses across Kenya.",
  },
  {
    question: "Where is Soft Solutions Technologies located?",
    answer:
      "Our office is in Westlands, Nairobi, Kenya. We serve clients throughout Kenya and are open Monday to Friday, 8:00 AM to 5:00 PM EAT.",
  },
  {
    question: "What services does Soft Solutions Technologies offer?",
    answer:
      "We offer four core services: custom software development, cloud services and migration, cyber security, and networking and IT infrastructure.",
  },
  {
    question: "How do I get a quote or start a project?",
    answer:
      "Reach out through our contact page, by phone, or by email. We typically reply within one business day to discuss your requirements and next steps.",
  },
];

// Keyed by service route so the FAQ source of truth matches the nav and sitemap.
export const serviceFaqs: Record<string, FaqItem[]> = {
  "/software-development": [
    {
      question: "What software development services do you offer?",
      answer:
        "We build custom software, web applications, and mobile apps for iOS and Android, plus API development and integration, UI/UX design, and ongoing maintenance and support.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We build modern web and mobile applications using technologies such as React, Next.js, and Node.js, chosen to fit each project's requirements.",
    },
    {
      question: "Do you build both web and mobile apps?",
      answer:
        "Yes. We develop responsive web applications and native mobile apps for both iOS and Android, and can deliver a mobile version of an existing web product.",
    },
    {
      question: "Do you provide support after the software is delivered?",
      answer:
        "Yes. We provide ongoing maintenance and support, including updates, bug fixes, performance improvements, and new features as your business evolves.",
    },
  ],
  "/cloud-services": [
    {
      question: "What cloud services do you provide?",
      answer:
        "We handle cloud infrastructure setup, cloud migration, backup and disaster recovery, cloud security, and fully managed cloud operations.",
    },
    {
      question: "Can you migrate our existing systems to the cloud?",
      answer:
        "Yes. We plan and execute cloud migrations, moving your applications and data to the cloud with minimal disruption to your business.",
    },
    {
      question: "Do you offer ongoing cloud management?",
      answer:
        "Yes. Our managed cloud services include monitoring, optimization, and security so your environment stays reliable and cost-effective.",
    },
    {
      question: "How do you keep cloud environments secure?",
      answer:
        "We build security into every layer of your cloud setup, from access controls and encryption to continuous monitoring and backup and disaster recovery.",
    },
  ],
  "/cyber-security": [
    {
      question: "What cyber security services do you offer?",
      answer:
        "We provide network security, endpoint protection, application security, cloud security, vulnerability assessments and penetration testing, and incident response and recovery.",
    },
    {
      question: "Do you carry out penetration testing?",
      answer:
        "Yes. We run vulnerability assessments and penetration testing to identify weaknesses in your systems before attackers can exploit them.",
    },
    {
      question: "How can Soft Solutions protect my business from ransomware?",
      answer:
        "We apply layered protection across your network, endpoints, applications, and cloud, combined with proactive testing and rapid incident response to defend against ransomware and other threats.",
    },
    {
      question: "What happens after a security incident?",
      answer:
        "Our incident response and recovery service helps you contain, investigate, and recover from security incidents, and strengthen defenses against future attacks.",
    },
  ],
  "/networking": [
    {
      question: "What networking services do you provide?",
      answer:
        "We offer network design and architecture, installation and configuration, monitoring and maintenance, optimization and troubleshooting, wireless networking, and network consultancy and auditing.",
    },
    {
      question: "Do you support wireless networks?",
      answer:
        "Yes. We design and deploy secure, reliable wireless networks that provide fast, consistent coverage across your premises.",
    },
    {
      question: "Can you audit our existing network?",
      answer:
        "Yes. Our network consultancy and auditing service reviews your current infrastructure and recommends improvements for performance, reliability, and security.",
    },
    {
      question: "Do you provide ongoing network maintenance?",
      answer:
        "Yes. We monitor and maintain your network to keep it secure and optimized, and troubleshoot issues as they arise to minimize downtime.",
    },
  ],
};
