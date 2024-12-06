import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="mb-6 grid min-h-[340px] w-full grid-cols-5 gap-6">
      <div className="relative col-span-3 flex flex-col justify-center rounded-lg bg-lightSage p-10">
        <p className="text-base font-medium">Making Your Home Beautiful</p>
        <h2 className="mb-5 max-w-96 text-3xl font-bold">
          Build Your Home With Beautiful Furniture
        </h2>
        <div>
          <Link
            href={ROUTES.SHOP}
            className="rounded-sm bg-darkSage px-6 py-3 text-[13px] font-medium text-light hover:bg-darkSage/90"
          >
            Shop Now
          </Link>
        </div>

        <Image
          className="absolute bottom-0 right-0 size-80 overflow-hidden"
          src="/armchair.svg"
          alt="eterna armchair"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="relative col-span-2 flex flex-col items-center rounded-lg bg-lightSage pt-10">
        <p className="text-base font-medium">Limited Time Offer</p>
        <h3 className="mb-1 text-2xl font-bold">Comfortable Sofa</h3>
        <p className="text-sm font-medium">Discover Now</p>
        <Image
          className="absolute bottom-0 left-0 w-full"
          src="/sofa-promo.svg"
          alt="comfortable sofa"
          width={366}
          height={196}
          priority
        />
      </div>
    </section>
  );
}
