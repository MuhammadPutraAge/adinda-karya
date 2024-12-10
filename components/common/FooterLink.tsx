import Link from "next/link";

interface Props {
  title: string;
  links: { title: string; href: string }[];
}

export default function FooterLink({ title, links }: Props) {
  return (
    <div className="lg:p-5">
      <p className="text-lg font-medium">{title}</p>
      <div className="mb-4 h-1 w-11 rounded-full bg-darkSage" />

      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <Link key={link.title} href={link.href} className="w-fit">
            <p className="font-medium text-grey">{link.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
