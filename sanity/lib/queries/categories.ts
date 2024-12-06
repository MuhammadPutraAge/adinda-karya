import { defineQuery } from "next-sanity";

export const GET_CATEGORY_LIST = defineQuery(
  "*[_type == 'category'][0...3] {name,slug,image}"
);
