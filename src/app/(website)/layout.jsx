import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import FloatingBar from "@/components/shared/FloatingBar";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
        <main className="pt-13">
          {children}
          <FloatingBar/>
        </main>
      <Footer />
    </>
  );
}