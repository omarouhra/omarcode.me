import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-white font-custom'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* Navbar */}
      <NavBar />
      <main className=' px-2 md:px-6 '>
        {/* Hero section */}
        <section className='max-w-screen-xl mx-auto flex flex-col   justify-center items-start h-[500px] lg:h-[700px]'>
          <h1 className=' text-xl md:text-3xl lg:text-5xl font-bold leading-loose md:w-4/5 lg:w-[70%] md:leading-normal lg:leading-normal'>
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
        <section className=' max-w-screen-xl mx-auto flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-6'>
          <div className='grid lg:grid-cols-3 space-y-12 lg:space-y-0  lg:space-x-12'>
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
            className='rounded-md w-[400px] lg:h-[650px] lg:hover:shadow-2xl  transitions z-40'
          />
        </section>

        {/* Skills Section */}

        <section className=' max-w-screen-xl mx-auto bg-gradient-to-b from-darkBlue to-black text-white py-40 px-6 md:px-12  lg:px-24 mt-12 rounded-md shadow-2xl lg:mt-0 lg:-translate-y-12 '>
          <div className=' max-w-screen-xl mx-auto text-white rounded-md shadow-2xl '>
            <h2 className='text-xl md:text-2xl font-extrabold '>My Skills</h2>
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
      </main>
    </div>
  );
}
