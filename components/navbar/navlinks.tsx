import ROUTES from "@/constants/routes";
import Link from "next/link";

export default function Navlinks() {
  const navLinks = [
    {
      title: "Home",
      url: ROUTES.HOME,
    },
    {
      title: "Shop",
      url: ROUTES.SHOP,
    },
    {
      title: "Blog",
      url: ROUTES.BLOG,
    },
    {
      title: "About",
      url: ROUTES.ABOUT,
    },
    {
      title: "FAQ",
      url: ROUTES.FAQ,
    },
  ];

  return (
    <ul className="flex items-center gap-8">
      {navLinks.map((navLink) => (
        <li key={navLink.url}>
          <Link href={navLink.url} className="text-base font-medium">
            {navLink.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
