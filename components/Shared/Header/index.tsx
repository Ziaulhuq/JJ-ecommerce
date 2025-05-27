import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCartIcon, UserIcon } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between border-b w-full">
        <div className="flex justify-center items-center gap-4">
          <Link href="/">
            <Image
              src="/jj-logo.png"
              alt={`${APP_NAME} logo`}
              width={70}
              height={70}
              priority={true}
              className="flex"
            ></Image>
          </Link>
          <span>JJ Handmade</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <ShoppingCartIcon />
            <span>Cart</span>
          </div>
          <div className="flex gap-2">
            <UserIcon />
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
