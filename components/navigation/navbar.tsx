"use client";

import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
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
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const pathname = usePathname();

  // const handleDropdownToggle = (linkName: string) => {
  //   setOpenMenu(openMenu === linkName ? null : linkName);
  // };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center  flex-col md:flex-row  h-[92px] px-4 md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
      <div className="flex justify-between h-full w-full items-center">
        <div className="relative h-[50px] w-[160px] md:h-[60px] md:w-[180px]">
          <Image
            src="/assets/soft-solutions.svg"
            fill
            alt="Soft Solutions Technologies logo"
            className="absolute object-cover"
          />
        </div>
        <button
            className="md:hidden block mr-4"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-body-gray" />
            ) : (
              <Menu className="w-6 h-6 text-body-gray" />
            )}
          </button>
      </div>
      <ul className={cn(isMobileMenuOpen ? "flex items-center justify-center flex-col absolute md:relative top-[92px] md:top-0  space-y-10 md:space-y-0" :  "hidden md:flex"," items-center justify-center  md:space-x-10  md:relative md:flex-row  pb-4 md:pb-0 md:h-full z-50 bg-white w-full")}>
        {links.map(({ title, subLink, link }) =>
          link ? (
            <li key={title} className="inline-flex items-center h-full">
              <Link
                href={link}
                className={cn("text-base font-medium text-[#0423A0] hover:border-b-2 border-[#0423A0] px-1", pathname === link && "border-b-2")}
                onClick={() => handleLinkClick()}
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
                    "cursor-pointer p-0 border-none outline-none   relative flex items-center justify-center transition-all h-full"
                  )}
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                >
                  <div className="flex items-center justify-center flex-row gap-x-2 hover:border-b-2 border-[#0423A0] px-1">
                    <span className="text-base font-medium text-[#0423A0] inline-flex items-center">
                      {title}
                    </span>
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
                        <Link href={item.link} className="w-full" onClick={() =>handleLinkClick()}>
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
        <Button className="shrink-0 bg-[#00156B]  hover:bg-[#00156B]/90">
          Contact Us
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
