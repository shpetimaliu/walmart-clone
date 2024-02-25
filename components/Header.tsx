import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex bg-walmart">
      <Link href={"/"}>
        <Image alt="Logo" src="/logo.svg" width={150} height={150} />
      </Link>

      <form className="flex items-center bg-white rounded-full w-full flex-1 ">
        <input
          type="text"
          placeholder="Search Everything"
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button>
          <Search className="rounded-full h-10" />
        </button>
      </form>
    </header>
  );
}

export default Header;
