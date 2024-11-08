import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const HardwareServices = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(4, 35,160, 0.66), rgba(4,35,160, 0.66)), url('/assets/young-network-engineer-looking-ethernet-switches.jpg')",
          height: "40vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[100px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]"
      >
        <div className="w-8/12">
          <h1 className="font-bold text-6xl text-white pb-6">
            Hardware Services
          </h1>
        </div>
      </div>
      <div className="pt-16 pb-24 md:px-[60px] xl:px-[80px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] ">
        <div className="flex items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/portrait-male-engineer-working-field-engineers-day-celebration.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              Network Setup and Management
            </h2>
            <p className="text-base ">
              Our Network Setup and Management services lay the foundation for
              strong, secure, and reliable connectivity within your
              organization. We design and install network infrastructures that
              meet your operational demands, optimizing for both speed and
              stability. Our team provides end-to-end support, from initial
              setup to ongoing management, ensuring that your network is secure
              and performs efficiently under all conditions.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/system-design.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              Hardware Installation & Support
            </h2>
            <p className="text-base ">
              We make hardware installation seamless by handling the setup and
              configuration of essential IT equipment. Our team ensures that all
              devices are properly configured to work within your systems,
              reducing downtime and ensuring reliability. From computer
              workstations to complex servers, our installation and support
              services keep your hardware operating at peak performance, with
              ongoing support to address any issues that arise.
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/male-entrepreneur-analyzing-stock-products-orders-doing-inventory-laptop-warehouse-young-man-using-logistics-financial-planning-send-merchandise-development-handheld-shot.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              Device Procurement and Setup
            </h2>
            <p className="text-base">
              Our Device Procurement and Setup service takes the hassle out of
              sourcing and deploying hardware. We help you select the right
              equipment to match your needs and budget, handling everything from
              procurement to on-site setup. We source computers, servers, and
              other necessary devices, and ensure each one is configured to
              function optimally within your existing infrastructure, so you can
              get to work without delay.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse  items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/professional-looking-freon-levels.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              Maintenance and Repairs
            </h2>
            <p className="text-base">
              We provide essential support to
              keep your IT hardware running smoothly. We conduct regular
              maintenance checks, troubleshoot issues, and perform necessary
              repairs to minimize disruptions. Whether it&apos;s addressing
              minor issues or conducting major repairs, our team is on standby
              to ensure your technology infrastructure remains resilient and
              operational.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/technician-walking-through-server-rigs.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              On-Site IT Support
            </h2>
            <p className="text-base">
              We offer reliable on-site IT support to assist with day-to-day
              hardware issues and emergencies. Our team is ready to handle
              troubleshooting, repairs, and routine maintenance directly at your
              location. With our on-site support, you have the peace of mind
              that comes from knowing skilled technicians are there to address
              issues promptly, so your team can stay focused on their work
              without technical interruptions.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/it-specialist-looking-network-issues-affecting-rigs-performance-using-tablet.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              IT Consulting
            </h2>
            <p className="text-base">
              We provide businesses with expert guidance on their technology
              strategy. We work closely with you to understand your challenges,
              goals, and vision, offering insights and solutions that
              future-proof your technology investments. From system assessments
              to implementing cutting-edge tools, our consultants deliver
              strategic advice tailored to your industry, ensuring that your
              technology aligns with your business&apos;s evolving needs and
              positions you for long-term success.
            </p>
          </div>
        </div>
        <div className="pt-16 pb-16 mt-16 flex justify-center items-center flex-col">
          <div className="w-8/12">
            <h2 className="font-bold text-5xl text-center mb-4 capitalize text-monochrome">
              Ready to get Started?
            </h2>
            <p className="font-medium text-center mb-6">
              Transform your business with cutting-edge software solutions
              designed to fit your unique needs. From custom applications to
              cloud services and cybersecurity, we&apos;re here to drive your
              digital success.
            </p>
          </div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default HardwareServices;
