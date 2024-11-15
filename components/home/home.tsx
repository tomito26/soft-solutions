"use client";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";

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
        className="flex items-center px-4 md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]"
      >
        <div className="md:w-8/12">
          <h1 className="font-bold text-3xl md:text-6xl text-white pb-6">
            Empowering Your Business with Cutting-Edge IT Solutions
          </h1>
          <p className="text-white text-sm md:text-base font-medium pb-8 md:w-10/12">
            We deliver innovative and reliable technology solutions tailored to
            meet your unique needs. Transform your operations with our expert
            software development and robust hardware systems.
          </p>
          <Button className="hover:bg-[#0423A0]/80 ">Get Started</Button>
        </div>
      </div>
      {/* our services */}
      <div className="px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] w-full pt-12 pb-32 flex justify-center items-center flex-col">
        <div className="md:w-7/12 4xl:w-7/12 5xl:w-7/12 flex justify-center flex-col items-center">
          <h2 className="text-xs md:text-sm uppercase  font-bold text-[#0423A0] text-center">
            What we offer
          </h2>
          <h3 className="text-2xl md:text-5xl text-monochrome font-bold text-center">
            We provide truly prominent digital solutions.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4  lg:gap-5 xl:gap-8 2xl:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      {/* who we are  */}
      <div className="bg-[#00156B] grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-64 w-full md:px-[40px] px-4 xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] pt-20 md:pt-48 pb-32 ">
        <div className="md:h-[483px] h-[240px] w-full md:w-[583px] order-last md:order-first relative rounded-md">
          <Image
            src="/assets/Rectangle 10.png"
            alt=""
            fill
            className="absolute cover rounded-md"
          />
          <div className="absolute -top-28 -right-20 hidden md:block">
            <div className="h-[262px] md:w-[349px] w-full relative">
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
          <h2 className="text-xs md:text-sm uppercase font-bold text-white mb-4">
            Who we are
          </h2>
          <h3 className="text-2xl md:text-5xl  font-bold text-white mb-4">
            Highly Tailored IT Design, management & Support Services.
          </h3>
          <p className="text-white text-sm  md:text-base mb-3">
            We specialize in delivering comprehensive IT solutions tailored to
            your business needs. Whether you&apos;re looking to streamline
            operations with custom software, build a responsive web presence, or
            securely manage your data in the cloud, our team of experts is here
            to help.
          </p>
          <p className="text-white text-sm md:text-base">
            With years of experience and a passion for innovation, we bring your
            vision to life through technology.
          </p>
        </div>
      </div>
      {/* why choose us  */}
      <div className="pt-24 pb-32 px-4 xl:px-[100px] lg:px-[80px] md:px-[60px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]  grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-center flex-col justify-center">
          <div className="">
            <h2 className="text-xs md:text-sm uppercase font-bold text-[#0423A0] mb-3">
              Why Choose us
            </h2>
            <h3 className="text-2xl md:text-5xl font-bold text-monochrome  text-left mb-3">
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
      <div className="px-4 md:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] lg:px-[80px] pt-20 pb-32 bg-[#0423A0]/10 flex justify-center items-center flex-col">
        <div className="md:w-10/12 4xl:w-8/12">
          <h2 className="md:text-sm text-xs uppercase font-bold text-[#0423A0] mb-3 text-center">
            Testimonials
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold text-monochrome text-center mb-3">
            Delivering innovative IT solutions that exceed expectations
          </h3>
        </div>
        <div className="flex justify-center items-center w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            observeParents={true}
            observer={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 80,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 240,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              1300: {
                slidesPerView: 2,
                spaceBetween: 120,
              },
              1536: {
                slidesPerView: 2,
                spaceBetween: 120,
              },
            }}
            className="flex justify-center items-center flex-row w-full"
          >
            {[...testimonials, ...testimonials].map((testimony, index) => (
              <SwiperSlide key={index}>
                <div className="pt-10 pb-14">
                  <Testimonial key={testimony.id} testimony={testimony} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* our partners */}
      <div className="md:px-[60px]  px-4 lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]  pt-20 pb-32 flex justify-center flex-col items-center">
        <div className="md:w-8/12">
          <h2 className="text-xs md:text-sm uppercase font-bold text-[#0423A0] mb-3 text-center">
            Our Partners
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold text-monochrome text-center mb-3">
            Creating Value Through Meaningful Partnerships
          </h3>
        </div>
        <div className="flex justify-center items-center w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            className="flex justify-center items-center flex-row w-full"
          >
            {[...our_partners, ...our_partners].map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center pt-6 pb-10">
                  <div className="h-[80px] w-[240px] relative rounded-lg">
                    <Image
                      src={partner.logo}
                      alt={partner.partner}
                      fill
                      className="absolute object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
