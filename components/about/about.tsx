import { our_partners, philosophies, values } from "@/lib/constants";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(4, 35,160, 0.66), rgba(4,35,160, 0.66)), url('/assets/professionals-explaining-corporate-software-details.jpg')",
          height: "40vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[100px] 3xl:px-[120px] 4xl:px-[200px] 5xl:px-[300px]"
      >
        <div className="w-8/12">
          <h1 className="font-bold text-6xl text-white pb-6">About Us</h1>
        </div>
      </div>
      {/* {/* who we are */}
      <div className="flex items-center gap-10 px-[300px] pt-12 pb-32">
        <div>
          <div className="w-[600px] h-[418px] relative">
            <Image
              src="/assets/people-office-work-day (1).jpg"
              fill
              alt=""
              className="absolute"
            />
          </div>
        </div>
        <div>
          <h2 className="text-sm uppercase font-bold text-[#0423A0] mb-4">
            About Us
          </h2>
          <h3 className="text-5xl font-bold text-monochrome mb-4">
            Empowering Businesses Through Innovative Solutions
          </h3>
          <p className="mb-3">
            We are a dynamic team of IT professionals committed to delivering
            innovative technology solutions that empower businesses to thrive in
            a fast-paced digital world.
          </p>
          <p>
            With expertise spanning system design, web and app development,
            cloud storage, software development, IT consulting, data management,
            cyber security, and networking solutions, we provide end-to-end IT
            services tailored to meet the unique needs of our clients.
          </p>
        </div>
      </div>
      {/* our philosophies  */}
      <div className="bg-[#0423A0]/10 px-[300px] pt-16 pb-32 flex items-center justify-center flex-col">
        <div className="w-8/12">
          <h2 className="text-sm uppercase font-bold text-[#0423A0] mb-4 text-center">
            our philosophies
          </h2>
          <h3 className="text-5xl text-center font-bold text-monochrome mb-4">
            Commitment to Innovation, Quality, and Collaboration
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-8 rounded-2xl">
          {philosophies.map((philosophy) => (
            <div
              key={philosophy.title}
              className="bg-white px-6 py-4 flex justify-center items-center flex-col"
            >
              <div className="h-12 w-12 bg-[#0423A0] rounded-full flex justify-center items-center mb-4">
                {<philosophy.icon className="stroke-white h-6 w-6" />}
              </div>
              <h3 className="text-xl font-bold text-monochrome text-center mb-3">
                {philosophy.title}
              </h3>
              <p className="text-tundora font-normal text-base">
                {philosophy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* our values */}
      <div className="px-[300px] py-20 pb-32">
        <div className="flex justify-center items-center flex-col">
          <div className="w-7/12">
            <h2 className="text-sm text-center uppercase font-bold text-[#0423A0] mb-4">
              our values
            </h2>
            <h3 className="text-5xl font-bold text-monochrome mb-6 text-center">
              Guiding Principles That Define Our Mission and Inspire Our Team
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {values.map((value, indx) => (
              <div key={value.title} className="flex gap-3">
                <h3 className="text-[#0423A0] font-bold text-3xl">
                  0{indx + 1}
                </h3>
                <div>
                  <h3 className="text-xl font-bold text-monochrome">
                    {value.title}
                  </h3>
                  <p className="text-tundora font-normal">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* our clients / */}
      <div className="px-[300px] py-16 pb-32">
        <div>
          <h2 className="text-sm text-center uppercase font-bold text-[#0423A0] mb-4">
            our clients
          </h2>
          <h3 className="text-5xl font-bold text-monochrome mb-6 text-center">
            Trusted by Industry Leaders
          </h3>
        </div>
        <div className="grid grid-cols-4">
          {our_partners.map((client) => (
            <div key={client.id} className="h-[156px] w-[240px] relative">
              <Image
                src={client.logo}
                alt={client.partner}
                fill
                className="absolute object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
