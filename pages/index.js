import Head from "next/head";
import CustomLink from "../components/CustomLink";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import CustomImage from "../components/CustomImage";
import HeroImage from "../public/images/hero.png";
import Instagram from "../public/images/instagram.png";

export default function Home() {
  const [isActive, setIsActive] = useState(1);

  const Categories = [
    { id: 1, title: "Client project" },
    { id: 2, title: "Clone" },
    { id: 3, title: "Design" },
  ];

  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}
      className='flex flex-col h-screen bg-white font-custom'>
      <Head>
        <title>Omar Ouhra - Front End Developer </title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* Navbar */}
      <nav>
        <NavBar />
      </nav>
      <main className='max-w-[1000px] mx-auto flex-col space-y-12 md:space-y-24 px-4 md:px-6'>
        {/* Hero section */}

        <section className='mt-12 flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-between md:items-start'>
          <div className='lg:w-2/3'>
            <h1 className=' text-xl md:text-2xl lg:text-4xl font-bold leading-loose  md:leading-normal lg:leading-normal'>
              Hey There! I'm <span className='text-lightBlue'>Omar</span>. Front
              End Developer & Digital Content Creator.
            </h1>
            <p className=' text-sm  mt-4 leading-normal md:leading-loose  md:text-base  text-gray-800 font-light '>
              I am 22 years old from Morocco. My mission is to scale up your Web
              presence with high problem-solving skills and a huge passion for
              design. User interfaces with meaningful UX are what I strongly
              master!
            </p>
            <div className='flex space-x-6 mt-6'>
              <CustomLink title='ABOUT ME' link='/aboutMe' />
              <CustomLink title='MY RESUME' link='#' />
            </div>
          </div>
          <div className='relative w-52 h-52 '>
            <CustomImage
              image={HeroImage.src}
              alt='Hero Image'
              className='rounded-full'
            />
          </div>
        </section>

        {/* status section */}
        <section className='flex flex-col lg:space-y-0 lg:flex-row  lg:justify-between '>
          <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 '>
            <div>
              <p className='statusTitle'>CURRENTLY</p>
              <p className='text-sm font-light lg:w-2/3 '>
                Freelance Front End Dev, Content creator at W&S
              </p>
            </div>
            <div>
              <p className='statusTitle'>ON THE SIDE</p>
              <p className='text-sm font-light lg:w-2/3'>
                Finishing my last year of software enginnering
              </p>
            </div>
            <div>
              <p className='statusTitle'>LEARINING ABOUT</p>
              <p className='text-sm font-light '>React Native</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}

        <section>
          <div>
            <h2 className='title'>My Skills</h2>
            <p className='text-sm  mt-4 leading-normal md:leading-loose   md:text-base  text-gray-800 font-light  md:w-4/5'>
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
          <p className='text-sm  mt-6 lg:mt-12 leading-normal md:leading-loose  sm:w-4/5 md:w-3/5 md:text-base  text-gray-800 font-light  '>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I've
            dedicated my time to.
          </p>
          <div className='flex space-x-4 lg:space-x-12 mt-8 '>
            {Categories.map(filter => (
              <div key={filter.id}>
                <button
                  onClick={() => {
                    setIsActive(filter.id);
                  }}
                  className={
                    isActive === filter.id
                      ? "filter text-black  transitions"
                      : "filter text-gray-300 transitions"
                  }>
                  {filter.title}
                </button>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-16 lg:my-20'>
            {/* {Projects.map(project =>
              project.type.id === isActive ? (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: transition,
                  }}>
                  <Project
                    image={
                      project.image
                        ? `http://localhost:1337${project.image.url}`
                        : null
                    }
                    imageAlt={project.image ? project.image.name : null}
                    title={project.title}
                    description={project.description}
                    link={`/${project.id}`}
                  />
                </motion.div>
              ) : null
            )} */}
          </div>
        </section>

        {/* Work Process Section */}

        <section className=' flex flex-col space-y-12 lg:flex-row lg:space-y-0  lg:items-center lg:justify-between'>
          <div className='lg:w-1/2'>
            <p className='text-xs text-blue-500'>
              {" "}
              Want to know what is like to work with me?{" "}
            </p>
            <h2 className='title'>Its a mix of these things.</h2>
          </div>

          <img
            src='http://localhost:1337/uploads/process_00fbc4eb3c.gif'
            alt='process gif'
            className='lg:w-1/2'
          />
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
              link='https:www.instagram.com/omar.code'
              newTab
            />
          </div>
          <div className='h-60 w-full md:w-1/2'>
            <div className='relative w-full  h-60'>
              <CustomImage image={Instagram.src} alt='Instagram image' className='object-contain' />
            </div>
          </div>
        </section>

      {/* Footer */}

      <Footer />
      </main>

     
    </motion.div>
  );
}
