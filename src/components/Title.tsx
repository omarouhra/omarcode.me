import Link from "next/link";
import React from "react";

type TTitle = {
  title: string;
  label?: string;
  href?: string;
};

function Title({ title, label, href }: TTitle) {
  return (
    <div>
      <p className="text-2xl md:text-3xl mb-3">{title}</p>
      {href && (
        <Link
          className=" dark:text-brand_gray/60 dark:hover:text-white duration-200 text-sm md:text-base"
          href={href}
        >
          {label}
        </Link>
      )}
    </div>
  );
}

export default Title;
