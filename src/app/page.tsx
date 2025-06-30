import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";

export default function Home() {
  return (
    <>
    <main className="flex-grow">
      <Header/>
      <Content/>
      </main>
      <Footer/>
    </>
  );
}
