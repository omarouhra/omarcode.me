import type { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useState } from "react";

type ImageProps = {
  alt: string;
  imgSrc: StaticImageData | string | any;
  className?: string;
  priority?: boolean;
  blur?: boolean;
};

function CustomImage({
  alt,
  imgSrc,
  className,
  priority,
  blur = true,
}: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      layout="fill"
      objectFit="cover"
      priority={priority}
      className={`
    ${className} duration-500 ease-in-out
      ${
        blur &&
        (isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0")
      }
    `}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default CustomImage;
