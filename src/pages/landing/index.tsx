"use client";

import React from "react";
import { ArrowRight, Mail, Menu, Rocket, SendHorizonal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header-land";
import LogoCloud from "@/components/logo-cloud";
import FooterSection from "@/components/footer";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats";
import FeaturesSection from "@/components/features";
import { TextEffect } from "@/components/motion-primitives/text-effects";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

const menuItems = [
  { name: "Partners", href: "#" },
  { name: "Services", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

const LandingPage: React.FC = () => {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate z-10 hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-5xl font-bold sm:text-6xl md:text-7xl"
              >
                Fast, Reliable, and Comprehensive Digital Insurance Solutions
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-12 max-w-2xl text-pretty text-xl "
              >
                Get the coverage you need—health, auto, home, and more—quickly
                and securely. Our fully digital platform makes insurance simple,
                accessible, and hassle-free, giving you peace of mind anytime,
                anywhere.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...TransitionEvent,
                }}
                className="mt-12"
              >
                <form action="" className="mx-auto max-w-sm">
                  <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                    <input
                      placeholder="Your mail address"
                      className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                      type="email"
                    />

                    <div className="md:pr-1.5 lg:pr-0">
                      <Button
                        aria-label="submit"
                        size="sm"
                        className="rounded-(--radius)"
                      >
                        <span className="hidden md:block">Get Started</span>
                        <SendHorizonal
                          className="relative mx-auto size-5 md:hidden"
                          strokeWidth={2}
                        />
                      </Button>
                    </div>
                  </div>
                </form>
              </AnimatedGroup>
            </div>
          </div>
        </section>
        <LogoCloud />
        <FeaturesSection />
        <StatsSection />
        <Testimonials />
        <Pricing />
        <CallToAction />
        <FooterSection />
      </main>
    </>
  );
};

export default LandingPage;
