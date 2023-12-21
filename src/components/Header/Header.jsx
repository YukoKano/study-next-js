import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <h1>Study</h1>
      </Link>
      <nav>
        <Link href="/study">Study</Link>
      </nav>
    </header>
  );
};
