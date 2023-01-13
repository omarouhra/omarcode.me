import LogoIcon from "@/icons/LogoIcon";
import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MaxWidth from "./MaxWidth";

function Navbar() {
  const { pathname } = useRouter();

  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;



  return (
    <MaxWidth>
      <div className="flex items-center justify-between py-12 px-5 md:py-20 xl:px-0">
        <Link href="/">
          <LogoIcon />
        </Link>

        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          type="button"
          className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </MaxWidth>
  );
}

export default Navbar;
