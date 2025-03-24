import { Button } from "@/components/ui/button"
 

export default function CallToAction() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Get Started
          </h2>
          <p className="mt-4">
            Get a quote, compare plans, and apply online in minutes—simple and
            hassle-free!
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="/">
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

