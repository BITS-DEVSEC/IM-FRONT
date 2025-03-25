import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import StepWelcome from "./StepWelcome";
import StepSelectInsuranceClass from "./StepSelectInsuranceClass";
import StepVehicleDetails from "./StepVehicleDetails1";
import StepVehicleDetails2 from "./StepVehicleDetails2"; // Correct import
import StepCompareQuotes from "./StepCompareQuotes";
import StepPayment from "./StepPayment";
import StepSelectInsurance from "./StepSelectInsurance";
import StepSelectCompensation from "./StepSelectCompensation";
import StepReviewDetails from "./StepReviewDetails";
import StepUploadCarPhotos from "./StepUploadCarPhotos";

interface VehicleDetails {
  vin: string;
  year: string;
  make: string;
  model: string;
  engineCapacity: string;
  plateNumber: string;
  engineNumber: string;
}

interface VehicleDetails2 {
  carPrice: string;
  passengers: string;
  vehicleType: string;
  vehicleUsage: string;
  goods: string;
}

interface CompensationLimits {
  ownDamage: number;
  bodilyInjury: number;
}

const steps = [
  "Welcome",
  "Select Insurance Type",
  "Basic Vehicle Details",
  "Additional Vehicle Details", // Position 3
  "Upload Car Photos", // Position 4
  "Select Insurance",
  "Select Compensation Limits",
  "Review Details",
  "Compare Quotes",
  "Payment & Confirmation",
];

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [setInsuranceClassType] = useState<string>("motor");
  const [insuranceType, setInsuranceType] = useState<string>("");
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails>({
    vin: "",
    year: "",
    make: "",
    model: "",
    engineCapacity: "",
    plateNumber: "",
    engineNumber: "",
  });
  const [vehicleDetails2, setVehicleDetails2] = useState<VehicleDetails2>({
    carPrice: "",
    passengers: "",
    vehicleType: "",
    vehicleUsage: "",
    goods: "",
  });
  const [carPhotos, setCarPhotos] = useState<{ [key: string]: File | null }>({
    front: null,
    back: null,
    left: null,
    right: null,
  });
  const [compensationLimits, setCompensationLimits] =
    useState<CompensationLimits>({
      ownDamage: 0,
      bodilyInjury: 0,
    });

  const nextStep = () => step < steps.length - 1 && setStep(step + 1);
  const prevStep = () => step > 0 && setStep(step - 1);

  return (
    <div className="max-w-xl mx-auto pt-12">
      <ProgressBar step={step} totalSteps={steps.length} />
      <Card>
        <CardHeader>
          <CardTitle>{steps[step]}</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && <StepWelcome />}
            {step === 1 && (
              <StepSelectInsuranceClass
                setInsuranceClassType={setInsuranceClassType}
              />
            )}
            {step === 2 && ( // Correct step number
              <StepVehicleDetails2
                vehicleDetails2={vehicleDetails2}
                setVehicleDetails2={setVehicleDetails2}
              />
            )}
            {step === 3 && (
              <StepVehicleDetails
                vehicleDetails={vehicleDetails}
                setVehicleDetails={setVehicleDetails}
              />
            )}

            {step === 4 && (
              <StepUploadCarPhotos
                carPhotos={carPhotos}
                setCarPhotos={setCarPhotos}
              />
            )}
            {step === 5 && (
              <StepSelectInsurance setInsuranceType={setInsuranceType} />
            )}
            {step === 6 && (
              <StepSelectCompensation
                insuranceType={insuranceType}
                compensationLimits={compensationLimits}
                setCompensationLimits={setCompensationLimits}
              />
            )}
            {step === 7 && (
              <StepReviewDetails
                vehicleDetails={vehicleDetails}
                vehicleDetails2={vehicleDetails2}
                insuranceType={insuranceType}
                compensationLimits={compensationLimits}
                carPhotos={carPhotos}
              />
            )}
            {step === 8 && <StepCompareQuotes />}
            {step === 9 && <StepPayment />}
          </motion.div>
        </CardContent>
      </Card>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={prevStep} disabled={step === 0}>
          Back
        </Button>
        <Button onClick={nextStep} disabled={step === steps.length - 1}>
          {step === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
}
