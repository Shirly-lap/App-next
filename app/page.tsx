import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
          <h1>HOME</h1>
          <Link href="/about-us">About Us</Link>
          <br />
          <Link href="/contact">Contact</Link>
          <br />
          <Link href="/hero">Hero</Link>
    </>

  );
}

