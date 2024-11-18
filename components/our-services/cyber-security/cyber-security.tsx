import React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ChevronRight } from "lucide-react";

const CyberSecurity = () => {
  return (
    <div>
      <div className="flex relative h-[60vh] w-full items-center">
        <Image
          src="/assets/business-corporate-protection-safety-security-concept.jpg"
          alt="collegues smiling"
          fill
          className="absolute object-cover object-center"
        />
        <div className="w-full flex  items-center z-10 h-full bg-[#0423A0]/75  px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div className="w-8/12">
            <h1 className="font-bold text-3xl md:text-6xl text-white pb-6">
              Cyber Security
            </h1>
            <p className="md:text-base text-sm flex items-center text-white">Home <ChevronRight className="h-6 w-6 stroke-white" /> Cyber Security</p>
          </div>
        </div>
      </div>
      <div className="pt-10 md:pt-16 pb-24 md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] px-4 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/7088664.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="md:text-5xl text-2xl font-bold text-monochrome mb-4">
              Network Security
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
              src="/assets/4022190.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Endpoint Protection
            </h2>
            <p className="text-base ">
              With the increasing number of remote workers and mobile devices,
              protecting endpoints has become crucial. We provide endpoint
              protection services, including antivirus software, device
              encryption, and threat detection solutions to secure all devices
              that connect to your network, including laptops, smartphones, and
              tablets.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="h-[240px] md:h-[328px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/Data_security_27.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Application Security
            </h2>
            <p className="text-base">
              We secure your software applications by identifying and addressing
              potential security flaws throughout the development lifecycle.
              From code review to deployment, we integrate secure coding
              practices and automated security testing to prevent
              vulnerabilities such as SQL injection and cross-site scripting
              &#40;XSS&#41;.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse  items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/20945823.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="md:text-5xl text-2xl font-bold text-monochrome mb-4">
              Cloud Security
            </h2>
            <p className="text-sm md:text-base">
              As businesses migrate to the cloud, ensuring the security of
              cloud-based infrastructure is paramount. We provide cloud security
              services to protect your cloud applications, platforms, and data
              from unauthorized access, cyber threats, and breaches, ensuring
              compliance with industry regulations.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/20945584.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Vulnerability Assessment & Penetration Testing
            </h2>
            <p className="text-sm md:text-base">
              Our vulnerability assessments and penetration testing services
              help identify weaknesses in your systems before hackers can
              exploit them. We perform thorough testing to simulate real-world
              cyberattacks and provide recommendations to address
              vulnerabilities, ensuring your network, applications, and
              infrastructure are secure.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/2953966.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Incident Response and Recovery
            </h2>
            <p className="text-base md:text-base">
              In the event of a cyberattack or data breach, our incident
              response team acts swiftly to contain the threat and minimize
              damage. We develop disaster recovery plans to ensure your business
              can quickly recover, minimizing downtime and restoring your
              systems to normal operation.
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

export default CyberSecurity;
