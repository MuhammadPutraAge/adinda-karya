import { defineQuery } from "next-sanity";

export const GET_REVIEWS_LIST_HOME = defineQuery(
  "*[_type == 'review'][0...6] {profileImage, name, location, content}"
);
