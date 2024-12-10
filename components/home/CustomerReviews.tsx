import { client } from "@/sanity/lib/client";
import SectionTitle from "../common/SectionTitle";
import { GET_REVIEWS_LIST_HOME } from "@/sanity/lib/queries/reviews";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function CustomerReviews() {
  const reviews = await client.fetch(GET_REVIEWS_LIST_HOME);

  return (
    <section className="mb-20 lg:mb-36">
      <SectionTitle
        title="What Our Customers Say"
        description="Discover the real experiences and heartfelt stories from our valued customers who trust and recommend our products."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-md bg-light p-6 drop-shadow-[0_0_2px_rgba(47,54,69,0.25)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <Image
                className="size-10 rounded-full"
                src={urlFor(review.profileImage || "").url()}
                alt={review.name || ""}
                width={40}
                height={40}
              />

              <div>
                <p className="text-sm font-medium">{review.name}</p>
                <p className="text-[10px] font-medium text-darkSage">
                  {review.location}
                </p>
              </div>
            </div>

            <p className="text-[12px] text-grey">
              &quot;{review.content}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
