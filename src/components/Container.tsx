import React, { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
};

function Container({ children }: TContainer) {
  return (
    <div className="px-5 py-8 md:py-10 lg:py-12 xl:px-0">{children}</div>
  );
}

export default Container;
