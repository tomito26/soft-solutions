import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/lib/constants";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 pl-[300px] pr-[300px]">
      <div className="relative h-[60px] w-[180px]">
        <Image
          src="/assets/soft-solutions.svg"
          fill
          alt="Soft Solutions Technologies logo"
          className="absolute object-cover"
        />
      </div>
      <ul className="block">
        {links.map((link) => (
          <>
            <li key={link.title} className="inline-block pl-10">
              <Link
                href={link.link}
                className="text-base font-medium text-[#0423A0]"
              >
                {link.title}
              </Link>
            </li>
          </>
        ))}
        <Button className="ml-10">Contact Us</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
