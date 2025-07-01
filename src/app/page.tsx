import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import ImageGallery from "@/components/ImageGallery";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Kitchen from "@/components/Kitchen";

export default function Home() {
  return (
    <>
    <main className="flex-grow">
      <Header/>
      <Content/>
      <Kitchen/>
      <ImageGallery />
      <Testimonials />
      <Blog />
    </main>
    <Footer/>
    </>
  );
}
