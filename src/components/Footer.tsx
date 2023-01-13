import Logo from "@/icons/LogoIcon";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { LINKS } from "../data/links";

function Footer() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between space-y-12 md:flex-row md:space-y-0 ">
        <Logo color="gray" />
        <div className="space-x-3">
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
              className="text-xs duration-200  md:text-sm"
            >
              <span className="text-gray-400 hover:text-black dark:hover:text-white">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <p className="text-sm font-light text-gray-400 mt-12 text-center">
        Built with Next.js,Tailwind and Vercel
      </p>
    </Container>
  );
}

export default Footer;
