import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import logo from "../public/images/logo.png";

function NavBar() {
  return (
    <div className='flex w-full justify-between mt-12 px-4 md:px-6 lg:mt-4  md:py-8  max-w-screen-lg mx-auto'>
      <CustomLink
        link='/'
        icon={
          <div className='relative w-12 h-12 lg:w-16 lg:h-16'>
            <CustomImage image={logo.src} alt='logo omar code' />
          </div>
        }></CustomLink>

      <div className='flex space-x-4 items-center '>
        <CustomLink
          newTab
          link='https:www.instagram.com/omar.code'
          icon={
            <img
              width={20}
              src='https://www.svgrepo.com/show/83715/instagram-logo.svg'
              alt='instagram icon'
            />
          }></CustomLink>
        <CustomLink
          newTab
          link='https://www.linkedin.com/in/omar-ouhra-886143209/'
          icon={
            <img
              width={20}
              src='https://www.svgrepo.com/show/16193/linkedin-logo.svg'
              alt='Linkedin icon'
            />
          }></CustomLink>

        <CustomLink
          newTab
          link='https://github.com/omarouhra'
          icon={
            <img
              width={20}
              src='https://www.svgrepo.com/show/341847/github.svg'
              alt='github icon'
            />
          }></CustomLink>
      </div>
    </div>
  );
}

export default NavBar;
