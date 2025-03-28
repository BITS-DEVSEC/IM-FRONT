import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Start securing your future today.
          </h2>
          <p className="mt-4">
            Get the coverage you need for health, auto, home, and more,
            instantly and securely. Our digital platform simplifies insurance,
            making it fast, accessible, and hassle-free for your peace of mind.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#7E4005]">
              <a href="/choose">
                <span>Get Started</span>
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="/">
                <span>More Info</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
