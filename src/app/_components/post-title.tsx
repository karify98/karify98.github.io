import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-8 mt-8 text-center md:text-left">
      {children}
    </h1>
  );
}
