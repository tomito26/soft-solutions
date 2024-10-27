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
    <nav className="flex justify-between items-center py-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] 3xl:px-[120px] 4xl:px-[200px] 5xl:px-[300px]">
      <div className="relative h-[60px] w-[180px]">
        <Image
          src="/assets/soft-solutions.svg"
          fill
          alt="Soft Solutions Technologies logo"
          className="absolute object-cover"
        />
      </div>
      <ul className="flex items-center space-x-10">
        {links.map(({ title, subLink, link }) =>
          link ? (
            <li key={title} className="inline-block">
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
                    "cursor-pointer p-0 border-none outline-none w-full relative flex items-center justify-center transition-all",
                  )}
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                >
                  <div className="flex items-center gap-x-2">
                    <span className="text-base font-medium text-[#0423A0]">{title}</span>
                    <ChevronDown
                      className={cn(
                        "transition-transform duration-200 stroke-[#0423A0]",
                        menuOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[180px] rounded-t-none -mt-1 left-0 -bottom-11">
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
        <Button className="shrink-0 hover:bg-[#0423A0]/90">Contact Us</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
