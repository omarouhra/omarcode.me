import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import AnimateContainer from "@/components/AnimateContainer";
import { useRouter } from "next/router";
import MaxWidth from "@/components/MaxWidth";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="h-screen w-full bg-white dark:bg-gradient-to-r  dark:from-brand_purple_dark  dark:to-brand_purple">
        <Navbar />
        <AnimatePresence mode="wait">
          <AnimateContainer key={pathname}>
            <Component {...pageProps} />
          </AnimateContainer>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
