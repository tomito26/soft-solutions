import { links } from "@/lib/constants";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#0423A0] px-4 md:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]  py-32 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-20">
        <div className="col-span-4">
          <h2 className="text-2xl font-bold text-white mb-3">
            Soft Solutions Technologies
          </h2>
          <p className="text-base mb-3 text-white">
            It is an IT solutions company specializing in system design, web and
            app development, cloud storage, and various other IT services.
          </p>
          <p className="text-base text-white">Nairobi, Kenya</p>
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-3 text-white">Important Links</h2>
          <ul>
            {links.map(
              (link) =>
                link.link && (
                  <li key={link.title}>
                    <Link
                      className="text-base text-white mb-1"
                      href={link.link}
                    >
                      {link.title}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="col-span-3">
          <h2 className="text-xl font-bold text-white">Our Services</h2>
          <ul>
            {links
              .filter((link) => link.subLink && link?.subLink.length > 0)[0]
              .subLink?.map((link, index) => (
                <li key={index}>
                   <Link
                      className="text-base text-white mb-1"
                      href={link.link}
                    >
                      {link.title}
                    </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <Phone className="h-6 w-6 stroke-white shrink-0" />
            <div>
              <h2 className="text-base font-bold text-white">
                Main Support Line
              </h2>
              <p className="text-base underline text-white">+254712070289</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Mail className="h-6 w-8 stroke-white shrink-0" />
            <div>
              <h2 className="text-base font-bold text-white">
                General Enquiries
              </h2>
              <p className="text-base underline text-white">
                Info@softsolutions.com
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href="#">
              <div className="w-10 h-10 border group border-white hover:bg-white cursor-pointer  rounded-full flex justify-center items-center">
                <Facebook className="stroke-white group-hover:stroke-[#0423A0] h-4 w-4" />
              </div>
            </Link>
            <Link href="#">
              <div className="w-10 h-10 hover:bg-white group border border-white rounded-full flex justify-center items-center">
                <Instagram className="group-hover:stroke-[#0423A0] stroke-white h-4 w-4" />
              </div>
            </Link>
            <Link href="#">
              <div className="w-10 h-10 hover:bg-white border-white border group  rounded-full flex justify-center items-center">
                <Linkedin className="group-hover:stroke-[#0423A0] stroke-white h-4 w-4" />
              </div>
            </Link>
            <Link href="#">
              <div className="w-10 h-10 hover:bg-white border border-white group rounded-full flex justify-center items-center">
                <Twitter className="group-hover:stroke-[#0423A0] stroke-white h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-base text-white">
        Copyright © 2024 Soft Solutions Technologies® | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
