import React, { useEffect, useState } from "react";
import Container from "./Container";
import MaxWidth from "./MaxWidth";

function Hero() {
  const [title, setTitle] = useState(0);

  const TITLES = ["Moroccan", "Muslim", "Creative"];
  useEffect(() => {
    setTimeout(() => {
      if (title < 2) {
        setTitle(title + 1);
      } else {
        setTitle(0);
      }
    }, 3000);
  }, [title]);

  return (
    <MaxWidth>
      <Container>
        <div className="my-12 ">
          <p className="font-extralight">سلام عليكم</p>
          <div className="my-3 space-y-2">
            <h1 className="text-2xl font-extralight md:text-4xl">
              I&apos;m <span className="font-semibold">Omar Ouhra</span>!
            </h1>
            <h2 className="text-2xl font-extralight  md:text-4xl duration-300">
              A{" "}
              {
                <div className="inline-block  text-center ">
                  {title == 0 && (
                    <p className="animate-fade-in-up">{TITLES[title]}</p>
                  )}
                  {title == 1 && (
                    <p className="animate-fade-in-up">{TITLES[title]}</p>
                  )}
                  {title == 2 && (
                    <p className="animate-fade-in-up">{TITLES[title]}</p>
                  )}
                </div>
              }{" "}
              Frontend Engineer at Obytes.
            </h2>
          </div>
          <p className="text-sm font-light dark:text-brand_gray">
            User interfaces with meaningful UX are what I strongly master!
          </p>
        </div>
      </Container>
    </MaxWidth>
  );
}

export default Hero;
