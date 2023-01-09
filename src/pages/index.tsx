import Hero from "@/components/Hero";
import type { NextPage } from "next";
import MaxWidth from "@/components/MaxWidth";
import Projects from "@/components/Projects";
import Youtube from "@/components/Youtube";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <MaxWidth>
      <Hero />
      <Projects />
      <Youtube />
      <Footer />
    </MaxWidth>
  );
};

export default Home;
