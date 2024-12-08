import {
  STORE_LOCATIONS,
  SOCIAL_MENUS,
  IMPORTANT_LINKS,
  TOP_CATEGORIES,
} from "@/constants";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FooterLink from "./FooterLink";
import FooterFurnitures from "./FooterFurnitures";

export default function Footer() {
  return (
    <footer className="bg-light">
      <div className="wrapper grid grid-cols-4 gap-6 border border-dark/25 py-11">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Image src="/logo.svg" alt="Adinda Karya" width={60} height={60} />
            <h3 className="text-2xl font-medium">
              Adinda <span className="text-darkSage">Karya.</span>
            </h3>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <MapPin color="#2F3645" width={20} height={20} />
            <p className="font-medium">Our Store Locations</p>
          </div>

          <ul>
            {STORE_LOCATIONS.map((storeLocation) => (
              <li key={storeLocation} className="mb-1 text-grey">
                {storeLocation}
              </li>
            ))}
          </ul>
        </div>

        <FooterLink title="Important Links" links={IMPORTANT_LINKS} />

        <FooterLink title="Top Categories" links={TOP_CATEGORIES} />

        <div className="p-5">
          <p className="text-lg font-medium">Latest Furnitures</p>
          <div className="mb-4 h-1 w-11 rounded-full bg-darkSage" />

          <FooterFurnitures />
        </div>
      </div>

      <div className="flex-between wrapper py-6">
        <p className=" text-darkSage">
          &copy; 2025 Adinda Karya. All Rights Reserved.
        </p>

        <div className="flex items-center gap-2">
          <p className=" text-darkSage">Follow Us:</p>
          {SOCIAL_MENUS.map((socialMenu) => (
            <Link key={socialMenu.iconSrc} href={socialMenu.url}>
              <Image
                src={socialMenu.iconSrc}
                alt={socialMenu.alt}
                width={16}
                height={16}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
