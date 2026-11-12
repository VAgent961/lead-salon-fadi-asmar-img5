import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';

export const metadata = {
  title: 'Salon Fadi Asmar | Professional Barber in Chouf',
  description: 'Experience precision grooming and modern haircuts at Salon Fadi Asmar, your local barbershop in the heart of Chouf.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Location />
    </>
  );
}
