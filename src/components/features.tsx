import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users } from "lucide-react";
import Buna from "/buna_norm.svg";
import BunaWhite from "/buna_white.svg";

export default function FeaturesSection() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <img
                    alt="Buna Insurance"
                    src={Buna}
                    className=" dark:hidden"
                  />
                  <img
                    alt="Buna Insurance"
                    src={BunaWhite}
                    className="hidden dark:block"
                  />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    Buna Insurance
                  </h2>
                  <p className="text-foreground">
                    Secure your family's future with Awash Insurance, offering
                    extensive life, health, and property coverage with
                    exceptional customer service.
                  </p>
                  <button className="mt-4 text-white px-4 py-2 rounded-full bg-[#7E4005]">
                    Read More
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <img src="hibret.png" alt="Hibret Insurance" />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    Hibret Insurance
                  </h2>
                  <p className="text-foreground">
                    Secure your family's future with Awash Insurance, offering
                    extensive life, health, and property coverage with
                    exceptional customer service.
                  </p>
                  <button className="mt-4 text-white px-4 py-2 rounded-full bg-[#7E4005]">
                    Read More
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <img src="awash.png" alt="Awash Insurance" />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    Awash Insurance
                  </h2>
                  <p className="text-foreground">
                    Secure your family's future with Awash Insurance, offering
                    extensive life, health, and property coverage with
                    exceptional customer service.
                  </p>
                  <button className="mt-4 text-white px-4 py-2 rounded-full bg-[#7E4005]">
                    Read More
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
