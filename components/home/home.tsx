"use client";
import {
  our_partners,
  our_services,
  services,
  testimonials,
  why_choose_us,
} from "@/lib/constants";
import { BadgeCheck, BriefcaseBusiness, Users } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
import ServiceCard from "./lib/ui/service-card";
import Testimonial from "./lib/ui/testimonial";
import WhyChooseUsCard from "./lib/ui/why-choose-us-card";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex relative h-[80vh] w-full items-center p">
        <Image
          className="absolute object-cover object-center"
          src="/assets/Rectangle 2.png"
          fill
          alt="people reading"
        />
        <div className="px-4 h-full w-full flex items-center bg-[#0423A0]/75 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] z-10">
          <div className="md:w-8/12">
            <h1 className="font-bold text-3xl md:text-6xl text-white pb-6">
              Empowering Your Business with Cutting-Edge IT Solutions
            </h1>
            <p className="text-white text-sm md:text-base font-medium pb-8 md:w-10/12">
              We deliver innovative and reliable technology solutions tailored
              to meet your unique needs. Transform your operations with our
              expert software development and robust hardware systems.
            </p>
            <div className="flex items-center  gap-4">
              <Link href={"/about"}>
                <Button
                  size="default"
                  className="bg-[#00156B] hover:bg-[#00156B]/80"
                  onClick={() => router.push("/about")}
                >
                  Get Started
                </Button>
              </Link>
              <Button className="border border-input bg-transparent hover:bg-accent hover:text-[#00156B]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* our services */}
      <div className="px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] w-full pt-12 pb-32 flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4  lg:gap-5 xl:gap-8 2xl:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      {/* who we are  */}
      <div className="bg-[#00156B] grid md:grid-cols-2 grid-cols-1 gap-10 lg:gap-28 2xl:gap-20 3xl:gap-56 4xl:gap-64 w-full md:px-[40px] lg:px-[80px] px-4 xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] pt-20 md:pt-48 pb-32 ">
        <div className="md:h-[380px] 3xl:h-[400px] z-10 h-[240px] w-full md:w-[480px] 3xl:w-[540px] 4xl:w-[583px] order-last md:order-first relative rounded-md">
          <Image
            src="/assets/businesswoman-engaging-planning-session-with-realtor-contractor.jpg"
            alt=""
            fill
            className="absolute object-cover rounded-md z-10"
          />
          <div className="absolute -top-32 -right-24 hidden z-20 md:block">
            <div className="md:h-[240px] 3xl:h-[262px] md:w-[320px] 3xl:w-[349px] w-full relative">
              <Image
                src="/assets/three-happy-businesspeople-using-gadgets-office.jpg"
                alt=""
                fill
                className="absolute object-cover rounded-md"
              />
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "20px 20px",
                height: "200px",
                width: "200px"
            }}
            className="absolute bottom-0 -right-28 hidden md:block"
          ></div>
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
      {/* {our services} */}
      <div className="px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] w-full pt-12 pb-32 flex justify-center items-center flex-col">
        <div className="md:w-7/12 4xl:w-7/12 5xl:w-7/12 flex justify-center flex-col items-center">
          <h2 className="text-xs md:text-sm uppercase  font-bold text-[#0423A0] text-center">
            What we offer
          </h2>
          <h3 className="text-2xl md:text-5xl text-monochrome font-bold text-center">
            We provide truly prominent digital solutions.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4  lg:gap-5 xl:gap-8 2xl:gap-10">
          {our_services.map((service) => (
            <Link href={service.link} key={service.id}>
              <div key={service.id} className="rounded-2xl  pt-5 mt-10">
                <div className="bg-[#0423A0]/10 hover:bg-[#0423A0] group cursor-pointer border h-[240px] rounded-xl  rounded-t-2xl px-3 md:py-4 py-6 shadow-md">
                  <div className="h-16 w-16 relative  justify-self-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="absolute object-cover"
                    />
                  </div>
                  <h3 className="text-base  group-hover:text-white md:text-base text-center mt-4 text-monochrome font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base group-hover:text-white font-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* {core metrics} */}
      <div className="flex h-full w-full relative justify-center flex-col md:flex-row  md:justify-evenly items-center">
        <Image
          src="/assets/people-office.jpg"
          fill
          alt=""
          className="absolute object-cover"
        />
        <div className="h-full w-full z-10 flex justify-evenly items-center flex-col gap-12 md:flex-row bg-[#0423A0]/80 py-24 px-4 md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div className="flex items-center  gap-2">
            <BadgeCheck className="stroke-white h-10 w-10" />
            <div className="flex flex-col">
              <p className="font-bold text-6xl text-white">20</p>
              <p className="text-lg font-medium text-white">Years Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="stroke-white h-10 w-10" />
            <div className="flex flex-col">
              <p className="font-bold text-6xl text-white">1000+</p>
              <p className="text-lg font-medium text-white">Happy Clients</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="stroke-white h-10 w-10" />
            <div className="flex   flex-col">
              <p className="font-bold text-6xl text-white">2000+</p>
              <p className="text-lg font-medium text-white">
                Completed Projects
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us  */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:flex-1 w-full md:w-1/2 shrink-0 relative h-[360px] md:h-auto">
          <Image
            src="/assets/medium-shot-colleagues-working-office.jpg"
            className="object-cover absolute shrink-0"
            fill
            alt="Team  discussing performance"
          />
        </div>
        <div className="flex-1 md:w-1/2 px-4 md:pl-10 py-16 ">
          <div className="flex items-center flex-col justify-center">
            <div className="lg:pr-[80px] xl:pr-[100px] 2xl:pr-[160px] 3xl:pr-[240px] 4xl:pr-[300px]">
              <h2 className="text-xs md:text-sm uppercase font-bold text-[#0423A0] mb-3">
                Why Choose us
              </h2>
              <h3 className="text-2xl md:text-5xl font-bold text-monochrome  text-left mb-3">
                Innovative, Secure, and Scalable IT Services Tailored for You
              </h3>
              <p className="text-sm md:text-base mb-4">
                At Soft Solutions Technologies, we combine innovation,
                expertise, and customer-centric approaches to deliver
                exceptional IT solutions.
              </p>
            </div>
          </div>
          <div className="md:pr-[80px] 2xl:pr-[120px] 3xl:pr-[180px] 4xl:pr-[300px]">
            {why_choose_us.map((item) => (
              <WhyChooseUsCard key={item.id} item={item} />
            ))}
          </div>
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
                centeredSlides: true
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
                spaceBetween: 80,
              },
              1536: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
            }}
            className="flex justify-center items-center flex-row w-full"
          >
            {[...testimonials, ...testimonials].map((testimony, index) => (
              <SwiperSlide key={index} className="">
                <div className="pt-20 pb-16">
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
                <div className="flex justify-center items-center pt-6 pb-16">
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
