import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

interface Props {
  cover: string;
  name: string;
  price: string;
  slug: string;
}

export default function FurnitureCard({ cover, name, price, slug }: Props) {
  return (
    <Link href={ROUTES.PRODUCT_DETAIL(slug)}>
      <div className="flex-center aspect-square rounded-lg bg-lightSage p-8">
        <Image
          src={cover}
          alt={name}
          width={220}
          height={220}
          className="size-full"
        />
      </div>
      <p className="mt-4 text-center text-lg font-medium lg:text-xl">{name}</p>
      <p className="text-center text-grey lg:text-lg">{price}</p>
    </Link>
  );
}
