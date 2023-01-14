import { PropsWithChildren } from "react";

export default function PageHeading({ children }) {
  return (
    <h3 className="text-6xl font-bold" suppressHydrationWarning>
      {children}
    </h3>
  );
}
