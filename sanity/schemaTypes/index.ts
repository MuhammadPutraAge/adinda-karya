import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { furnitureType } from "./furnitureType";
import { reviewType } from "./reviewType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, furnitureType, reviewType],
};
