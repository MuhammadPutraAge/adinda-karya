import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { auth, signIn, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

export default async function Sidebar() {
  const session = await auth();

  const handleLogin = async () => {
    "use server";
    await signIn("google");
  };

  const handleLogout = async () => {
    "use server";
    await signOut();
  };

  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden">
        <Image src="/icons/menu.svg" alt="menu" width={32} height={32} />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 overflow-scroll">
        <SheetTitle className="mb-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <p className="font-medium">
              Adinda <span className="text-darkSage">Karya.</span>
            </p>
          </div>
        </SheetTitle>
        <SheetDescription className="hidden" />

        {NAV_LINKS.map((navLink) => (
          <SheetClose key={navLink.title} asChild>
            <Link href={navLink.url} className="font-medium">
              {navLink.title}
            </Link>
          </SheetClose>
        ))}

        <div className="h-px w-full rounded-full bg-dark/25" />

        {session ? (
          <>
            <div className="flex items-center gap-2">
              <Image
                src={session.user?.image || ""}
                alt={session.user?.name || ""}
                width={42}
                height={42}
                className="rounded-full"
              />
              <div className="overflow-hidden">
                <p className="text-sm font-medium">{session.user?.name}</p>
                <p className="min-[380px]:text-[12px] truncate text-[10px] text-grey">
                  {session.user?.email}
                </p>
              </div>
            </div>
            <SheetClose asChild>
              <Link href={ROUTES.CART} className="font-medium">
                Cart
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.TRANSACTIONS} className="font-medium">
                Transactions
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.FAVORITES} className="font-medium">
                Favorites
              </Link>
            </SheetClose>
            <form action={handleLogout} className="w-full">
              <SheetClose
                type="submit"
                className="flex-center w-full gap-2 rounded bg-light px-4 py-2 font-medium drop-shadow-[0_0_2px_rgba(47,54,69,0.25)] transition-colors hover:bg-secondary"
              >
                Logout
              </SheetClose>
            </form>
          </>
        ) : (
          <>
            <SheetClose asChild>
              <Link href={ROUTES.CART} className="font-medium">
                Cart
              </Link>
            </SheetClose>

            <form action={handleLogin}>
              <button
                type="submit"
                className="flex-center w-full gap-2 rounded bg-light px-4 py-3 drop-shadow-[0_0_2px_rgba(47,54,69,0.25)] transition-colors hover:bg-secondary"
              >
                <Image
                  src="/icons/google.svg"
                  alt="google"
                  width={16}
                  height={16}
                />
                <p className="text-sm font-medium text-dark">
                  Sign in with Google
                </p>
              </button>
            </form>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
