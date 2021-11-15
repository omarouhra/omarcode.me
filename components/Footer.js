import CustomLink from "./CustomLink";
import NavBar from "./NavBar";

function Footer() {
  return (
    <footer>
      <div className='mb-8 md:mb-10 lg:mb-12'>
        <div className='mb-12'>
          <h2 className='title'>Now about your project !</h2>
          <p className='text-sm font-light  my-8 md:text-base'>
            I’m currently{" "}
            <span className='text-blue-500 font-bold'>available</span>
          </p>

          <p className='text-sm font-light  my-8 md:text-base text-gray-800  leading-loose '>
            Looking for a developer? Let's work together and empower your
            business.
            <br /> Another option appears to be a question or a DM to connect!
          </p>
          <CustomLink title='omar@omarcode.me' important link='#' />
        </div>
        <NavBar />
      </div>
    </footer>
  );
}

export default Footer;
