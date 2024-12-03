import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen px-40 pt-40">{children}</main>
    </>
  );
}
