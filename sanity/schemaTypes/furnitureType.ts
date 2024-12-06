import { defineArrayMember, defineField, defineType } from "sanity";
import ColorInput from "../components/ColorInput";

export const furnitureType = defineType({
  name: "furniture",
  title: "Furnitures",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "cover",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule) => rule.length(3),
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "colors",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
          components: {
            input: ColorInput,
          },
          validation: (rule) =>
            rule.min(1).custom((color) => {
              const hexCodeRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
              return hexCodeRegex.test(color || "")
                ? true
                : "Please enter a valid hex color code";
            }),
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "stock",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "soldAmount",
      type: "number",
      validation: (rule) => rule.required(),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "cover",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: (subtitle as number).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          trailingZeroDisplay: "stripIfInteger",
        }),
        media,
      };
    },
  },
});
