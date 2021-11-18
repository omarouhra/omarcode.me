import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";

function Project({ image, imageAlt, title, description, link }) {
  return (
    <div className='group'>
      <div className=' relative w-60 h-60   lg:group-hover:shadow-xl  lg:transitions '>
        <CustomImage image={image} alt={imageAlt} className='rounded-md' />
      </div>

      <h1 className='font-bold uppercase text-base lg:text-xl tracking-widest my-4 lg:my-8'>
        {title}
      </h1>
      <p className='text-sm  text-gray-500 my-4 max-w-xs text-justify	'>{description}</p>
      <CustomLink title='VIEW PROJECT' link={link} />
    </div>
  );
}

export default Project;
