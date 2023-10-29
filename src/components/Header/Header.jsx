import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <Link href="/"><h1>myPortfolio</h1></Link>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/photogallery">Photo Gallery</Link>
        <Link href="/study">Study</Link>
      </nav>
    </header>
  )
}
