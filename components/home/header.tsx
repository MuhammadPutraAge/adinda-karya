import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="mb-5 grid w-full grid-cols-1 gap-5 lg:mb-6 lg:gap-6 xl:grid-cols-5">
      <div className="relative flex items-center justify-between rounded-lg bg-lightSage p-6 lg:px-10 xl:col-span-3">
        <div className="flex w-full flex-1 flex-col items-center sm:items-start">
          <p className="text-center text-[12px] font-medium sm:text-left sm:text-sm md:text-base">
            Making Your Home Beautiful
          </p>
          <h2 className="mb-4 max-w-56 text-center text-xl font-bold sm:max-w-64 sm:text-left md:mb-5 md:text-2xl">
            Build Your Home With Modern Furniture
          </h2>
          <div>
            <Link
              href={ROUTES.SHOP}
              className="rounded-[3px] bg-darkSage px-5 py-3 text-[12px] font-medium text-light hover:bg-darkSage/90 md:rounded-sm md:px-6 md:py-3 md:text-[13px]"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <Image
          className="hidden size-52 sm:block md:size-64 xl:size-60"
          src="/armchair.svg"
          alt="eterna armchair"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="relative flex flex-col items-center rounded-lg bg-lightSage pt-6 sm:flex-row sm:justify-between sm:px-10 sm:pb-6 xl:col-span-2 xl:flex-col xl:justify-start xl:pt-10">
        <div>
          <p className="text-center text-sm font-medium sm:text-left md:text-base xl:text-center">
            Limited Time Offer
          </p>
          <h3 className="mb-1 text-center text-xl font-bold sm:text-left md:text-2xl xl:text-center">
            Comfortable Sofa
          </h3>
          <p className="text-center text-sm font-medium sm:text-left xl:text-center">
            Discover Now
          </p>
        </div>
        <Image
          className="aspect-auto max-w-[300px] sm:w-56 md:left-0 md:w-full lg:max-w-96"
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
