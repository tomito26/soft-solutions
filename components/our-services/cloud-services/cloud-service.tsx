import React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ChevronRight } from "lucide-react";

const CloudServices = () => {
  return (
    <div>
    <div className="flex relative h-[60vh] w-full items-center">
        <Image
          src="/assets/saas-concept-collage.jpg"
          alt="collegues smiling"
          fill
          className="absolute object-cover object-center"
        />
        <div className="w-full flex  items-center z-10 h-full bg-[#0423A0]/75  px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div className="w-8/12">
            <h1 className="font-bold text-3xl md:text-6xl text-white pb-6">
              Cloud Services
            </h1>
            <p className="md:text-base text-sm flex items-center text-white">Home <ChevronRight className="h-6 w-6 stroke-white" /> <span className="text-[#f4f4f4]">Cloud Services</span></p>
          </div>
        </div>
      </div>
      <div className="pt-10 md:pt-16 pb-24 md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] px-4 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/37655.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="md:text-5xl text-2xl font-bold text-monochrome mb-4">
              Cloud Infrastructure Setup
            </h2>
            <p className="text-sm md:text-base ">
              Our Cloud Infrastructure Setup service helps you establish a
              robust and scalable foundation for your cloud environment. We
              design and deploy customized solutions tailored to your business
              needs, ensuring optimal performance, cost-efficiency, and
              security.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/6551283.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Cloud Migration Services
            </h2>
            <p className="text-base ">
              Our Cloud Migration Services ensure a smooth transition from
              on-premise systems to cloud platforms. We perform comprehensive
              assessments, create detailed migration plans, and execute the
              process with minimal downtime, ensuring your data and applications
              are securely transferred.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="h-[240px] md:h-[328px] w-full md:w-[520px] relative shrink-0">
            <Image
              src="/assets/1902.i039.011.P.m004.c30.cloud services isometric icons-02.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Cloud Backup and Disaster Recovery
            </h2>
            <p className="text-base">
              Our Cloud Security Solutions safeguard your cloud environment with
              advanced protection mechanisms. We implement robust access
              controls, data encryption, and regular security audits to ensure
              your operations are secure and compliant with industry standards.
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
              src="/assets/20945284.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Managed Cloud Services
            </h2>
            <p className="text-sm md:text-base">
              Outsource the management of your cloud infrastructure to focus on
              your core business operations. Our team handles updates,
              performance tuning, and round-the-clock monitoring to keep your
              cloud environment running smoothly.
            </p>
          </div>
        </div>

        <div className="pt-12 md:pt-16 pb-16 mt-16 flex justify-center items-center flex-col">
          <div className="md:w-8/12">
            <h2 className="font-bold text-2xl md:text-5xl text-center mb-4 capitalize text-monochrome">
              Ready to get Started?
            </h2>
            <p className="font-medium text-sm md:text-base text-center mb-6">
              From backup and disaster recovery to cloud migration and security,
              we provide end-to-end cloud solutions to meet your business needs.
            </p>
          </div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default CloudServices;
