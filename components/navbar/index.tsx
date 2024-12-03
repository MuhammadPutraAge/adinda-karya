import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import SearchDialog from "../common/search-dialog";
import Navlinks from "./navlinks";

export default function Navbar() {
  return (
    <nav className="flex-between fixed w-full bg-light px-40 py-6">
      <Link href={ROUTES.HOME}>
        <Image src="/logo.svg" alt="Adinda Karya Logo" width={56} height={56} />
      </Link>

      <Navlinks />

      <div className="flex items-center gap-6">
        <SearchDialog />
        <Link href={ROUTES.CART}>
          <Image src="/icons/cart.svg" alt="search" width={24} height={24} />
        </Link>
        <Image src="/icons/profile.svg" alt="search" width={24} height={24} />
      </div>
    </nav>
  );
}
