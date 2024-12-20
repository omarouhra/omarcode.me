import Head from "next/head";
import CustomLink from "../components/CustomLink";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import { useState } from "react";
import { motion } from "framer-motion";
import CustomImage from "../components/CustomImage";
import HeroImage from "../public/images/omar.webp";
import Instagram from "../public/images/instagram.webp";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import processGif from "../public/images/gif.gif";
import { Howl } from "howler";
import { RoughNotation } from "react-rough-notation";

export default function Home({ projects }) {
  const [isActive, setIsActive] = useState(1);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isPlayAudio, setIsPlayAudio] = useState(false);
  const Categories = [
    { id: 1, title: "Client project" },
    { id: 2, title: "Clone" },
    { id: 3, title: "Web Apps" },
  ];
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };
  const sound = new Howl({
    src: "/audio.mp3",
    id: 1,
    onend: () => {
      setIsPlayAudio(false);
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}
      className='flex flex-col max-w-[900px] mx-auto px-4 md:px-12 lg:px-0 antialiased'>
      <Head>
        <title>Omar Ouhra - Front End Developer </title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* Navbar */}
      <nav>
        <NavBar />
      </nav>
      <main className=' flex-col space-y-12 md:space-y-24 '>
        {/* Hero section */}

        <section className='mt-12 flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:items-start'>
          <div className='lg:w-2/3'>
            <h1 className=' text-xl md:text-2xl lg:text-3xl font-bold leading-loose lg:text-justify	 md:leading-normal lg:leading-normal'>
              Hey There! I'm{" "}
              <RoughNotation
                type='highlight'
                show={true}
                color={"#FFAD95"}
                animationDuration={1200}>
                Omar Ouhra
              </RoughNotation>
              . Front End Developer & Digital Content Creator.
            </h1>

            <p className=' text-sm  mt-4 leading-normal 	 md:leading-loose  md:text-base text-justify	 text-gray-800 font-normal '>
              I am 25 years old from Morocco. My mission is to scale up your Web
              presence with high problem-solving skills and a huge passion for
              design. User interfaces with meaningful UX are what I strongly
              master!
            </p>
            <div className='flex space-x-6 mt-6'>
              <CustomLink title='ABOUT ME' link='/aboutMe' />
              <CustomLink title='MY RESUME' link='/cv.pdf' newTab />
            </div>
          </div>

          <div className='relative w-56 h-56 lg:-translate-y-4'>
            <CustomImage
              image={HeroImage.src}
              alt='Hero Image'
              className='rounded-full'
            />
            <button
              disabled={isPlayAudio}
              className='hidden md:inline absolute bottom-1 right-1 disabled:opacity-50  disabled:cursor-wait transitions'
              onClick={() => {
                sound.play();
                setIsPlayAudio(true);
              }}>
              <img
                src='https://www.svgrepo.com/show/6128/play-buton.svg'
                alt='play audio button'
                className='w-10 h-10 '
              />
            </button>
          </div>
        </section>

        {/* status section */}
        <section className='flex flex-col  lg:flex-row lg:justify-start space-y-8 lg:space-y-0  '>
          <div className='lg:w-1/3 '>
            <p className='statusTitle'>
              <RoughNotation
                type='box'
                show={true}
                color={"#FF7262"}
                animationDelay={1000}>
                CURRENTLY{" "}
              </RoughNotation>
            </p>
            <p className='text-sm '>
              Senior Frontend Engineer <br /> at{" "}
              <span className='font-extrabold text-orange animate-pulse'>
                Amigoscode
              </span>
            </p>
          </div>
          <div className='lg:w-1/3 '>
            <p className='statusTitle'>
              <RoughNotation
                type='box'
                show={true}
                color={"#FF7262"}
                animationDelay={1500}>
                ON THE SIDE{" "}
              </RoughNotation>
            </p>
            <p className='text-sm  lg:w-2/3'>
              Finishing my last year of software enginnering.
            </p>
          </div>
          <div className='lg:w-1/3 '>
            <p className='statusTitle'>
              <RoughNotation
                type='box'
                show={true}
                color={"#FF7262"}
                animationDelay={2000}>
                LEARINING ABOUT{" "}
              </RoughNotation>
            </p>
            <p className='text-sm  '>React Native.</p>
          </div>
        </section>

        {/* Skills Section */}

        <section>
          <div>
            <h2 className='title'>My Skills</h2>
            <p className='text-sm  mt-4 leading-normal md:leading-loose	 md:text-base text-justify	 text-gray-800 font-normal  md:w-4/5'>
              As a developer, I am convinced that the way to be successful in
              such a crowded market is to always LEARN. But far away from the
              basics, I have dedicated the Big Majority of my time to practice
              and real applications. I love challenging myself & my creativity.
              Originality is my thing!
            </p>
            <ul className='grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10 mt-8  font-bold text-sm md:text-base'>
              <li>
                <span className='text-lightBlue text-xl'>.</span> Javascript ES6
              </li>
              <li>
                <span className='text-lightBlue text-xl'>.</span> HTML/CSS
              </li>
              <li>
                <span className='text-lightBlue text-xl'>.</span> Headless CMS
              </li>
              <li>
                <span className='text-lightBlue text-xl'>.</span> Firebase
              </li>
              <li>
                <span className='text-lightBlue text-xl'>.</span> React.js /
                Redux
              </li>
              <li>
                <span className='text-lightBlue text-xl'>.</span> Next.js
              </li>
              <li>
                <span className='text-lightBlue text-xl'>.</span> Tailwindcss
              </li>
              <li>
                <span className='text-lightBlue text-xl'>.</span> Git
              </li>
            </ul>
          </div>
        </section>

        {/* Project Section */}
        <section className=''>
          <h2 className='title'>Recent Work </h2>
          <p className='text-sm  mt-6  leading-normal md:leading-loose text-justify	 sm:w-4/5 md:w-4/5 md:text-base  text-gray-800 font-normal  '>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I've
            dedicated my time to.
          </p>
          <div className='flex space-x-6 lg:space-x-12 mt-8 '>
            {Categories.map(filter => (
              <div key={filter.id}>
                <button
                  onClick={() => {
                    setIsActive(filter.id);
                    setIsAnimated(false);
                  }}
                  className={
                    isActive === filter.id
                      ? "filter text-black  transitions"
                      : `filter text-gray-400  transitions ${
                          isAnimated ? "animate-bounce" : null
                        }`
                  }>
                  {filter.title}
                </button>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-16 lg:my-20'>
            {projects.map((project, index) => (
              <>
                {project.frontmatter.category === isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: transition,
                    }}>
                    <Project
                      image={project.frontmatter.cover}
                      imageAlt={project.frontmatter.title}
                      title={project.frontmatter.title}
                      description={project.frontmatter.description}
                      link={
                        project.frontmatter.soon
                          ? project.frontmatter.live
                          : `/${project.slug}`
                      }
                      role={project.frontmatter.role}
                      soon={project.frontmatter.soon ? true : false}
                    />
                  </motion.div>
                ) : null}
              </>
            ))}
          </div>
        </section>

        {/* Work Process Section */}

        <section className=' flex flex-col  space-y-12 lg:flex-row lg:space-y-0  lg:items-center lg:justify-between'>
          <div className='lg:w-1/2'>
            <p className='text-sm lg:text-base text-blue-500'>
              {" "}
              Want to know what is like to work with me?{" "}
            </p>
            <h2 className='title'>Its a mix of these things.</h2>
          </div>
          <div className=' relative h-[250px] md:h-[400px]  md:w-1/2'>
            <CustomImage
              image={processGif}
              alt='process'
              className='object-contain'
            />
          </div>
        </section>

        {/* Instagram Section */}

        <section className='flex flex-col space-y-12 lg:flex-row lg:space-y-0 lg:spacex-12 lg:items-center lg:justify-between'>
          <div>
            <h2 className='title'>
              I’m a lot cooler on{" "}
              <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>
                Instagram
              </span>
            </h2>
            <CustomLink
              title='FOLLOW ME'
              link='https://www.instagram.com/omar.code/'
              newTab
            />
          </div>
          <div className='h-60 w-full md:w-1/2'>
            <div className='relative w-full  h-60'>
              <CustomImage
                image={Instagram.src}
                alt='Instagram image'
                className='object-contain'
              />
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}

      <Footer />
    </motion.div>
  );
}

export async function getStaticProps() {
  //  get files from projects directory
  const files = fs.readdirSync(path.join("projects"));

  // Get slug and frontmatter from posts
  const projects = files.map(filename => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      projects: projects,
    },
  };
}
