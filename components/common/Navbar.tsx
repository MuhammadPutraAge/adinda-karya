import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SearchFurnitures from "./SearchFurnitures";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  return (
    <nav className="flex-between sticky left-0 top-0 z-50 w-full bg-light px-40 py-4">
      <Link href={ROUTES.HOME}>
        <Image src="/logo.svg" alt="Adinda Karya Logo" width={56} height={56} />
      </Link>

      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((navLink) => (
          <li key={navLink.url}>
            <Link href={navLink.url} className="text-base font-medium">
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <Suspense>
          <SearchFurnitures />
        </Suspense>
        <Link href={ROUTES.CART}>
          <Image src="/icons/cart.svg" alt="search" width={24} height={24} />
        </Link>
        <Image src="/icons/profile.svg" alt="search" width={24} height={24} />
      </div>
    </nav>
  );
}
