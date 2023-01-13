import Link from "next/link";
import React from "react";

function error() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-4xl lg:text-8xl">404</p>
        <p className=" text-sm font-extralight lg:text-base">Page not found!</p>
      </div>
    </div>
  );
}

export default error;
