import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-500 py-2 flex justify-between w-full items-center">
      <Link href="/">
        <Image
          className="text-[#1A263D]"
          src="/assets/svg/logo/icon-dark.svg"
          alt="Muraajaco-logo-icon-dark"
          width={80}
          height={80}
        />
      </Link>

      <Link
        href="/about"
        className="text-[#1A263D] active:text-[#10b981] text-2xl"
      >
        About
      </Link>
    </header>
  );
};

export default Header;
