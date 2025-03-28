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
    engineCapacity: string;
    plateNumber: string;
    engineNumber: string;
  };
  vehicleDetails2: {
    carPrice: string;
    passengers: string;
    vehicleType: string;
    vehicleUsage: string;
    goods: string;
  };
  insuranceType: string;
  compensationLimits: {
    ownDamage: number;
    bodilyInjury: number;
  };
  carPhotos: {
    front: File | null;
    back: File | null;
    left: File | null;
    right: File | null;
  };
};

export default function StepReviewDetails({
  vehicleDetails,
  vehicleDetails2,
  insuranceType,
  compensationLimits,
  carPhotos,
}: StepReviewDetailsProps) {
  // Calculate premium based on engine capacity, vehicle type and usage
  const calculatePremium = () => {
    const { engineCapacity } = vehicleDetails;
    const { vehicleType, vehicleUsage } = vehicleDetails2;

    // Only calculate for private vehicles
    if (vehicleType === "Private Vehicle") {
      if (vehicleUsage === "Private Own Use") {
        if (engineCapacity.includes("Below 1600 CC")) return "2,641 ETB";
        if (engineCapacity.includes("Between 1600cc and 2000 CC"))
          return "3,039 ETB";
        if (engineCapacity.includes("Between 2000cc and 3000 CC"))
          return "3,301 ETB";
        if (engineCapacity.includes("Between 3000cc and 4000 CC"))
          return "3,562 ETB";
        if (engineCapacity.includes("Above 4000 CC")) return "3,830 ETB";
      } else if (vehicleUsage === "Private Business Use") {
        if (engineCapacity.includes("Below 1600 CC")) return "3,301 ETB";
        if (engineCapacity.includes("Between 1600cc and 2000 CC"))
          return "3,562 ETB";
        if (engineCapacity.includes("Between 2000cc and 3000 CC"))
          return "3,830 ETB";
        if (engineCapacity.includes("Between 3000cc and 4000 CC"))
          return "4,092 ETB";
        if (engineCapacity.includes("Above 4000 CC")) return "4,360 ETB";
      }
    }

    return "Premium calculation not available for this combination";
  };

  const shouldShowPremium = insuranceType === "third-party";
  const premium = shouldShowPremium ? calculatePremium() : null;

  return (
    <div className="max-w-sm mx-auto">
      <TypographyH3 className="mb-6 text-center">
        Review Your Details
      </TypographyH3>
      <div className="space-y-6">
        {/* Vehicle Information Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Vehicle Information{" "}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <TypographySmall className="text-gray-600">
                <strong>Car Price:</strong> {vehicleDetails2.carPrice}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Passengers:</strong> {vehicleDetails2.passengers}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Vehicle Type:</strong> {vehicleDetails2.vehicleType}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Vehicle Usage:</strong> {vehicleDetails2.vehicleUsage}
              </TypographySmall>
              {vehicleDetails2.goods && (
                <TypographySmall className="text-gray-600">
                  <strong>Goods Carried:</strong> {vehicleDetails2.goods}
                </TypographySmall>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Vehicle Information Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Detailed Vehicle Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <TypographySmall className="text-gray-600">
                <strong>Chassis Number (VIN):</strong>{" "}
                {vehicleDetails.vin || "Not provided"}
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
                <strong>Engine Capacity:</strong>{" "}
                {vehicleDetails.engineCapacity}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Plate Number:</strong> {vehicleDetails.plateNumber}
              </TypographySmall>
              <TypographySmall className="text-gray-600">
                <strong>Engine Number:</strong> {vehicleDetails.engineNumber}
              </TypographySmall>
            </div>
          </CardContent>
        </Card>

        {/* Photos Upload Status */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Vehicle Photos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-gray-600">
              <strong>Photos Uploaded:</strong>{" "}
              {Object.values(carPhotos).filter(Boolean).length}/4
            </TypographyP>
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
                  <strong>Bodily Injury:</strong> the insurance will pay up to
                  250,000 ETB
                </TypographySmall>

                <TypographySmall className="text-gray-600">
                  <strong>Death:</strong> the insurance will pay up to 250,000
                  ETB (minimum 30,000 ETB)
                </TypographySmall>

                <TypographySmall className="text-gray-600">
                  <strong>Property Damage:</strong> the insurance will cover up
                  to 200,000 ETB.
                </TypographySmall>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Premium Calculation Card - Only shown for third-party insurance */}
        {shouldShowPremium && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Premium Calculation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="text-gray-600">
                <strong>Calculated Premium:</strong> {premium}
              </TypographyP>
              <TypographySmall className="text-gray-500 mt-2 block">
                Based on: {vehicleDetails.engineCapacity},{" "}
                {vehicleDetails2.vehicleType}, {vehicleDetails2.vehicleUsage}
              </TypographySmall>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
