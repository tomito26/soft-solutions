import Image from "next/image";
import { Button } from "../ui/button";
import ServiceCard from "./lib/ui/service-card";
import Testimonial from "./lib/ui/testimonial";
import WhyChooseUsCard from "./lib/ui/why-choose-us-card";
import {
  our_partners,
  services,
  testimonials,
  why_choose_us,
} from "@/lib/constants";

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
      <div className="px-[300px] w-full pt-12 pb-32 flex justify-center items-center flex-col">
        <div className="w-6/12 flex justify-center flex-col items-center">
          <h2 className="text-sm uppercase  font-bold text-[#0423A0] text-center">
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
      <div className="bg-[#00156B] grid grid-cols-2 gap-40 w-full px-[300px] pt-48 pb-32 ">
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
          <h2 className="text-sm uppercase font-bold text-white mb-4">Who we are</h2>
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
      <div className="pt-24 pb-32 px-[300px] grid grid-cols-2 gap-10">
        <div className="flex items-center flex-col justify-center">
          <div className="">
            <h2 className="text-sm uppercase font-bold text-[#0423A0] mb-3">
              Why Choose us
            </h2>
            <h3 className="text-5xl font-bold  text-left mb-3">
              Innovative, Secure, and Scalable IT Services Tailored for You
            </h3>
          </div>
        </div>
        <div>
          {why_choose_us.map((item) => (
            <WhyChooseUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* what our clients are saying  */}
      <div className="px-[300px] pt-20 pb-32 bg-[#0423A0]/10 flex justify-center items-center flex-col">
        <div className="w-8/12">
          <h2 className="text-sm uppercase font-bold text-[#0423A0] mb-3 text-center">
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
      <div className="px-[300px] pt-20 pb-32 flex justify-center flex-col items-center">
        <div className="w-8/12">
          <h2 className="text-sm uppercase font-bold text-[#0423A0] mb-3 text-center">
            Our Partners
          </h2>
          <h3 className="text-5xl font-bold  text-center mb-3">
            Creating Value Through Meaningful Partnerships
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-16">
          {our_partners.map((partner) => (
            <div className="h-[156px] w-[240px]  relative" key={partner.id}>
              <Image
                src={partner.logo}
                fill
                alt={partner.partner}
                className="absolute object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
