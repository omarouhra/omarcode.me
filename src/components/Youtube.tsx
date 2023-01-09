import YoutubeIcon from "@/icons/YoutubeIcon";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import Title from "./Title";

const VIDEOS = [
  {
    title:
      "Build a cool link component animation using Next.js and tailwindcss",
    link: "https://www.youtube.com/watch?v=BtOXeKZknys&ab_channel=OmarOuhra",
    time: "2:42",
  },
  {
    title: "Top React packages for Frontend development",
    link: "https://www.youtube.com/watch?v=h9yCuVsf0TU&ab_channel=OmarOuhra",
    time: "4:44",
  },
  {
    title:
      "Learn Framer Motion by building a hero section using Next.js, Tailwindcss and Vercel ⭐",
    link: "https://www.youtube.com/watch?v=_H-FCO7CrA8&ab_channel=OmarOuhra",
    time: "8:35",
  },
  {
    title:
      "Build a minimal portfolio with Atomic Design using Next.js, Tailwindcss, Typescript and Vercel",
    link: "https://www.youtube.com/watch?v=nC3XioFWgGA&ab_channel=OmarOuhra",
    time: "6:03",
  },
];

function Youtube() {
  return (
    <Container>
      <Title
        title="Watch Youtube Content"
        label="Watch all videos >"
        href="https://www.youtube.com/@omarouhra"
        blank={true}
      />

      <div className="my-12">
        {VIDEOS.map(({ title, link, time }, index) => (
          <Link
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={` mb-5 flex items-start justify-between md:items-center ${
              index === 3
                ? "border-none"
                : "border-b border-gray-200 dark:border-gray-500"
            } group space-x-1  text-ellipsis pb-3 text-sm duration-200 hover:scale-[1.01] md:text-base`}
            href={link}
          >
            <div className="flex items-start space-x-4 pr-2 md:items-center">
              <div>
                <YoutubeIcon />
              </div>
              <p>{title}</p>
            </div>
            <span className="text-gray-400 group-hover:text-black dark:group-hover:text-white">
              {time}
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Youtube;
