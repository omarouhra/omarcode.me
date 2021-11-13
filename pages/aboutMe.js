import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import CustomLink from "../components/CustomLink";

function aboutMe() {
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}>
      <NavBar />
      <main className='max-w-screen-xl mx-auto spacing  px-4 lg:px-12'>
        <CustomLink link='/' title='←' big />
        <h2 className='big-title mt-4 lg:mt-12'>About me</h2>
        <p>the image here</p>
        <p className='text max-w-4xl '>
          Hello! <br />
          If you're wondering who's the person behind this work, then this
          section is made for you!
          <br /> Let me just tell you that I am exactly like you at this point,
          I am always curious about what's behind the professional serious image
          of any project owner. The branding content is always perfectly
          curated, and this makes a lot of sense! That's why I considered this
          space to be just me, OMAR, your new friend!!
          <br /> Well.. I was born in Morocco in Agadir city. I grew up hating
          school 😂 . I could be wrong but I still have the same feeling! I
          adore creating beautiful things and sense the pride and the passion to
          share them. I'm a fan of minimalism! Next to coding and managing my
          lovely project, I love music, calligraphy and coffee!
        </p>
        <h2 className='title mt-4 lg:mt-12'>The logo</h2>
        <p>the time lap go here </p>
        <p className='text max-w-4xl '>
          I really enjoy drawing things and creating new ideas that's why I
          choose to create a logo using Islamic calligraphy if you wondering
          what is this is my name in Arabic calligraphy and I add code word
          below it to give personality and meaning as you can see in this
          timelapse ,
        </p>
      </main>
      <Footer />
    </motion.div>
  );
}

export default aboutMe;
