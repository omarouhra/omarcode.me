import CustomLink from "./CustomLink";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex w-full justify-between p-4   md:py-8  max-w-screen-xl mx-auto">
      <CustomLink
        link="/"
        icon={
          <img
            className="w-8 md:w-10"
            src={`${process.env.HOST}uploads/logo_40373f9c4b.png`}
            alt="logo"
          />
        }
      ></CustomLink>

      <div className="flex space-x-4 items-center ">
        <CustomLink
          link="https:www.instagram.com/omar.code"
          icon={
            <img
              width={20}
              src="https://www.svgrepo.com/show/83715/instagram-logo.svg"
              alt="instagram icon"
            />
          }
        ></CustomLink>
        <CustomLink
          link="https://www.linkedin.com/in/omar-ouhra-886143209/"
          icon={
            <img
              width={20}
              src="https://www.svgrepo.com/show/16193/linkedin-logo.svg"
              alt="Linkedin icon"
            />
          }
        ></CustomLink>

        <CustomLink
          link="https://github.com/omarouhra"
          icon={
            <img
              width={20}
              src="https://www.svgrepo.com/show/341847/github.svg"
              alt="github icon"
            />
          }
        ></CustomLink>
      </div>
    </div>
  );
}

export default NavBar;
