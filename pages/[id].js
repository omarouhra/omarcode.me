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
        <section className='max-w-screen-lg mx-auto px-4 my-12 md:px-12  lg:px-24 lg:my-56 space-y-12 lg:space-y-24'>
          {/* Client review */}
          <div
            onClick={() => setIsOpen(1)}
            className={
              isOpen === 1 ? "info-container-active " : "info-container"
            }>
            <div className='flex items-center justify-between'>
              <h2 className='font-semibold uppercase text-lg'>
                What The Client Thinks
              </h2>
              <img
                className={
                  isOpen === 1
                    ? "w-6 transform rotate-180 fill-current  text-white transitions "
                    : "w-6 transform rotate-90 transitions "
                }
                src='https://www.svgrepo.com/show/83803/up-arrow.svg'
                alt='logo'
              />
            </div>
            <div
              className={
                isOpen === 1 ? "inline transitions " : "hidden transitions"
              }>
              <p className='text-2xl  mt-4 lg:mt-12'>💫</p>

              <p className=' text-xs  mt-4  leading-loose lg:leading-loose max-w-2xl md:text-base  text-gray-50 font-light '>
                {project.review}
              </p>
              <p className='mt-8 text-sm '>{project.ceo}</p>
            </div>
          </div>

          {/* Project Goals*/}
          <div
            onClick={() => setIsOpen(2)}
            className={
              isOpen === 2 ? "info-container-active " : "info-container"
            }>
            <div className='flex items-center justify-between'>
              <h2 className='font-semibold uppercase text-lg'>
                Project's Goal
              </h2>
              <img
                className={
                  isOpen === 2
                    ? "w-6 transform rotate-180 fill-current  text-white transitions "
                    : "w-6 transform rotate-90 transitions "
                }
                src='https://www.svgrepo.com/show/83803/up-arrow.svg'
                alt='logo'
              />
            </div>
            <div
              className={
                isOpen === 2 ? "inline transitions " : "hidden transitions"
              }>
              <p className=' text-xs  mt-4  leading-loose lg:leading-loose max-w-2xl md:text-base  text-gray-50 font-light '>
                {project.review}
              </p>
            </div>
          </div>

          {/* Toolset*/}
          <div
            onClick={() => setIsOpen(3)}
            className={
              isOpen === 3 ? "info-container-active " : "info-container"
            }>
            <div className='flex items-center justify-between'>
              <h2 className='font-semibold uppercase text-lg'>Toolset</h2>
              <img
                className={
                  isOpen === 3
                    ? "w-6 transform rotate-180 fill-current  text-white transitions "
                    : "w-6 transform rotate-90 transitions "
                }
                src='https://www.svgrepo.com/show/83803/up-arrow.svg'
                alt='logo'
              />
            </div>

            <div
              className={
                isOpen === 3 ? "inline transitions " : "hidden transitions"
              }>
              <p className=' text-xs  mt-4  leading-loose lg:leading-loose max-w-2xl md:text-base  text-gray-50 font-light '>
                {project.toolset}
              </p>
            </div>
          </div>

          {/* Challenges */}
          <div
            onClick={() => setIsOpen(4)}
            className={
              isOpen === 4 ? "info-container-active " : "info-container"
            }>
            <div className='flex items-center justify-between'>
              <h2 className='font-semibold uppercase text-lg'>Challenges</h2>
              <img
                className={
                  isOpen === 4
                    ? "w-6 transform rotate-180 fill-current  text-white transitions "
                    : "w-6 transform rotate-90 transitions "
                }
                src='https://www.svgrepo.com/show/83803/up-arrow.svg'
                alt='logo'
              />
            </div>
            <div
              className={
                isOpen === 4 ? "inline transitions " : "hidden transitions"
              }>
              <p className=' text-xs  mt-4  leading-loose lg:leading-loose max-w-2xl md:text-base  text-gray-50 font-light '>
                {project.challenges}
              </p>
            </div>
          </div>
        </section>

        {/* Other Project Section */}

        <section className='max-w-screen-xl mx-auto px-4 mt-32  md:px-12  lg:px-24 lg:my-56 '>
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
      <footer className=' max-w-screen-xl mx-auto px-4 md:px-12 mt-24  lg:px-24  lg:mt-24 w-full'>
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
