"use client";

import React from "react";
import HeroHeader from "@/components/header-land";
import FooterSection from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import { ChevronRight, Shield, ShieldAlert, ShieldCheck } from "lucide-react";

const MotorInsurance: React.FC = () => {
  const [menuState, setMenuState] = React.useState(false);

  const toggleMenu = () => {
    setMenuState((prevState) => !prevState);
  };

  return (
    <>
      <HeroHeader />
      <br />
      <br />
      <main className="overflow-hidden">
        <section className="bg-background overflow-hidden py-16">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row"></div>
            <section className="mb-16 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Understanding Motor Insurance Coverages
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Explore different types of insurance coverages to find the right
                protection for your needs.
              </p>
            </section>

            <section className="mb-16">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg border bg-white p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Shield className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Third Party Motor Insurance</h3>
                  <p className="text-gray-700">
                    Basic mandatory coverage that protects against third-party liabilities.
                  </p>
                  <a
                    href="#third-party"
                    className="mt-4 inline-block text-orange-500 hover:underline"
                  >
                    Learn More
                  </a>
                </div>
                <div className="rounded-lg border bg-white p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <ShieldCheck className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Comprehensive Motor Insurance</h3>
                  <p className="text-gray-700">
                    Extended coverage that protects your vehicle along with third-party liabilities.
                  </p>
                  <a
                    href="#comprehensive"
                    className="mt-4 inline-block text-orange-500 hover:underline"
                  >
                    Learn More
                  </a>
                </div>
                <div className="rounded-lg border bg-white p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <ShieldAlert className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Own Damage Coverage</h3>
                  <p className="text-gray-700">
                    Coverage specifically for damages to your own vehicle in various scenarios.
                  </p>
                  <a
                    href="#own-damage"
                    className="mt-4 inline-block text-orange-500 hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </section>   

            <section id="third-party" className="mb-16 scroll-mt-20">
              <h2 className="mb-6 text-3xl font-bold">Third Party Motor Insurance</h2>
              <div className="rounded-lg border bg-gray-50 p-6">
                <p className="mb-4 text-gray-700">
                  Third-party insurance is the most basic and mandatory form of
                  auto insurance required by law in most countries. This
                  coverage protects you financially against claims from other
                  people (third parties) for:
                </p>
                <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
                  <li>Bodily injury or death of third parties</li>
                  <li>Property damage to third-party vehicles or structures</li>
                  <li>Legal liabilities arising from accidents</li>
                  <li>Legal defense costs in case of lawsuits</li>
                </ul>
                <p className="mb-4 text-gray-700">
                  <strong>Coverage Details:</strong> Third-party insurance
                  typically covers unlimited liability for death or bodily
                  injury, while property damage coverage has specific limits
                  that vary by policy and region. This coverage extends to any
                  authorized driver using your vehicle with your permission.
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Claim Process:</strong> In the event of an accident,
                  you'll need to notify your insurer immediately. The insurer
                  will investigate the claim, negotiate with the third party,
                  and handle any legal proceedings. You'll need to provide
                  accident details, police reports, and witness information.
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Pricing Factors:</strong> Premiums for third-party
                  insurance are generally lower than other coverage types.
                  Factors affecting your premium include your driving history,
                  vehicle type, location, and demographic information.
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Key limitations:</strong> This coverage does not
                  protect your own vehicle against damages or theft. If your
                  vehicle is damaged in an accident, you'll need to pay for
                  repairs out of pocket, even if you're not at fault but the
                  other party is uninsured or underinsured.
                </p>
                <p className="text-gray-700">
                  <strong>Best for:</strong> Budget-conscious drivers who own
                  older vehicles with lower market value, or as a minimum legal
                  requirement. It's also suitable for secondary vehicles that
                  aren't driven frequently.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Get A Qoute <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </section>

            <section id="comprehensive" className="mb-16 scroll-mt-20">
              <h2 className="mb-6 text-3xl font-bold">
                Comprehensive Motor Insurance
              </h2>
              <div className="rounded-lg border bg-gray-50 p-6">
                <p className="mb-4 text-gray-700">
                  Comprehensive insurance provides the most complete protection
                  for your vehicle. It combines third-party coverage with own
                  damage protection and additional benefits:
                </p>
                <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    All third-party liability coverage (bodily injury and
                    property damage)
                  </li>
                  <li>
                    Protection against damage to your own vehicle due to
                    accidents, regardless of fault
                  </li>
                  <li>
                    Coverage for theft, fire, natural disasters (floods,
                    earthquakes, storms), and vandalism
                  </li>
                  <li>Protection against uninsured/underinsured motorists</li>
                  <li>
                    Coverage for damages while parked or when your vehicle is
                    not in use
                  </li>
                  <li>
                    Roadside assistance and towing services (24/7 emergency
                    support)
                  </li>
                  <li>Temporary replacement vehicle during repairs</li>
                </ul>
                <p className="mb-4 text-gray-700">
                  <strong>Coverage Details:</strong> Comprehensive policies
                  cover your vehicle up to its Insured Declared Value (IDV),
                  which is the maximum amount payable in case of total loss or
                  theft. The IDV is typically the current market value of your
                  vehicle, accounting for depreciation.
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Claim Process:</strong> For comprehensive claims,
                  you'll need to file a First Information Report (FIR) in cases
                  of theft or third-party accidents. For own damage claims,
                  you'll need to take your vehicle to an authorized garage,
                  where an insurance surveyor will assess the damage. Most
                  insurers now offer digital claim filing through mobile apps
                  with photo/video documentation.
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Pricing Factors:</strong> Comprehensive insurance
                  premiums are higher than third-party coverage due to the
                  extended protection. Factors affecting your premium include
                  your vehicle's make, model, age, IDV, your driving history,
                  location, and chosen deductible amount. Many insurers offer No
                  Claim Bonus (NCB) discounts of up to 50% for claim-free years.
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Additional benefits:</strong> Many comprehensive
                  policies offer valuable extras like zero depreciation coverage
                  (bumper-to-bumper), engine protection, consumables cover, key
                  replacement, personal accident cover for passengers, and
                  return to invoice coverage (pays the original invoice value
                  rather than the depreciated value in case of total loss).
                </p>
                <p className="text-gray-700">
                  <strong>Best for:</strong> Newer vehicles, financed or leased
                  vehicles (often required by lenders), expensive vehicles, and
                  drivers wanting maximum protection and peace of mind. It's
                  particularly valuable in areas prone to natural disasters,
                  theft, or with high accident rates.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Get A Qoute <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </section>

            <section id="own-damage" className="mb-16 scroll-mt-20">
              <h2 className="mb-6 text-3xl font-bold">Own Damage Coverage</h2>
              <div className="rounded-lg border bg-gray-50 p-6">
                <p className="mb-4 text-gray-700">
                  Own Damage (OD) coverage specifically protects against damages
                  to your own vehicle. It can be purchased as a standalone
                  policy (if you already have third-party coverage) or as part
                  of comprehensive coverage. This specialized protection
                  includes:
                </p>
                <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    Collision damage (accidents involving other vehicles or
                    objects like walls, poles, or dividers)
                  </li>
                  <li>
                    Non-collision damage (fire, self-ignition, explosion,
                    lightning)
                  </li>
                  <li>Theft of the vehicle or its parts</li>
                  <li>
                    Natural disasters (floods, earthquakes, cyclones,
                    landslides)
                  </li>
                  <li>Falling objects (trees, poles, stones)</li>
                  <li>Vandalism, riots, strikes, and malicious acts</li>
                  <li>
                    Damage during transit by road, rail, inland waterway, or
                    elevator
                  </li>
                  <li>Damage while parked on private or public property</li>
                </ul>
                <p className="mb-4 text-gray-700">
                  <strong>Coverage Details:</strong> Own damage coverage is
                  subject to a deductible (also called excess) - a fixed amount
                  you must pay out of pocket for each claim before the insurance
                  coverage begins. The standard deductible is typically 1% of
                  the IDV or a fixed amount, whichever is higher. You can opt
                  for a voluntary higher deductible to reduce your premium.
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Claim Process:</strong> For own damage claims, you
                  should inform your insurer immediately after the incident.
                  Take photographs of the damage, file a police report if
                  required (mandatory for theft or third-party accidents), and
                  take your vehicle to a network garage. An insurance surveyor
                  will assess the damage and approve repairs. Most insurers
                  offer cashless claims at network garages.
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Pricing Factors:</strong> Own damage premiums are
                  calculated based on your vehicle's Insured Declared Value
                  (IDV), age, make and model, geographical zone, and your claims
                  history. You can reduce premiums by opting for higher
                  voluntary deductibles, installing anti-theft devices, or
                  maintaining a claim-free record to earn No Claim Bonus (NCB).
                </p>
                <p className="mb-4 text-gray-700">
                  <strong>Important considerations:</strong> Own damage coverage
                  typically excludes normal wear and tear, mechanical/electrical
                  breakdowns, damage to tires and tubes unless the vehicle is
                  damaged at the same time, and damage caused while driving
                  under the influence of intoxicating substances or without a
                  valid license.
                </p>
                <p className="text-gray-700">
                  <strong>Best for:</strong> Drivers who already have
                  third-party insurance but want additional protection for their
                  own vehicle without the full cost of comprehensive coverage.
                  It's particularly valuable for vehicles in areas prone to
                  natural disasters, theft, or vandalism, and for vehicles that
                  are a few years old but still have significant value.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Get A Qoute <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-bold">
                Additional Coverage Options
              </h2>
              <div className="rounded-lg border bg-gray-50 p-6">
                <p className="mb-4 text-gray-700">
                  Beyond the standard insurance types, we offer several add-on
                  coverages to enhance your protection:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-2 text-xl font-semibold text-orange-500">
                      Zero Depreciation Cover
                    </h3>
                    <p className="text-gray-700">
                      Also known as "bumper-to-bumper" coverage, this add-on
                      ensures you receive the full claim amount without any
                      deduction for depreciation on replaced parts. Particularly
                      valuable for newer vehicles under 5 years old.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-2 text-xl font-semibold text-orange-500">
                      Engine Protection Cover
                    </h3>
                    <p className="text-gray-700">
                      Covers damage to your engine caused by water ingression or
                      leakage of lubricating oil, which are typically excluded
                      from standard policies. Essential for areas prone to
                      flooding.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-2 text-xl font-semibold text-orange-500">
                      Return to Invoice Cover
                    </h3>
                    <p className="text-gray-700">
                      In case of total loss or theft, this cover pays the
                      original invoice value of your vehicle rather than the
                      depreciated value, covering even the registration and road
                      tax costs.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-2 text-xl font-semibold text-orange-500">
                      Roadside Assistance
                    </h3>
                    <p className="text-gray-700">
                      24/7 emergency services including towing, battery
                      jump-start, flat tire change, fuel delivery, and minor
                      repairs at the breakdown location. Provides peace of mind
                      during long journeys.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-2 text-xl font-semibold text-orange-500">
                      No Claim Bonus Protection
                    </h3>
                    <p className="text-gray-700">
                      Preserves your accumulated No Claim Bonus even after
                      making a claim. This helps maintain your discount on
                      premium renewals despite filing a claim during the policy
                      period.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <h3 className="mb-2 text-xl font-semibold text-orange-500">
                      Personal Accident Cover
                    </h3>
                    <p className="text-gray-700">
                      Provides compensation in case of accidental death or
                      permanent disability to the vehicle owner-driver. Can be
                      extended to cover passengers as well for comprehensive
                      protection.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <CallToAction />
        <FooterSection />
      </main>
    </>
  );
};

export default MotorInsurance;
