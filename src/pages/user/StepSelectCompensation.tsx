import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  TypographyH3,
  TypographySmall,
  TypographyP,
} from "@/components/ui/typography";

type StepSelectCompensationProps = {
  insuranceType: string;
  compensationLimits: {
    ownDamage: number;
    bodilyInjury: number;
  };
  setCompensationLimits: (limits: {
    ownDamage: number;
    bodilyInjury: number;
  }) => void;
};

export default function StepSelectCompensation({
  insuranceType,
  compensationLimits,
  setCompensationLimits,
}: StepSelectCompensationProps) {
  const [ownDamageLimit, setOwnDamageLimit] = useState(
    compensationLimits.ownDamage
  );

  const handleOwnDamageChange = (value: number[]) => {
    setOwnDamageLimit(value[0]);
    setCompensationLimits({ ...compensationLimits, ownDamage: value[0] });
  };

  return (
    <div className="max-w-sm mx-auto">
      <TypographyH3 className="mb-4">Select Compensation Limits</TypographyH3>
      <div className="space-y-4">
        {(insuranceType === "own-damage" ||
          insuranceType === "comprehensive") && (
          <Card>
            <CardHeader>
              <CardTitle>
                How much coverage should we provide for your own damage?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Slider
                value={[ownDamageLimit]}
                onValueChange={handleOwnDamageChange}
                min={0}
                max={200000}
                step={15000}
              />
              <TypographySmall className="mt-4">
                Selected: ${ownDamageLimit}
              </TypographySmall>
            </CardContent>
          </Card>
        )}
        {insuranceType === "third-party" ||
        insuranceType === "comprehensive" ? (
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Liability Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                This insurance covers costs if you cause an accident:
              </TypographyP>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Bodily Injury:</strong> If someone gets hurt, the
                  insurance will pay up to 250,000 ETB.
                </li>
                <li>
                  <strong>Death:</strong> If the accident leads to death, the
                  insurance will pay up to 250,000 ETB (minimum 30,000 ETB).
                </li>
                <li>
                  <strong>Property Damage:</strong> If you damage someone’s
                  property, the insurance will cover up to 200,000 ETB.
                </li>
                <li>
                  <strong>Emergency Medical Treatment:</strong> If urgent
                  medical help is needed after an accident, the insurance will
                  pay up to 15,000 ETB. The insurance pays within these limits,
                  so anything above them won’t be covered.{" "}
                </li>
              </ul>
            </CardContent>
          </Card>
        ) : (
          insuranceType === "comprehensive"
        )}
      </div>
    </div>
  );
}
