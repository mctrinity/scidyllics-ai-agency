import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">SciDyllics</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
