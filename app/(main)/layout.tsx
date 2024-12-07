import Navbar from "@/components/common/Navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />

      <main className="mt-14 min-h-screen px-40">{children}</main>
    </>
  );
}
