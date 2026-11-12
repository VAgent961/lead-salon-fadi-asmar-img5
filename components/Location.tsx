export default function Location() {
  return (
    <section id="location" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-white mb-8 text-center">Visit Us in Chouf</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-muted text-center">
            We welcome you to visit our shop. Stop by for your next cut and experience professional service in a friendly, local atmosphere.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img src="/images/photo-1.jpg" alt="Salon Fadi Asmar Location" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
