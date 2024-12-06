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
    <Link href={ROUTES.FURNITURE_DETAIL(slug)}>
      <div className="flex-center aspect-square rounded-md bg-lightSage">
        <Image src={cover} alt={name} width={180} height={180} />
      </div>
      <p className="mt-4 text-center text-xl font-medium">{name}</p>
      <p className="text-center text-lg text-grey">{price}</p>
    </Link>
  );
}
