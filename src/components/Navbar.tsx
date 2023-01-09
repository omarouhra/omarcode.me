import LogoIcon from "@/icons/LogoIcon";
import { linkSync } from "fs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MaxWidth from "./MaxWidth";

function Navbar() {
  const { pathname } = useRouter();

  const LINKS = [
    { label: "GitHub", href: "https://github.com/omarouhra" },
    { label: "Linkedin", href: "https://www.linkedin.com/in/omar-ouhra" },
    { label: "Youtube", href: "https://www.youtube.com/@omarouhra" },
  ];

  return (
    <MaxWidth>
      <div className="flex items-center justify-between py-12 px-5 md:py-20 xl:px-0">
        <LogoIcon />

        <div
          className="space-x-5 
        "
        >
          {LINKS?.map((link, index) => (
            // <Link
            //   key={index}
            //   href={link.href}
            //   className={` ${
            //     pathname === link.href
            //       ? "dark:text-white"
            //       : "text-brand_gray dark:text-brand_gray/40 dark:hover:text-white "
            //   }  text-sm duration-200 md:text-base`}
            // >
            //   {link.label}
            // </Link>
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm duration-200  md:text-base"
            >
              <span className="text-gray-400 hover:text-black">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
}

export default Navbar;
