import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

function aboutMe() {
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}>
      <NavBar />
      <main className='max-w-screen-xl mx-auto spacing  px-4 lg:px-12'>
        <h2 className='title'>About me</h2>
        <p className='text sm:w-4/5 md:w-3/5'>
          Hello! <br />
          if you're wondering who's the person behind this work, then this
          section is made for you! Let me just tell you that I am exactly like
          you at this point, I am always curious about what's behind the
          professional serious image of any project owner. The branding content
          is always perfectly curated, and this makes a lot of sense! That's why
          I considered this space to be just me, OMAR, your new friend!! Well..
          I was born in Morocco in a town called Agadir. And I grew up hating
          school 😂 . I could be wrong but I still have the same feeling! I
          adore creating beautiful things and sense the pride and the passion to
          share them. I'm a fan of minimalism! Next to coding and managing my
          lovely project, I love music, calligraphy and coffee!
        </p>
      </main>
      <Footer />
    </motion.div>
  );
}

export default aboutMe;
