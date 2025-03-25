import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Secure Your Covergae Now
          </h2>
          <p>
            Our platform is evolving beyond just insurance policies. We provide
            a comprehensive suite of services, tools, and resources that empower
            individuals and businesses to secure their future with confidence
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <img className="h-6 w-fit dark:invert" height="24" width="auto" />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Welcome! We offer a wide range of tailored insurance solutions
                  to suit your needs, whether it’s health, auto, home, or more.
                  With our secure and user-friendly platform, managing your
                  coverage has never been easier. Enjoy flexible payment
                  options, fast claims processing, and 24/7 support, ensuring
                  that you’re always protected, no matter where life takes you.
                  Let us help you secure a future full of confidence and
                  security.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  {/* <div>
                    <cite className="text-sm font-medium">
                      Shekinah Tshiokufila
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Software Ingineer
                    </span>
                  </div> */}
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  This platform is truly exceptional and incredibly practical—no
                  hassle, just straightforward solutions. Whether you're looking
                  to purchase a policy, file a claim, or manage your coverage,
                  everything is designed to be simple and efficient. With an
                  intuitive interface, real-time updates, and seamless customer
                  support, handling your insurance needs has never been easier.
                  A real game-changer for staying protected with confidence and
                  ease!
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3"></div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Great choice on your insurance coverage! This is one of the
                  most comprehensive and reliable plans available, offering you
                  peace of mind and security like never before.
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                 
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  We offer one of the best plans available, providing
                  comprehensive protection for your vehicle and ensuring peace
                  of mind on the road
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
            
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
