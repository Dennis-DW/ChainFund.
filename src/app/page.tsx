import {
  Header,
  Hero,
  About,
  ProductShowcase,
  Testimonials,
  Faq,
  CallToAction,
  Footer
} from '@/sections/LandingP'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProductShowcase />
      <Testimonials />
      <Faq/>
      <CallToAction />
      <Footer />
    </>
  );
}
