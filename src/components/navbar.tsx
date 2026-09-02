import { ButtonLink } from "@/components/link";
import { AppLogo } from "./logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="bg-white h-16 w-full">
      <div className="flex h-full items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <AppLogo />
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-1">
            {links.map((link) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant="ghost"
                size="sm"
              >
                {link.label}
              </ButtonLink>
            ))}
          </nav>
          <div className="space-x-2">
            <ButtonLink href="/login" variant="secondary">
              Sign In
            </ButtonLink>
            <ButtonLink href="/login" className="hidden md:inline-flex">
              Create Account
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
