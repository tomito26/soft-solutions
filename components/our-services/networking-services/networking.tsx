import React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Networking = () => {
  return (
    <div>
      <div className="flex relative h-[60vh] w-full items-center">
        <Image
          src="/assets/young-network-engineer-looking-ethernet-switches.jpg"
          alt="collegues smiling"
          fill
          className="absolute object-cover object-center"
        />
        <div className="w-full flex  items-center z-10 h-full bg-[#0423A0]/70  px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div className="w-8/12">
            <h1 className="font-bold text-3xl md:text-6xl text-white pb-6">
              Networking Services
            </h1>
            <p className="md:text-base text-sm flex items-center text-white">
              <Link href="/" className="text-white hover:text-[#00156B]">
                Home
              </Link>{" "}
              <ChevronRight className="h-6 w-6 stroke-white" /> Networking
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10 md:pt-16 pb-24 md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] px-4 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/networking-architecture.png"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="md:text-5xl text-2xl font-bold text-monochrome mb-4">
              Network Design and Architecture
            </h2>
            <p className="text-sm md:text-base ">
              We provide network design and architecture services to create
              efficient, scalable, and secure networks tailored to your business
              needs. This includes designing the layout of your network
              infrastructure, ensuring optimal performance, and considering
              factors such as bandwidth, security, and future scalability.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/7088664.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Network Security Solutions
            </h2>
            <p className="text-base ">
              Our team handles the installation and configuration of your
              networking hardware and software, ensuring your devices, routers,
              switches, firewalls, and other equipment are properly set up to
              communicate seamlessly. We ensure that your network operates
              efficiently right from the start.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="h-[240px] md:h-[328px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/portrait-male-engineer-working-field-engineers-day-celebration.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Network Monitoring and Maintenance
            </h2>
            <p className="text-base">
              With our network monitoring and maintenance services, we ensure
              your network operates smoothly and efficiently. Continuous
              monitoring helps us detect and resolve potential issues before
              they affect business operations, while regular maintenance ensures
              optimal performance.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse  items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/technician-walking-through-server-rigs.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="md:text-5xl text-2xl font-bold text-monochrome mb-4">
              Network Optimization and Troubleshooting
            </h2>
            <p className="text-sm md:text-base">
              To ensure your network is running at its peak, we provide network
              optimization and troubleshooting services. This includes analyzing
              traffic patterns, eliminating bottlenecks, and resolving any
              performance issues that may disrupt your operations.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/tablet-with-wifi-symbol.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Wireless Networking
            </h2>
            <p className="text-sm md:text-base">
              We provide comprehensive wireless networking solutions that ensure
              fast, reliable, and secure Wi-Fi connectivity throughout your
              office or business premises. Our services include planning,
              installation, and ongoing management to optimize wireless
              performance.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/supervisor-server-farm-overseeing-engineer-fixing-network-issues.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Network Consultancy and Auditing
            </h2>
            <p className="text-base md:text-base">
              Our network consultancy services offer expert advice on how to
              improve your existing network infrastructure. We conduct network
              audits to evaluate your current setup, identify vulnerabilities,
              and suggest ways to enhance performance, scalability, and
              security.
            </p>
          </div>
        </div>
        <div className="pt-12 md:pt-16 pb-16 mt-16 flex justify-center items-center flex-col">
          <div className="md:w-8/12">
            <h2 className="font-bold text-2xl md:text-5xl text-center mb-4 capitalize text-monochrome">
              Ready to get Started?
            </h2>
            <p className="font-medium text-sm md:text-base text-center mb-6">
              Seamless connectivity is the backbone of modern business. At Soft
              Solutions, we design, implement, and maintain robust networking
              systems tailored to your unique needs. Contact us today to enhance
              your IT infrastructure and keep your business connected, secure,
              and efficient
            </p>
          </div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Networking;
