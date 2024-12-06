import BestSellerFurnitures from "@/components/home/BestSellerFurnitures";
import CategoryList from "@/components/home/CategoryList";
import Header from "@/components/home/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <CategoryList />
      <BestSellerFurnitures />
    </>
  );
}
