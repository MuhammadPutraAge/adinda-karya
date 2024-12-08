import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="wrapper mt-14 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
