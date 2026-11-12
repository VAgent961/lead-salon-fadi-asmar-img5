import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/stock-1.jpg)' }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-heading text-white mb-6">Precision Grooming in the Heart of Chouf</h1>
        <p className="text-xl md:text-2xl text-muted mb-8">Expert cuts and traditional care for the modern man.</p>
        <Link href="#location" className="bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
          Visit us in Chouf
        </Link>
      </div>
    </section>
  );
}
