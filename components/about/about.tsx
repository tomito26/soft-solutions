"use client";
import { our_partners, philosophies, values } from "@/lib/constants";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContactUsForm } from "../forms/contact-us-form";

const About = () => {
  return (
    <div>
      <div className="flex relative h-[60vh] w-full items-center">
        <Image
          src="/assets/professionals-explaining-corporate-software-details.jpg"
          alt="collegues smiling"
          fill
          className="absolute object-cover object-center"
        />
        <div className="w-full flex  items-center z-10 h-full bg-[#0423A0]/75  px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div className="w-full md:w-8/12">
            <h1 className="font-bold text-3xl md:text-6xl text-white pb-6">
              About Us
            </h1>
            <p className="md:text-base text-sm flex items-center text-white">
              Home <ChevronRight className="h-6 w-6 stroke-white" /> About
            </p>
          </div>
        </div>
      </div>
      {/* {/* who we are */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 px-4  md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] pt-12 pb-32">
        <div className="w-full">
          <div className="w-full md:w-[600px] h-[240px]  md:h-[418px] relative">
            <Image
              src="/assets/people-office-work-day (1).jpg"
              fill
              alt=""
              className="absolute object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xs md:text-sm uppercase font-bold text-[#0423A0] mb-4">
            About Us
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold text-monochrome mb-4">
            Empowering Businesses Through Innovative Solutions
          </h3>
          <p className="mb-3 text-sm md:text-base">
            We are a dynamic team of IT professionals committed to delivering
            innovative technology solutions that empower businesses to thrive in
            a fast-paced digital world.
          </p>
          <p className="text-sm md:text-base">
            With expertise spanning system design, web and app development,
            cloud storage, software development, IT consulting, data management,
            cyber security, and networking solutions, we provide end-to-end IT
            services tailored to meet the unique needs of our clients.
          </p>
        </div>
      </div>
      {/* our philosophies  */}
      <div className="bg-[#0423A0]/10 md:px-[40px] px-4 lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] pt-16 pb-32 flex items-center justify-center flex-col">
        <div className="w-full md:w-8/12">
          <h2 className="md:text-sm text-xs uppercase font-bold text-[#0423A0] mb-4 text-center">
            our philosophies
          </h2>
          <h3 className="text-2xl md:text-5xl text-center font-bold text-monochrome mb-4">
            Commitment to Innovation, Quality, and Collaboration
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 rounded-2xl">
          {philosophies.map((philosophy) => (
            <div
              key={philosophy.title}
              className="bg-white px-6 py-4 flex justify-center items-center flex-col"
            >
              <div className="h-12 w-12 bg-[#0423A0] rounded-full flex justify-center items-center mb-4">
                {<philosophy.icon className="stroke-white h-6 w-6" />}
              </div>
              <h3 className="md:text-xl text-lg font-bold text-monochrome text-center mb-3">
                {philosophy.title}
              </h3>
              <p className="text-tundora font-normal text-sm md:text-base">
                {philosophy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* our values */}
      <div className="md:px-[40px] lg:px-[80px] px-4 xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] py-20 pb-32">
        <div className="flex justify-center items-center flex-col">
          <div className="w-full md:w-8/12">
            <h2 className="text-xs md:text-sm text-center uppercase font-bold text-[#0423A0] mb-4">
              our values
            </h2>
            <h3 className="text-2xl md:text-5xl font-bold text-monochrome mb-6 text-center">
              Guiding Principles That Define Our Mission and Inspire Our Team
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, indx) => (
              <div key={value.title} className="flex  gap-3">
                <h3 className="text-[#0423A0] font-bold text-base md:text-3xl">
                  0{indx + 1}
                </h3>
                <div>
                  <h3 className="md:text-xl text-lg font-bold text-monochrome">
                    {value.title}
                  </h3>
                  <p className="text-tundora font-normal text-sm  md:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* our clients / */}
      <div className="md:px-[60px]  px-4 lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]   pb-32 flex justify-center flex-col items-center">
        <div className="md:w-8/12">
          <h2 className="text-xs md:text-sm uppercase font-bold text-[#0423A0] mb-3 text-center">
            our clients
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold text-monochrome text-center mb-3">
            Trusted by Industry Leaders
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
      {/* { contact us } */}
      <div className="px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] w-full  pb-32 flex  gap-12 md:flex-row flex-col">
        <div className="w-full flex-1">
          <ContactUsForm />
        </div>
        <div className="flex-1">
          <h2 className="text-xs md:text-sm uppercase  font-bold text-[#0423A0] mb-2">
            Need any help?
          </h2>
          <h3 className="text-monochrome text-2xl md:text-5xl font-bold mb-3">
            Get in touch with us
          </h3>
          <p>
            Got questions, ideas, or feedback? Let&apos;s connect! Whether
            you&apos;re curious about our services, have a project in mind, or
            just want to say hello, we&apos;re here for you. Reach out through
            our contact info or drop us a message, our team is ready to assist
            and explore how we can work together.
          </p>
          <div>
            <div className="mt-6 flex items-center gap-6">
              <div className="bg-[#0423A0] rounded-sm flex justify-center items-center flex-col h-16 w-16">
                <Phone className="h-8 w-8 stroke-white" />
              </div>
              <div>
                <p className="text-sm md:text-base font-bold mb-4">
                  Have any question?
                </p>
                <p className="text-sm md:text-base font-normal">
                  +254796108651
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <div className="bg-[#0423A0] rounded-sm flex justify-center items-center flex-col h-16 w-16">
                <Mail className="h-8 w-8 stroke-white" />
              </div>
              <div>
                <p className="text-sm md:text-base font-bold mb-4">
                  Write email
                </p>
                <p className="text-sm md:text-base font-normal">
                  info@softsolutions.com
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <div className="bg-[#0423A0] rounded-sm flex justify-center items-center flex-col h-16 w-16">
                <MapPin className="h-8 w-8 stroke-white" />
              </div>
              <div>
                <p className="text-sm md:text-base font-bold mb-4">
                  Visit anytime
                </p>
                <p className="text-sm md:text-base font-normal">
                  westlands, Nairobi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
