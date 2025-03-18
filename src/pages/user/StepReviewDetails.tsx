import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  TypographyH3,
  TypographySmall,
  TypographyP,
} from "@/components/ui/typography";

type StepReviewDetailsProps = {
  vehicleDetails: {
    vin: string;
    year: string;
    make: string;
    model: string;
    bodyStyle: string;
    ownershipType: string;
    vehicleType: string;
    usage: string;
    engineCapacity: number;
    plateNumber: string;
  };
  insuranceType: string;
  compensationLimits: {
    ownDamage: number;
    bodilyInjury: number;
  };
};

export default function StepReviewDetails({
  vehicleDetails,
  insuranceType,
  compensationLimits,
}: StepReviewDetailsProps) {
  return (
    <div className="max-w-sm mx-auto">
      <TypographyH3 className="mb-6 text-center">
        Review Your Details
      </TypographyH3>
      <div className="space-y-6">
        {/* Vehicle Details Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Vehicle Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <TypographySmall className="text-gray-600">
                <strong>VIN:</strong> {vehicleDetails.vin || "Not provided"}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Year:</strong> {vehicleDetails.year}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Make:</strong> {vehicleDetails.make}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Model:</strong> {vehicleDetails.model}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Vehicle Type:</strong> {vehicleDetails.vehicleType}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Usage:</strong> {vehicleDetails.usage}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Engine Capacity:</strong>{" "}
                {vehicleDetails.engineCapacity}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Plate Number:</strong> {vehicleDetails.plateNumber}
              </TypographySmall>
            </div>
          </CardContent>
        </Card>

        {/* Insurance Type Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Insurance Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-gray-600">
              <strong>Selected Insurance:</strong>{" "}
              <span className="capitalize">{insuranceType}</span>
            </TypographyP>
          </CardContent>
        </Card>

        {/* Compensation Limits Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Compensation Limits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {(insuranceType === "own-damage" ||
              insuranceType === "comprehensive") && (
              <div className="block">
                <TypographySmall className="text-gray-600">
                  <strong>Own Damage Limit:</strong> $
                  {compensationLimits.ownDamage.toLocaleString()}
                </TypographySmall>
              </div>
            )}
            {(insuranceType === "third-party" ||
              insuranceType === "comprehensive") && (
              <div className="grid grid-cols-1 gap-4">
                <TypographySmall className="text-gray-600">
                  <strong>Bodily Injury:</strong>
                  the insurance will pay up to 250,000 ETB
                </TypographySmall>

                <TypographySmall className="text-gray-600">
                  <strong>Death:</strong>
                  the insurance will pay up to 250,000 ETB (minimum 30,000 ETB)
                </TypographySmall>

                <TypographySmall className="text-gray-600">
                  <strong>Property Damage:</strong>
                  the insurance will cover up to 200,000 ETB.
                </TypographySmall>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
