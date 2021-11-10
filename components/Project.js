import CustomLink from "./CustomLink";

function Project({ image, imageAlt, title, description }) {
  return (
    <div className='group'>
      <div className=' max-w-xs   rounded-lg lg:group-hover:shadow-xl  lg:transitions '>
        <img src={image} alt={imageAlt} />
      </div>

        <h1 className='font-bold uppercase text-base lg:text-xl tracking-widest my-4 lg:my-8'>
          {title}
        </h1>
        <p className='text-sm  text-gray-500 my-4 max-w-xs '>{description}</p>
        <CustomLink title='VIEW PROJECT' link='/page' />
    </div>
  );
}

export default Project;
