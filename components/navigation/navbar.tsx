"use client";

import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);


  return (
    <nav className="flex justify-between items-center flex-row h-[92px] px-4 md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
      <div className="relative h-[60px] w-[180px]">
        <Image
          src="/assets/soft-solutions.svg"
          fill
          alt="Soft Solutions Technologies logo"
          className="absolute object-cover"
        />
      </div>
      <ul className="md:flex items-center justify-center flex-row space-x-10 h-full hidden">
        {links.map(({ title, subLink, link }) =>
          link ? (
            <li key={title} className="inline-flex items-center h-full">
              <Link
                href={link}
                className="text-base font-medium text-[#0423A0]"
              >
                {title}
              </Link>
            </li>
          ) : (
            subLink &&
            subLink.length > 0 && (
              <DropdownMenu
                onOpenChange={() => setMenuOpen(!menuOpen)}
                open={menuOpen}
                key={title}
              >
                <DropdownMenuTrigger
                  className={cn(
                    "cursor-pointer p-0 border-none outline-none w-full relative flex items-center justify-center transition-all h-full",
                  )}
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                >
                  <div className="flex items-center justify-center flex-row gap-x-2 h-full">
                    <span className="text-base font-medium text-[#0423A0] inline-flex items-center h-full">{title}</span>
                    <ChevronDown
                      className={cn(
                        "transition-transform duration-200 stroke-[#0423A0]",
                        menuOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px] rounded-t-none -mt-1 left-0 -bottom-32">
                  {subLink.map((item) =>
                    item.link ? ( // Check if item.link exists
                      <DropdownMenuGroup key={item.title}>
                        <Link href={item.link} className="w-full">
                          <DropdownMenuItem className="cursor-pointer group">
                            <span className="text-[14px] font-[500] text-[#0423A0] ">
                              {item.title}
                            </span>
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                      </DropdownMenuGroup>
                    ) : null
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          )
        )}
        <Button className="shrink-0 bg-[#00156B]  hover:bg-[#00156B]/90">Contact Us</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
