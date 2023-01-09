import Logo from "@/icons/LogoIcon";
import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <Container>
      <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row items-center justify-between ">
        <Logo color="gray" />
        <p className="text-sm font-light text-gray-400">Built with Next.js,Tailwind and Vercel</p>
      </div>
    </Container>
  );
}

export default Footer;
