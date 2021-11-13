import Image from "next/image";
function CustomImage({ img, width, height, className, fill }) {
  if (!img.filename) {
    return null;
  }

  let dimensions = {
    width: img?.filename?.split("/")[5].split("x")[0],
    height: img?.filename?.split("/")[5].split("x")[1],
  };

  return (
    <Image
      src={img.filename ? img.filename : img}
      height={fill ? null : height ? height : dimensions.height}
      width={fill ? null : width ? width : dimensions.width}
      className={className}
      layout={fill ? "fill" : ""}
      alt={img?.alt ? img.alt : "Default alt"}
     
    />
  );
}

export default CustomImage;
