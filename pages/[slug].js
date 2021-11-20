import CustomLink from "../components/CustomLink";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Project from "../components/Project";
import { motion } from "framer-motion";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import CustomImage from "../components/CustomImage";
import { RoughNotation } from "react-rough-notation";

function page({
  projects,
  frontmatter: { title, preview, paragraph, role, live, repo, category },
  slug,
  content,
}) {
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };
  const otherPosts = projects.filter(
    article =>
      article.frontmatter.title != title &&
      article.frontmatter.category === category
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}
      className='flex flex-col h-screen  max-w-[900px] mx-auto px-4 md:px-12 lg:px-0 antialiased'>
      <Head>
        <title> {title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <NavBar />

      <main className='flex-col space-y-12 md:space-y-24 '>
        {/* Project Hero */}

        <section>
          <div className='mt-12 lg:mt-0'>
            <CustomLink link='/' title='← Go Back' />
          </div>
          <h2 className=' mt-8 text-xl md:text-2xl lg:text-3xl font-bold'>
            <RoughNotation
              type='highlight'
              show={true}
              color={"#FFAD95"}
              animationDuration={1200}>
              {title}
            </RoughNotation>
          </h2>

          <p className='text text-justify	'>{paragraph}</p>
          <div className='flex flex-col lg:space-y-0 lg:flex-row  lg:justify-between mt-12 '>
            <div className='flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-12  lg:items-center'>
              <div className='lg:w-38'>
                <p className='statusTitle'>ROLE</p>
                <p className='text-sm lg:pt-1 font-semibold '>{role}</p>
              </div>
              <div>
                <p className='statusTitle'>LIVE</p>
                <CustomLink link={live} title='View Site' newTab />
              </div>

              {repo ? (
                <div>
                  <p className='statusTitle'>CODE</p>
                  <CustomLink link={repo} title='Git Repo' newTab />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[1200px]'>
          <CustomImage image={preview} alt={title} className='object-contain' />
        </div>
        <div
          className='markdown'
          dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        <div>
          
          <h2 className='title'>Other Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-16 lg:my-20'>
            {otherPosts.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
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
                  link={`/${project.slug}`}
                  soon={project.frontmatter.soon ? true : false}
                />
              </motion.div>
            ))}
          </div>
        </div>
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
      frontmatter,
      slug,
      content,
      projects,
    },
  };
}
