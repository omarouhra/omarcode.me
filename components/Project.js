import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import Link from "next/Link";

function Project({ image, imageAlt, title, description, link, soon, role }) {
  return (
    <Link href={link} className='group'>
      <a>
        <div className=' relative w-60 h-60   lg:group-hover:shadow-xl rounded-lg lg:transitions '>
          <CustomImage
            image={image}
            alt={imageAlt}
            className='rounded-md object-contain'
          />
        </div>

        <h1 className='font-bold uppercase text-base lg:text-xl tracking-widest mt-4 lg:mt-8'>
          {title}
        </h1>
        <p className='text-sm  text-gray-500 mt-4 max-w-xs	'>{description}</p>
        {soon && <span className='text-xs text-blue-500'>{role}</span>}

        {/* <CustomLink title='VIEW PROJECT' link={link} /> */}
      </a>
    </Link>
  );
}

export default Project;
