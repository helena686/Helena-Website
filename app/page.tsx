import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import WhatIsSection from '@/components/WhatIsSection';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Stories from '@/components/Stories';
import FAQ from '@/components/FAQ';
import BookSection from '@/components/BookSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <WhatIsSection />
        <About />
        <Journey />
        <Stories />
        <FAQ />
        <BookSection />
      </main>
      <Footer />
    </>
  );
}
