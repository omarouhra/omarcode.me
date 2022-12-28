import LogoIcon from "@/icons/LogoIcon";
import { linkSync } from "fs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MaxWidth from "./MaxWidth";

function Navbar() {
  const { pathname } = useRouter();

  const LINKS = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
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
            <Link
              key={index}
              href={link.href}
              className={` ${
                pathname === link.href
                  ? "dark:text-white"
                  : "text-brand_gray dark:text-brand_gray/40 dark:hover:text-white "
              }  text-sm duration-200 md:text-base`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
}

export default Navbar;
