import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-40 pt-36">{children}</main>
    </>
  );
}
