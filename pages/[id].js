import CustomLink from "../components/CustomLink";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Project from "../components/Project";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function page({ projects, project }) {
  const [isOpen, setIsOpen] = useState(1);

  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

  const otherPosts = projects.filter(
    article => article.id != project.id && article.type.id === project.type.id
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}>
      <Head>
        <title>{project.title} page</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <NavBar />

      <main>
        {/* Project Hero */}
        <section className='max-w-screen-xl mx-auto flex flex-col px-4 lg:px-12   justify-center items-start mt-20 lg:mt-32'>
          <CustomLink link='/' title='←' big />

          <h2 className='big-title mt-4 lg:mt-12'>{project.title}</h2>
          <p className=' text-sm  mt-12 leading-loose lg:leading-loose sm:w-4/5 md:w-4/5 md:text-base  text-gray-500 font-light '>
            {project.content}
          </p>
        </section>

        {/* Status Section */}

        <section className='max-w-screen-xl mx-auto px-4 lg:px-12 mt-24 grid lg:grid-cols-4 space-y-12 lg:space-y-0  lg:space-x-6 '>
          <div>
            <p className='statusTitle'>ROLE</p>
            <p className='text-base font-light lg:w-2/3 '>{project.role}</p>
          </div>
          <div>
            <p className='statusTitle'>DEV STACK</p>
            <ul className='text-base  font-light lg:w-2/3'>
              {/* <RichTextEditor value={project.devStack} /> */}
            </ul>
          </div>
          <div>
            <p className='statusTitle'>LIVE</p>
            <CustomLink
              link={project?.live}
              title='View Site'
              important
              newTab
            />
          </div>
          {project.repo ? (
            <div>
              <p className='statusTitle'>CODE</p>
              <CustomLink link='#' title='Repository' important />
            </div>
          ) : null}
        </section>

        {/* Project image  */}

        <section className='max-w-screen-xl mx-auto flex justify-center my-24 px-4'>
          <div className='w-[800px] '>
            {project.preview ? (
              <img
                src={`http://localhost:1337${project.preview.url}`}
                alt={project?.preview.name}
              />
            ) : null}
          </div>
        </section>

        {/* Project Details Section */}
        <section className='max-w-screen-lg mx-auto px-4 my-12 md:px-12   lg:my-56 space-y-12 lg:space-y-24'>
          {/* Client review */}
          <div>
            <h2 className='title'>
              What The Client Thinks
            </h2>

            <p className='text-2xl font-semibold   mt-4 '>💫</p>

            <p className=' text-xs mt-4  leading-loose lg:leading-loose max-w-2xl md:text-base  font-light '>
              {project.review}
            </p>
            <p className='mt-2 text-sm '>{project.ceo}</p>
          </div>
          <div className='lg:grid lg:grid-cols-2 gap-12 lg:gap-24'>
            {/* Project Goals*/}
            <div>
              <h2 className='title'>
                Project's Goal
              </h2>

              <div>
                <p className=' text-xs  mt-4  leading-loose lg:leading-loose max-w-2xl md:text-base font-light '>
                  {project.review}
                </p>
              </div>
            </div>

            {/* Toolset*/}
            <div>
              <h2 className='title'>Toolset</h2>

              <div>
                <p className=' text-xs  mt-4  leading-loose lg:leading-loose max-w-2xl md:text-base font-light '>
                  {project.toolset}
                </p>
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h2 className='title'>Challenges</h2>

              <div>
                <p className=' text-xs  mt-4  leading-loose lg:leading-loose max-w-2xl md:text-base font-light '>
                  {project.challenges}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Project Section */}

        <section className='max-w-screen-xl mx-auto px-4 mt-32  md:px-12   lg:my-56 '>
          <h2 className='title'>Other projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-12 lg:my-20'>
            {otherPosts.map(project => (
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
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className=' max-w-screen-xl mx-auto px-4 md:px-12 mt-24    lg:mt-24 w-full'>
        <Footer />
      </footer>
    </motion.div>
  );
}

export default page;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const post = await axios.get(`http://localhost:1337/posts/${id}`);
  const posts = await axios.get("http://localhost:1337/posts");

  return {
    props: {
      project: post.data,
      projects: posts.data,
    },
  };
}
