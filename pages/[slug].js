import CustomLink from "../components/CustomLink";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Project from "../components/Project";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

function page({ frontmatter: { title }, slug, content }) {
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

  // const otherPosts = projects.filter(
  //   article => article.id != project.id && article.type.id === project.type.id
  // );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}>
      <Head>
        <title> page</title>
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

          <h2 className='big-title mt-4 lg:mt-12'>{title} hek</h2>
        </section>
      </main>

      {/* Footer */}

      <Footer />
    </motion.div>
  );
}

export default page;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
