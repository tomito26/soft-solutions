import React from "react";
import Image from "next/image";

const SoftwareServices = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(4, 35,160, 0.66), rgba(4,35,160, 0.66)), url('/assets/programer-sitting-desk-with-multiple-screens-running-code-talking-with-colleague-about-artificial-intelligence-algorithm-software-developers-doing-innovative-artificial-intelligence-project (1).jpg')",
          height: "40vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[100px] 3xl:px-[120px] 4xl:px-[200px] 5xl:px-[300px]"
      >
        <div className="w-8/12">
          <h1 className="font-bold text-6xl text-white pb-6">
            Software Services
          </h1>
        </div>
      </div>
      <div className="pt-16 pb-24 px-[320px]">
        <div className="flex items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/side-view-man-working-with-computer.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              Web and Mobile Applications Development
            </h2>
            <p className="text-base ">
              Our team specializes in creating custom software applications that
              align with your business goals. From mobile apps to complex web
              platforms, we provide solutions that are not only functional but
              scalable and user-centric. Every application we build is tailored
              to enhance productivity, engage users, and support seamless
              integration with existing systems, helping you stay competitive in
              a digital-first world.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/business-branding-label-chart-graphic.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              System Design & Integration
            </h2>
            <p className="text-base ">
              With our expertise in system architecture and integration, we
              simplify complex processes by designing solutions that bring your
              systems together. Our services streamline workflows, improve data
              accessibility, and enable cohesive communication across
              departments, allowing your team to work more efficiently and focus
              on strategic growth. We ensure your systems work harmoniously,
              laying a foundation for scalable and sustainable digital
              operations.
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-12">
          <div className="h-[328px] w-[500px] relative shrink-0">
            <Image
              src="/assets/saas-concept-collage.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-5xl font-bold text-monochrome mb-4">
              Cloud Services
            </h2>
            <p className="text-base">
              Our cloud services are designed to help businesses make the most
              of the cloud. We provide secure storage, data migration, and cloud
              management solutions that enable flexibility, cost savings, and
              real-time collaboration. Whether you&apos;re looking to migrate
              existing infrastructure to the cloud or need expert management of
              your cloud environment, our team provides end-to-end support to
              ensure seamless, reliable access to your data and applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
