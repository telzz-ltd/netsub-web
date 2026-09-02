import { Navbar } from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-muted min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 md:px-0 py-5">{children}</div>
    </div>
  );
}
