import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const SoftwareDevelopment = () => {
  return (
    <div>
      <div className="flex relative h-[60vh] w-full items-center">
        <Image
          src="/assets/programer-sitting-desk-with-multiple-screens-running-code-talking-with-colleague-about-artificial-intelligence-algorithm-software-developers-doing-innovative-artificial-intelligence-project (1).jpg"
          alt="collegues smiling"
          fill
          className="absolute object-cover object-center"
        />
        <div className="w-full flex  items-center z-10 h-full bg-[#0423A0]/70  px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div className="w-8/12">
            <h1 className="font-bold text-3xl md:text-6xl text-white pb-6">
              Software Development
            </h1>
            <p className="md:text-base text-sm flex items-center text-white">
              <Link href="/" className="text-white hover:text-[#00156B]">
                Home
              </Link>{" "}
              <ChevronRight className="h-6 w-6 stroke-white" /> Software
              Development
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 pt-10 md:pt-16 pb-24 md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="flex md:flex-row flex-col-reverse items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/system-design.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Custom Software Development
            </h2>
            <p className="md:text-base text-sm ">
              We understand that every business is unique, which is why we offer
              custom software development tailored specifically to your goals.
              Whether you&apos;re looking to streamline your internal processes,
              build a new product, or create a solution for a specific
              challenge, we deliver software that fits your exact requirements.
              From small tools to large-scale enterprise applications,
              we&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/website-development.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Web Development
            </h2>
            <p className="md:text-base text-sm">
              In today&apos;s digital age, having a strong online presence is
              critical. We offer web development services that ensure your
              website or web application is fast, responsive, and user-friendly.
              Whether it&apos;s a dynamic, content-driven website or a complex
              web application, our team uses cutting-edge technologies like
              React, Next.js, and Node.js to build platforms that deliver an
              exceptional user experience across all devices.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row  items-center gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/smartphone-with-user-interface-concept.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Mobile App Development
            </h2>
            <p className="md:text-base text-sm">
              Want to reach your customers on the go? Our mobile app development
              services create seamless, intuitive, and engaging apps for both
              iOS and Android platforms. Whether you need a mobile version of
              your web application, an e-commerce app, or a service-based app,
              we ensure your app delivers an excellent user experience and
              maximizes engagement.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse  items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/6664783.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              Software Maintenance & Support
            </h2>
            <p className="md:text-base text-sm">
              After your software is up and running, we provide ongoing
              maintenance and support to ensure everything works smoothly. This
              includes updating your software, fixing bugs, improving
              performance, and adding new features as your business evolves.
              With our support, you can be confident that your systems will
              always be up to date and performing at their best.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/7090333.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              API Development & Integration
            </h2>
            <p className="text-sm md:text-base">
              To maximize the power of your software, API development and
              integration is crucial. We develop robust, secure, and scalable
              APIs that enable your systems to communicate with other services,
              whether it&apos;s third-party integrations like payment gateways,
              social media, or internal system connections. This ensures your
              business processes are efficient, automated, and future-ready.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/ui-ux-representations-with-laptop.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              UI/UX Design
            </h2>
            <p className="text-sm md:text-base">
              We believe that great design is essential to creating software
              that not only works but delights users. Our UI/UX design team
              focuses on crafting visually stunning, user-friendly interfaces
              that make your software easy to navigate and enjoyable to use. We
              work with you to understand your users and design experiences that
              drive engagement and satisfaction.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12">
          <div className="md:h-[328px] h-[240px] w-full md:w-[500px] relative shrink-0">
            <Image
              src="/assets/engineers-brainstorming-ways-use-ai.jpg"
              alt=" a guy holding written design of website"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
              AI & Machine Learning Solutions
            </h2>
            <p className="text-sm md:text-base">
              Transform your business with the power of AI and machine learning.
              We integrate predictive analytics, natural language processing,
              and machine learning algorithms into your software to help you
              make data-driven decisions, automate tasks, and unlock valuable
              insights. Whether you&apos;re looking to create a chatbot,
              recommendation engine, or advanced analytics platform, we have the
              expertise to deliver.
            </p>
          </div>
        </div>
        <div className="pt-16 pb-16 mt-16 flex justify-center items-center flex-col">
          <div className="md:w-8/12">
            <h2 className="font-bold text-2xl md:text-5xl text-center mb-4 capitalize text-monochrome">
              Ready to get Started?
            </h2>
            <p className="font-medium text-sm md:text-base text-center mb-6">
              With Soft Solutions Technologies, you get more than just
              software—you get a comprehensive, reliable, and forward-thinking
              partner. Reach out today to learn how we can transform your
              business with powerful, tailored software solutions.
            </p>
          </div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
