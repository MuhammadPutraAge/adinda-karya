import { client } from "@/sanity/lib/client";
import SectionTitle from "../common/SectionTitle";
import { GET_BEST_SELLER_FURNITURES } from "@/sanity/lib/queries/furnitures";
import FurnitureCard from "../common/FurnitureCard";
import { urlFor } from "@/sanity/lib/image";
import { formatPrice } from "@/lib/utils";

export default async function BestSellerFurnitures() {
  const bestSellerFurnitures = await client.fetch(GET_BEST_SELLER_FURNITURES);

  return (
    <section className="mb-40">
      <SectionTitle
        title="Best Selling Furnitures"
        description="Elevate your living space with customer favorites, combining unmatched
        comfort and timeless style."
      />

      <div className="grid grid-cols-4 gap-4">
        {bestSellerFurnitures.map((furniture) => (
          <FurnitureCard
            key={furniture.slug?.current}
            cover={urlFor(furniture.cover || "").url()}
            name={furniture.name || ""}
            price={formatPrice(furniture.price || 0)}
            slug={furniture.slug?.current || ""}
          />
        ))}
      </div>
    </section>
  );
}
