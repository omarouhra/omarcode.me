import CustomLink from "./CustomLink";
import NavBar from "./NavBar";

function Footer() {
  return (
    <footer>
      <div className='my-12 lg:mb-0 lg:mt-24'>
        <div className='mb-12'>
          <h2 className='title'>Now about your project !</h2>
          <p className='text-sm font-normal  my-8 md:text-base'>
            I’m currently{" "}
            <span className='text-lightBlue font-bold'>available</span>
          </p>

          <p className='text-sm font-normal my-8 md:text-base text-gray-800  leading-loose '>
            Looking for a developer? Let's work together and empower your
            business.
            <br /> Another option appears to be a question or a DM to connect!
          </p>
          <CustomLink
            title='hi@omarcode.me'
            important
            link='mailto:hi@omarcode.me'
          />
        </div>
        <NavBar />
      </div>
    </footer>
  );
}

export default Footer;
