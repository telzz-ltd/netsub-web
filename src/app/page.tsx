import { ButtonLink } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mt-8 grid md:grid-cols-2 items-center">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="h-7 px-3 font-medium md:text-base bg-primary/5 border-primary text-primary border-2"
            >
              Most reliable subscription platform
            </Badge>
            <h3 className="text-2xl md:text-6xl font-bold space-x-4 leading-tight">
              <span>Top up.</span>
              <span>Pay bills.</span>
              <br />
              <span>Live better.</span>
            </h3>
            <p className="text-muted-foreground md:text-lg">
              Instant airtime. data. bill payments and more Everything vou need,
              in one placel
            </p>
            <ButtonLink href="/register" size="lg" className="text-base">
              Get Started <ArrowRight />
            </ButtonLink>
          </div>
          <div className="hidden md:block relative items-center justify-center md:h-150">
            <div className="absolute scale-75 bg-primary/20 rounded-full"></div>
            <Image
              src="/app-mockup.png"
              width={400}
              height={600}
              alt="mockup"
              className="object-cover object-top size-full bg-white h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
