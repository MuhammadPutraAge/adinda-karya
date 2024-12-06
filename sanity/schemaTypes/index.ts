import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { furnitureType } from "./furnitureType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, furnitureType],
};
