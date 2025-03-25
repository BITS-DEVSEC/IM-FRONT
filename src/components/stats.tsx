export default function StatsSection() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Complete Coverage Insurance
          </h2>
          <p>
            Providing reliable and comprehensive coverage for your peace of
            mind. We offer tailored insurance solutions to protect what matters
            most, with flexible plans and exceptional customer support.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+1200</div>
            <p>Satisfied Customers</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">24/7</div>
            <p>Customer Support</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+500</div>
            <p>Coverage Options</p>
          </div>
        </div>
      </div>
    </section>
  );
}
