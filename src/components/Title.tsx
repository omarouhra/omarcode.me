import Link from "next/link";
import React from "react";

type TTitle = {
  title: string;
  label?: string;
  href?: string;
  blank?: boolean;
};

function Title({ title, label, href, blank }: TTitle) {
  return (
    <div>
      <p className="mb-3 text-xl md:text-2xl">{title}</p>
      {href && (
        <Link
          target={blank ? "_blank" : "_parent"}
          rel="noopener noreferrer"
          className=" text-sm duration-200 dark:text-brand_gray/60 dark:hover:text-white md:text-base"
          href={href}
        >
          {label}
        </Link>
      )}
    </div>
  );
}

export default Title;
