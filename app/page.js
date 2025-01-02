import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function HomePage() {
  return (
    <>
      <header className="welcome">
        <h1 className="welcome-text">WELCOME TO</h1>
        <h1 className="highway">The</h1>
        <h1 className="highway">Highway</h1>
        <h1 className="bistro">Bistro</h1>
      </header>
      <div className="image-container-1">
        <Image src="/burger.png" alt="Burger" width={1920} height={1080} />
        <Link href="/signIn">
          <button className="btn">Order Now</button>
        </Link>
      </div>
    </>
  );
}
