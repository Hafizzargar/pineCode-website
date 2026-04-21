import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Products from '@/components/sections/Products';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/ui/Chatbot';

export default function Home() {
  return (
    <main className="relative">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Products />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
