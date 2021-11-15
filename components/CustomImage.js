import Image from "next/image";

function CustomImage({ image, alt, className }) {
  return <Image src={image} alt={alt} layout='fill' className={className} />;
}

export default CustomImage;
