import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-surface shadow-card sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-bold text-primary">Salon Fadi Asmar</Link>
      </nav>
    </header>
  );
}
