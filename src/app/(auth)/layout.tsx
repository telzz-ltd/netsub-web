import { AppLogo } from "@/components/logo";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      <div className="bg-primary hidden md:block"></div>
      <div className="flex flex-col items-center justify-center gap-8 px-5 py-12">
        <AppLogo />
        <div className="w-full max-w-md mx-auto">{children}</div>
      </div>
    </div>
  );
}
