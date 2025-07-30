import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import ImageGallery from "@/components/ImageGallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Kitchen from "@/components/Kitchen";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
    <main className="flex-grow">
      <Header/>
      <Hero/>
      <Content/>
      <Kitchen/>
      <ImageGallery />
      <Testimonials />
      <BlogSection />
    </main>
    <Footer/>
    </>
  );
}
