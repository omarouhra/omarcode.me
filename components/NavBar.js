function NavBar() {
  return (
    <div className='flex w-full justify-between p-4   md:py-8  max-w-screen-xl mx-auto'>
      <img
        className='w-8 md:w-10'
        src={`${process.env.HOST}uploads/logo_40373f9c4b.png`}
        alt='logo'
      />

      <div className='flex space-x-4 items-center '>
        <a href='https://www.instagram.com/omar.code/'>
          <img
            width={20}
            src='https://www.svgrepo.com/show/83715/instagram-logo.svg'
            alt='instagram icon'
          />
        </a>
        <a href='https://www.linkedin.com/in/omar-ouhra-886143209/'>
          <img
            width={20}
            src='https://www.svgrepo.com/show/16193/linkedin-logo.svg'
            alt='Linkedin icon'
          />
        </a>
        <a href='https://github.com/omarouhra'>
          <img
            width={20}
            src='https://www.svgrepo.com/show/341847/github.svg'
            alt='github icon'
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
