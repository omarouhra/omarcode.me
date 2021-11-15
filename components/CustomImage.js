import Image from "next/image";

function CustomImage({ image, alt }) {
  return <Image src={image} alt={alt} layout='fill' />;
}

export default CustomImage;
