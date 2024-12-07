import { defineQuery } from "next-sanity";

export const GET_BEST_SELLER_FURNITURES = defineQuery(
  "*[_type == 'furniture'] | order(soldAmount desc)[0...4] {cover,name,price,slug}"
);

export const GET_FOOTER_LATEST_FURNITURES = defineQuery(
  "*[_type == 'furniture'] | order(_createdAt desc)[0...2] {cover,name,price,slug}"
);
