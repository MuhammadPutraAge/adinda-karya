import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { GET_CATEGORY_LIST } from "@/sanity/lib/queries/categories";
import Image from "next/image";

export default async function CategoryList() {
  const categoryList = await client.fetch(GET_CATEGORY_LIST);

  return (
    <section className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mb-36 lg:gap-6 xl:grid-cols-3">
      {categoryList?.map((category) => (
        <div
          key={category.slug?.current}
          className="relative flex min-h-36 flex-col justify-center overflow-hidden rounded-lg bg-lightSage px-6"
        >
          <h2 className="text-2xl font-medium lg:text-3xl">{category.name}</h2>
          <p className="max-w-44 text-[12px] text-grey lg:text-sm">
            Discover our new {category.name?.toLowerCase()} collection.
          </p>

          <Image
            className="absolute right-0 top-0 translate-x-[30%]"
            src={urlFor(category.image || "").url()}
            alt={category.name || ""}
            width={150}
            height={150}
          />
        </div>
      ))}
    </section>
  );
}
