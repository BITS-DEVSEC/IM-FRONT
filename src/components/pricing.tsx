import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
 
export default function Pricing() {
  return (
    <div className="bg-background relative py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Start managing your coverage smarter and secure your future today.
          </h2>
        </div>
        <div className="mt-8 md:mt-20">
          <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
            <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="text-2xl font-semibold">Insurance Suite</h3>
                <p className="mt-2 text-lg">
                  Comprehensive coverage solutions for all your needs.
                </p>
                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                  <span className="text-4xl">$</span>0
                </span>

                <div className="flex justify-center">
                  <Button asChild size="lg">
                    <a href="#">Get started</a>
                  </Button>
                </div>

                <p className="text-muted-foreground mt-12 text-sm">
                  Includes: Comprehensive coverage, secure claims processing,
                  flexible payments, 24/7 support, and all essential benefits.
                </p>
              </div>
              <div className="relative">
                <ul role="list" className="space-y-4">
                  {[
                    "Premium Benefits – Enjoy exclusive perks and coverage advantages.",
                    "Flexible Payments – Pay your premiums weekly for added convenience.",
                    "Support a Cause – A portion of your premium goes toward meaningful projects.",
                    "Full Access – Unlock all insurance benefits and services every week.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-6 text-sm">
                  Your coverage adapts to your needs—you can add or adjust
                  insured members anytime. Trusted by individuals and businesses
                  alike.
                </p>
                <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                  <img
                    className="h-5 w-fit dark:invert"
                    src="Awash.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                  <img
                    className="h-4 w-fit dark:invert"
                    src="bunna2.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                  <img
                    className="h-4 w-fit dark:invert"
                    src="hibret-bank.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                  <img
                    className="h-5 w-fit dark:invert"
                    src="Awash.svg"
                    alt="Nike Logo"
                    height="20"
                    width="auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
