import Head from "next/head";
import CustomLink from "../components/CustomLink";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home({ Projects, Categories }) {
  console.log(Projects[0]);
  const [isActive, setIsActive] = useState(4);

  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

  return (
    <div className='flex flex-col h-screen bg-white font-custom'>
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
      <main>
        {/* Hero section */}
        <section className='max-w-screen-xl mx-auto flex flex-col px-4 lg:px-12   justify-center items-start mt-36 lg:mt-40'>
          <h1 className=' text-xl md:text-3xl lg:text-5xl font-bold leading-loose md:w-4/5 lg:w-[80%] md:leading-normal lg:leading-normal'>
            Hey There! I'm <span className='text-lightBlue'>Omar</span> . Front
            End Developer & Digital Content Creator.
          </h1>
          <p className=' text-sm  mt-6 leading-normal sm:w-4/5 md:w-3/5 md:text-base  text-gray-500 font-light '>
            I am 22 years old from Morocco. My mission is to scale up your Web
            presence with high problem-solving skills and a huge passion for
            design. User interfaces with meaningful UX are what I strongly
            master!
          </p>

          <button className='font-semibold text-xs mt-8 lg:hover:text-lightBlue lg:hover:underline transition-all duration-500'>
            MY RESUME
          </button>
        </section>

        {/* status section */}
        <section className=' max-w-screen-xl mx-auto flex flex-col px-4 lg:px-12 mt-20 lg:mt-32 space-y-12 lg:space-y-0 lg:flex-row  lg:justify-between lg:space-x-6'>
          <div className='grid lg:grid-cols-3 space-y-12 lg:space-y-0  mlgspace-x-4 max-w-4xl lg:pt-24 '>
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
          <img
            src='http://localhost:1337/uploads/IMG_7549_2_c49750688e.JPG'
            alt='hero image'
            className='rounded-md w-[400px] lg:h-[650px] lg:hover:shadow-2xl   transitions z-40'
          />
        </section>

        {/* Skills Section */}

        <section className=' max-w-screen-xl mx-auto bg-gradient-to-r from-darkBlue to-blue-800 text-white py-40 px-6 md:px-12  lg:px-24 mt-12 lg:rounded-md shadow lg:mt-0 lg:-translate-y-44 '>
          <div className=' max-w-screen-xl mx-auto text-white rounded-md '>
            <h2 className='title'>My Skills</h2>
            <p className='text-sm font-light leading-normal my-8 md:text-base md:w-3/4'>
              As a developer, I am convinced that the way to be successful in
              such a crowded market is to always LEARN. But far away from the
              basics, I have dedicated the Big Majority of my time to practice
              and real applications. I love challenging myself & my creativity.
              Originality is my thing!
            </p>
            <ul className='grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-10 mt-12  font-bold'>
              <li>. Javascript ES6</li>
              <li>. HTML/CSS</li>
              <li>. Headless CMS</li>
              <li>. Firebase</li>
              <li>. React.js / Redux</li>
              <li>. Next.js</li>
              <li>. Tailwindcss</li>
              <li>. Git</li>
            </ul>
          </div>
        </section>

        {/* Project Section */}
        <section className=' max-w-screen-xl mx-auto px-4  md:px-12  lg:px-24 mt-12'>
          <h2 className='title'>Recent Work </h2>
          <p className='text-sm  mt-6 lg:mt-12 leading-normal sm:w-4/5 md:w-3/5 md:text-base lg:leading-relaxed  text-gray-500 font-light '>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I've
            dedicated my time to.
          </p>
          <div className='flex space-x-4 lg:space-x-12 mt-12 lg:mt-24'>
            {Categories.map(filter => (
              <div key={filter.id}>
                <button
                  onClick={() => {
                    setIsActive(filter.id);
                  }}
                  className={
                    isActive === filter.id
                      ? "filter text-black  transitions "
                      : "filter text-gray-300 transitions"
                  }>
                  {filter.title}
                </button>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-12 lg:my-20'>
            {Projects.map(project =>
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
            )}
          </div>
        </section>

        {/* Work Process Section */}

        <section className=' max-w-screen-xl mx-auto px-6 md:px-12  lg:px-24 my-12 lg:my-44 flex flex-col space-y-12 lg:flex-row lg:space-y-0  lg:items-center lg:justify-between'>
          <div>
            <p className='text-xs text-blue-500'>
              {" "}
              Want to know what is like to work with me?{" "}
            </p>
            <h2 className='title'>Its a mix of these things.</h2>
          </div>

          <img
            src='http://localhost:1337/uploads/process_00fbc4eb3c.gif'
            alt='hero image'
            className='lg:w-1/2'
          />
        </section>

        {/* Instagram Section */}

        <section className=' max-w-screen-xl mx-auto px-4 md:px-12  lg:px-24 mt-12 lg:my-44 flex flex-col space-y-12 lg:flex-row lg:space-y-0 lg:spacex12 lg:items-center lg:justify-between'>
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
          <img
            src='http://localhost:1337/uploads/insta_ad028358cd.png'
            alt='hero image'
            className='w-2/3 lg:w-1/2'
          />
        </section>
      </main>

      {/* Footer */}
      <footer className=' max-w-screen-xl mx-auto px-4 md:px-12  lg:px-24 mt-12 lg:my-24 w-full'>
        <Footer />
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await axios.get("http://localhost:1337/posts");
  const categories = await axios.get("http://localhost:1337/types");

  return {
    props: {
      Projects: posts.data,
      Categories: categories.data,
    },
  };
}
