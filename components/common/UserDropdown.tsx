import { auth, signIn, signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default async function UserDropdown() {
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
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none active:outline-none">
        <Image src="/icons/profile.svg" alt="search" width={24} height={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {session?.user ? (
          <>
            <DropdownMenuGroup className="flex items-center gap-2 p-2">
              <Image
                src={session.user.image || ""}
                alt={session.user.name || ""}
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <p className="text-sm font-medium text-dark">
                  {session.user.name}
                </p>
                <p className="text-[12px] text-grey">{session.user.email}</p>
              </div>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={ROUTES.TRANSACTIONS}
                className="flex w-full items-center gap-2"
              >
                Transactions
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={ROUTES.FAVORITES}
                className="flex w-full items-center gap-2"
              >
                Favorites
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <form action={handleLogout} className="w-full">
                <button
                  type="submit"
                  className="w-full gap-2 px-2 py-1.5 text-left text-sm text-dark"
                >
                  Logout
                </button>
              </form>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <form action={handleLogin} className="w-full px-2 py-1.5">
              <button
                type="submit"
                className="flex w-full items-center gap-2 rounded bg-light px-4 py-2 drop-shadow-[0_0_2px_rgba(47,54,69,0.25)] transition-colors hover:bg-secondary"
              >
                <Image
                  src="/icons/google.svg"
                  alt="google"
                  width={16}
                  height={16}
                />
                <p className="text-sm text-dark">Sign in with Google</p>
              </button>
            </form>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
