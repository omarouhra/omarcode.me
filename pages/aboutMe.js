import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import { motion } from "framer-motion";
import CustomLink from "../components/CustomLink";

function aboutMe() {
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

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
      <NavBar />
      <main className='flex-col space-y-12 md:space-y-24 '>
        <div>
          <div className='mt-12 lg:mt-0'>
            <CustomLink link='/' title='← Go Back' />
          </div>
          <h2 className=' mt-8 text-xl md:text-2xl lg:text-3xl font-bold'>
            {" "}
            About Me
          </h2>
          <p className=' text-sm  mt-4 leading-normal md:leading-loose  md:text-base  text-gray-700 font-normal '>
            Hello! If you're wondering who's the person behind this work, then
            this section is made for you! Let me just tell you that I am exactly
            like you at this point, I am always curious about what's behind the
            professional serious image of any project owner. The branding
            content is always perfectly curated, and this makes a lot of sense!
            That's why I considered this space to be just me, OMAR, your new
            friend! Well.. I was born in Morocco in Agadir city. I grew up
            hating school. I could be wrong but I still have the same feeling! I
            adore creating beautiful things and sense the pride and the passion
            to share them. I'm a fan of minimalism! Next to coding and managing
            my lovely project, I love music, calligraphy and coffee!
          </p>
        </div>
        <div className='flex flex-col space-y-6 lg:flex-row-reverse lg:justify-between lg:space-y-0 lg:items-center'>
          <div className='lg:w-1/2'>
            <h2 className='title mt-4 lg:mt-12'>The logo</h2>
            <p className='text-sm  mt-4 leading-normal md:leading-loose  md:text-base  text-gray-700 font-normal  '>
              I really enjoy drawing things and creating new ideas that's why I
              choose to create a logo using Islamic calligraphy if you wondering
              this is my name in Arabic calligraphy and I add code word below it
              to give personality and meaning as you can see in this timelapse ,
            </p>
          </div>
          <div className='  h-[600px] '>
            <video autoPlay loop muted className='h-full shadow-2xl rounded-lg'>
              <source src='/timelap.mp4' />
            </video>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}

export default aboutMe;
