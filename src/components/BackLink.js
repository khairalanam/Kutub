import Link from "next/link";

export default function BackLink({ children, href }) {
  return (
    <Link href={href} suppressHydrationWarning>
      ⬅️&nbsp;&nbsp;
      <span className="underline hover:no-underline">{children}</span>
    </Link>
  );
}
