import { TextInput } from "@sanity/ui";
import { StringInputProps } from "sanity";

export default function ColorInput(props: StringInputProps) {
  const { elementProps } = props;

  const hexCodeRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  return (
    <TextInput
      {...elementProps}
      prefix={
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor:
              elementProps.value && hexCodeRegex.test(elementProps.value)
                ? elementProps.value
                : "transparent",
            borderRadius: 6,
            marginRight: 8,
            border: "1px solid #82868F",
            padding: 16,
          }}
        />
      }
    />
  );
}
