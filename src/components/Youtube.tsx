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
    title:
      "Build a cool link component animation using Next.js and tailwindcss",
    link: "https://www.youtube.com/watch?v=BtOXeKZknys&ab_channel=OmarOuhra",
    time: "2:42",
  },
  {
    title:
      "Build a cool link component animation using Next.js and tailwindcss",
    link: "https://www.youtube.com/watch?v=BtOXeKZknys&ab_channel=OmarOuhra",
    time: "2:42",
  },
  {
    title:
      "Build a cool link component animation using Next.js and tailwindcss",
    link: "https://www.youtube.com/watch?v=BtOXeKZknys&ab_channel=OmarOuhra",
    time: "7:42",
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
            className={` mb-5 flex items-center justify-between ${
              index === 3
                ? "border-none"
                : "border-b dark:border-gray-400 border-gray-200"
            } pb-3  text-sm duration-200 hover:scale-[1.02] md:text-base`}
            href={link}
          >
            <div className="flex items-center space-x-4">
              <YoutubeIcon />
              <p>{title}</p>
            </div>
            <span className="text-gray-400">{time}</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Youtube;
