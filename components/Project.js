import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";

function Project({ image, imageAlt, title, description, link, soon }) {
  return (
    <div className='group'>
      <div className=' relative w-60 h-60   lg:group-hover:shadow-xl rounded-lg lg:transitions '>
        <CustomImage
          image={image}
          alt={imageAlt}
          className='rounded-md object-contain'
        />
      </div>

      <h1 className='font-bold uppercase text-base lg:text-xl tracking-widest my-4 lg:my-8'>
        {title}
      </h1>
      <p className='text-sm  text-gray-500 my-4 max-w-xs	'>{description}</p>
      {soon ? (
        <p className='text-sm font-bold text-blue-500'>Coming Soon</p>
      ) : (
        <CustomLink title='VIEW PROJECT' link={link} />
      )}
    </div>
  );
}

export default Project;
