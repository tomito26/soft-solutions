import { ServiceType } from "@/types/types";
import {
  Database,
  HardDrive,
  LayoutGrid,
  Network,
  Server,
  Shield,
  SquarePen,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import ServiceCard from "./lib/ui/service-card";
import WhyChooseUsCard from "./lib/ui/why-choose-us-card";
import Testimonial from "./lib/ui/testimonial";

const services: ServiceType[] = [
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
  {
    id: 3,
    title: "Cloud Storage & Infrastructure",
    description:
      "Secure, reliable cloud solutions for data storage, management, and scalability.",
    icon: Server,
  },
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
    title: "Hardware Installations",
    description:
      "Specialized hardware services including camera installations, access control systems, and other security installations.",
    icon: HardDrive,
  },
  {
    id: 8,
    title: "Networking Solutions",
    description:
      "Deployment of network infrastructures for enterprises, including hybrid cloud and edge computing solutions.",
    icon: Network,
  },
];

const why_choose_us = [
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

const testimonials = [
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
const our_partners = [
  {
    id:1,
    logo: "/assets/cisco.png",
    partner: "Cisco",
  },
  {
    id: 2,
    logo: "/assets/Rectangle 35.png",
    partner: "NCBA Bank"
  },
  {
    id: 3,
    logo: "/assets/Rectangle 36.png",
    partner: "NCBA Bank"
  },
   {
    id: 4,
    logo: "/assets/safaricom.png",
    partner: "Safaricom"
  }
]

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(4, 35,160, 0.66), rgba(4,35,160, 0.66)), url('/assets/Rectangle 2.png')",
          height: "80vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center px-[300px]"
      >
        <div className="w-8/12">
          <h1 className="font-bold text-6xl text-white pb-6">
            Empowering Your Business with Cutting-Edge IT Solutions
          </h1>
          <p className="text-white text-base font-medium pb-8 w-10/12">
            We deliver innovative and reliable technology solutions tailored to
            meet your unique needs. Transform your operations with our expert
            software development and robust hardware systems.
          </p>
          <Button className="hover:bg-[#0423A0]/80">Get Started</Button>
        </div>
      </div>
      {/* our services */}
      <div className="px-[300px] w-full pt-12 pb-20 flex justify-center items-center flex-col">
        <div className="w-6/12 flex justify-center flex-col items-center">
          <h2 className="text-lg font-bold text-[#0423A0] text-center">
            Our Core Services
          </h2>
          <h3 className="text-5xl font-bold text-center">
            We provide truly prominent digital solutions.
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      {/* who we are  */}
      <div className="bg-[#00156B] grid grid-cols-2 gap-40 w-full px-[300px] pt-48 pb-16 ">
        <div className="h-[483px] w-[583px] relative rounded-md">
          <Image
            src="/assets/Rectangle 10.png"
            alt=""
            fill
            className="absolute cover rounded-md"
          />
          <div className="absolute -top-28 -right-20">
            <div className="h-[262px] w-[349px] relative">
              <Image
                src="/assets/Rectangle 11.png"
                alt=""
                fill
                className="absolute object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Who we are</h2>
          <h3 className="text-5xl font-bold text-white mb-4">
            Highly Tailored IT Design, management & Support Services.
          </h3>
          <p className="text-white mb-3">
            We specialize in delivering comprehensive IT solutions tailored to
            your business needs. Whether you&apos;re looking to streamline
            operations with custom software, build a responsive web presence, or
            securely manage your data in the cloud, our team of experts is here
            to help.
          </p>
          <p className="text-white">
            With years of experience and a passion for innovation, we bring your
            vision to life through technology.
          </p>
        </div>
      </div>
      {/* why choose us  */}
      <div className="py-24 px-[300px] grid grid-cols-2 gap-10">
        <div className="flex items-center flex-col justify-center">
          <div className="">
            <h2 className="text-lg font-bold text-[#0423A0] mb-3">
              Why Choose us
            </h2>
            <h3 className="text-5xl font-bold  text-left mb-3">
              Innovative, Secure, and Scalable IT Services Tailored for You
            </h3>
          </div>
          <p className="text-base font-normal">
            We are dedicated to empowering businesses with cutting-edge IT
            solutions tailored to their unique needs. Our expert team delivers
            innovative, reliable, and secure services that help organizations
            thrive in today&apos;s fast-paced digital landscape
          </p>
        </div>
        <div>
          {why_choose_us.map((item) => (
            <WhyChooseUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* what our clients are saying  */}
      <div className="px-[300px] py-20 bg-[#0423A0]/10 flex justify-center items-center flex-col">
        <div className="w-6/12">
          <h2 className="text-lg font-bold text-[#0423A0] mb-3 text-center">
            Testimonials
          </h2>
          <h3 className="text-5xl font-bold  text-center mb-3">
            Delivering innovative IT solutions that exceed expectations
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-20 mt-10 pl-[50px]">
          {testimonials.map((testimony) => (
            <Testimonial key={testimony.id} testimony={testimony} />
          ))}
        </div>
      </div>
      {/* our partners */}
      <div className="px-[300px] py-20 flex justify-center flex-col items-center">
        <div className="w-8/12">
          <h2 className="text-lg font-bold text-[#0423A0] mb-3 text-center">
            Our Partners
          </h2>
          <h3 className="text-5xl font-bold  text-center mb-3">
            Creating Value Through Meaningful Partnerships
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-16">
          {our_partners.map(partner => <div className="h-[156px] w-[240px]  relative" key={partner.id}>
            <Image src={partner.logo} fill alt={partner.partner} className="absolute object-contain"/>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
