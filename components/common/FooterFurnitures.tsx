import ROUTES from "@/constants/routes";
import { formatPrice } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { GET_FOOTER_LATEST_FURNITURES } from "@/sanity/lib/queries/furnitures";
import Image from "next/image";
import Link from "next/link";

export default async function FooterFurnitures() {
  const furnitures = await client.fetch(GET_FOOTER_LATEST_FURNITURES);

  return (
    <div className="flex flex-col gap-4">
      {furnitures.map((furniture) => (
        <Link
          href={ROUTES.PRODUCT_DETAIL(furniture.slug?.current || "")}
          key={furniture.slug?.current}
          className="flex items-center gap-4"
        >
          <div className="flex-center size-16 rounded bg-lightSage p-2">
            <Image
              src={urlFor(furniture.cover || "").url()}
              alt={furniture.name || ""}
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="font-medium">{furniture.name}</p>
            <p className="font-medium text-grey">
              {formatPrice(furniture.price || 0)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
