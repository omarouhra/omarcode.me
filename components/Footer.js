import CustomLink from "./CustomLink";
import NavBar from "./NavBar";

function Footer() {
  return (
    <div>
      <div className="mb-36">
        <h2 className="title">Now about your project !</h2>
        <p className="text-sm font-light  my-8 md:text-base">
          I’m currently <span className="text-blue-500 font-bold">available</span>
        </p>

        <p className="text-sm font-light  my-8 md:text-base text-gray-500  leading-loose ">
          Feel free to reach out if you're looking for a developer,
          <br /> have a question, or just want to connect.
        </p>
        <CustomLink title="omar@omarcode.me" important={true} link='#' />
      </div>
      <NavBar />
    </div>
  );
}

export default Footer;
