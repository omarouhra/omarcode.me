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
          className="inline-block text-sm font-light text-gray-600 duration-200 dark:text-brand_gray/60 dark:hover:text-white md:text-base"
          href={href}
        >
          <p className="duration-300 hover:translate-x-1">{label}</p>
        </Link>
      )}
    </div>
  );
}

export default Title;
