import LogoIcon from "@/icons/LogoIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import MaxWidth from "./MaxWidth";

function Navbar() {
  const { pathname } = useRouter();

  return (
    <MaxWidth>
      <div className="flex items-center justify-between py-12 px-5 md:py-20 xl:px-0">
        <LogoIcon />

              <div className="space-x-5 
        ">
          <Link
            href="/"
            className={` ${
              pathname === "/"
                ? "dark:text-white"
                : "text-brand_gray dark:text-brand_gray/40 dark:hover:text-white "
            }  text-sm duration-200 md:text-base`}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={` ${
              pathname === "/work"
                ? "dark:text-white"
                : "text-brand_gray dark:text-brand_gray/40 dark:hover:text-white"
            }  text-sm duration-200 md:text-base`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={` ${
              pathname === "/about"
                ? "dark:text-white"
                : "text-brand_gray dark:text-brand_gray/40 dark:hover:text-white"
            }  text-sm duration-200 md:text-base`}
          >
            About
          </Link>
        </div>
      </div>
    </MaxWidth>
  );
}

export default Navbar;
