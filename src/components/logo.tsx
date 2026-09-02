import Image from "next/image";
import Link from "next/link";

export function AppLogo() {
  return (
    <Link href="/" className="text-xl font-bold text-white md:text-2xl">
      <Image
        src="/logo.png"
        width={160}
        height={60}
        alt="app logo"
        className="rounded w-30 md:w-35"
      />
    </Link>
  );
}
