import React, { ReactNode } from "react";

type TMaxWidth = {
  children: ReactNode;
};

function MaxWidth({ children }: TMaxWidth) {
  return <div className="mx-auto max-w-4xl">{children}</div>;
}

export default MaxWidth;
