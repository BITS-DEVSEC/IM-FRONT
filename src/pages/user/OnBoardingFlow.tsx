import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import StepWelcome from "./StepWelcome";
import StepSelectInsuranceClass from "./StepSelectInsuranceClass";
import StepVehicleDetails from "./StepVehicleDetails";
import StepCompareQuotes from "./StepCompareQuotes";
import StepPayment from "./StepPayment";
import StepSelectInsurance from "./StepSelectInsurance";
import StepSelectCompensation from "./StepSelectCompensation";
import StepReviewDetails from "./StepReviewDetails";

// Define the structure of vehicle details
interface VehicleDetails {
  vin: string;
  year: string;
  make: string;
  model: string;
  engineCapacity: string;
  vehicleType: string;
  useType: string;
  plateNumber: string;
}

// Define the structure of compensation limits
interface CompensationLimits {
  ownDamage: number;
  bodilyInjury: number;
}

const steps = [
  "Welcome",
  "Select Insurance Type",
  "Enter Vehicle Details",
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
    vehicleType: "",
    useType: "",
    plateNumber: "",
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
      {" "}
      {/* Changed from max-w-sm to max-w-md */}
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
            {step === 2 && (
              <StepVehicleDetails
                vehicleDetails={vehicleDetails}
                setVehicleDetails={setVehicleDetails}
              />
            )}
            {step === 3 && (
              <StepSelectInsurance setInsuranceType={setInsuranceType} />
            )}
            {step === 4 && (
              <StepSelectCompensation
                insuranceType={insuranceType}
                compensationLimits={compensationLimits}
                setCompensationLimits={setCompensationLimits}
              />
            )}
            {step === 5 && (
              <StepReviewDetails
                vehicleDetails={vehicleDetails}
                insuranceType={insuranceType}
                compensationLimits={compensationLimits}
              />
            )}
            {step === 6 && <StepCompareQuotes />}
            {step === 7 && <StepPayment />}
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
