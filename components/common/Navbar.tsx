import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SearchFurnitures from "./SearchFurnitures";
import { NAV_LINKS } from "@/constants";
import UserDropdown from "./UserDropdown";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <nav className="flex-between wrapper sticky left-0 top-0 z-50 w-full bg-light py-4">
      <Link href={ROUTES.HOME}>
        <Image
          src="/logo.svg"
          alt="Adinda Karya Logo"
          width={56}
          height={56}
          className="size-12 sm:size-14"
        />
      </Link>

      <ul className="hidden items-center gap-8 lg:flex">
        {NAV_LINKS.map((navLink) => (
          <li key={navLink.url}>
            <Link href={navLink.url} className="text-base font-medium">
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden items-center gap-6 lg:flex">
        <Suspense>
          <SearchFurnitures />
        </Suspense>
        <Link href={ROUTES.CART}>
          <Image src="/icons/cart.svg" alt="search" width={24} height={24} />
        </Link>
        <UserDropdown />
      </div>

      <Sidebar />
    </nav>
  );
}
