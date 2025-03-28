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
  { name: "Products", href: "#" },
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
                Get the coverage you need! health, auto, home, and
                more,instantly and securely. Our digital platform simplifies
                insurance, making it fast, accessible, and hassle-free for your
                peace of mind.
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
                <Button
                  aria-label="submit"
                  size="lg"
                  className="rounded-lg px-4 py-2 bg-[#7E4005] text-white hover:bg-[#9a4f06] transition-colors"
                >
                  <a href="/choose" className="hidden md:block">
                    Get Started
                  </a>
                  <SendHorizonal
                    className="h-5 w-5 md:hidden"
                    strokeWidth={2}
                  />
                </Button>
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
