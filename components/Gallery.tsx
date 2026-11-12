export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-white mb-8 text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-surface rounded-lg overflow-hidden">
            <img src="/images/photo-1.jpg" alt="Fresh Fade" className="w-full h-64 object-contain" />
            <div className="p-4">
              <h3 className="text-xl font-heading text-white mb-2">Fresh Fade</h3>
              <p className="text-muted">Clean, modern fade executed with precision.</p>
            </div>
          </div>
          <div className="bg-surface rounded-lg overflow-hidden">
            <img src="/images/stock-2.jpg" alt="Beard Grooming" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-heading text-white mb-2">Beard Grooming</h3>
              <p className="text-muted">Professional beard shaping and styling.</p>
            </div>
          </div>
          <div className="bg-surface rounded-lg overflow-hidden">
            <img src="/images/stock-3.jpg" alt="Barber Shop Interior" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-heading text-white mb-2">Barber Shop Interior</h3>
              <p className="text-muted">A welcoming atmosphere for your grooming experience.</p>
            </div>
          </div>
          <div className="bg-surface rounded-lg overflow-hidden">
            <img src="/images/stock-4.jpg" alt="Haircut Techniques" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-heading text-white mb-2">Haircut Techniques</h3>
              <p className="text-muted">Mastering the art of the perfect haircut.</p>
            </div>
          </div>
          <div className="bg-surface rounded-lg overflow-hidden">
            <img src="/images/stock-5.png" alt="Barber Tools" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-heading text-white mb-2">Barber Tools</h3>
              <p className="text-muted">High-quality tools for precise grooming.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
