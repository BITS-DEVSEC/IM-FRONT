import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Car, CheckCircle, ShieldCheck } from "lucide-react";

const steps = [
  "Welcome",
  "Enter Vehicle Details",
  "Choose Insurance Type",
  "Select Coverage Amount",
  "Compare Quotes",
  "Payment & Confirmation",
];

const insuranceTypes = [
  {
    id: "own_damage",
    label: "Own Damage",
    description: "Covers your car",
    icon: <Car size={24} />,
  },
  {
    id: "third_party",
    label: "Third Party",
    description: "Covers damages to others",
    icon: <CheckCircle size={24} />,
  },
  {
    id: "comprehensive",
    label: "Comprehensive",
    description: "Covers both",
    icon: <ShieldCheck size={24} />,
  },
];

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [insuranceType, setInsuranceType] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [liability, setLiability] = useState({
    injury: "",
    propertyDamage: "",
  });
  const [vehicleDetails, setVehicleDetails] = useState({
    registration: "",
    make: "",
    model: "",
    year: "",
  });

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>

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
            {step === 0 && (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">
                  Welcome to Bunna Insurance
                </h2>
                <p className="text-gray-600">
                  Get the best insurance quotes for your vehicle in just a few
                  steps.
                </p>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-3">
                <Input
                  placeholder="Vehicle Registration Number"
                  value={vehicleDetails.registration}
                  onChange={(e) =>
                    setVehicleDetails({
                      ...vehicleDetails,
                      registration: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Car Make (e.g., Toyota)"
                  value={vehicleDetails.make}
                  onChange={(e) =>
                    setVehicleDetails({
                      ...vehicleDetails,
                      make: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Car Model (e.g., Corolla)"
                  value={vehicleDetails.model}
                  onChange={(e) =>
                    setVehicleDetails({
                      ...vehicleDetails,
                      model: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Year of Manufacture"
                  value={vehicleDetails.year}
                  onChange={(e) =>
                    setVehicleDetails({
                      ...vehicleDetails,
                      year: e.target.value,
                    })
                  }
                />
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4">
                {insuranceTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setInsuranceType(type.id)}
                    className={`flex items-center gap-4 p-4 border rounded-lg transition hover:bg-gray-100 ${
                      insuranceType === type.id
                        ? "border-blue-500 bg-blue-50"
                        : ""
                    }`}
                  >
                    <div className="text-blue-500">{type.icon}</div>
                    <div>
                      <p className="font-medium">{type.label}</p>
                      <p className="text-sm text-gray-500">
                        {type.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && insuranceType === "third_party" && (
              <div className="space-y-3">
                <p>
                  How much protection do you want in case of injury to another
                  person?
                </p>
                <Input
                  placeholder="Injury Liability Amount (Starting limit, $50,000)"
                  type="number"
                  value={liability.injury}
                  onChange={(e) =>
                    setLiability({ ...liability, injury: e.target.value })
                  }
                />
                <p>How much do you want to cover for property damage?</p>
                <Input
                  placeholder="Property Damage Liability (Starting limit, $30,000)"
                  type="number"
                  value={liability.propertyDamage}
                  onChange={(e) =>
                    setLiability({
                      ...liability,
                      propertyDamage: e.target.value,
                    })
                  }
                />
              </div>
            )}

            {step === 3 && insuranceType !== "third_party" && (
              <div className="space-y-3">
                <p>Select your coverage amount:</p>
                <Input
                  placeholder="Coverage Amount (e.g., $10,000)"
                  type="number"
                  value={coverageAmount}
                  onChange={(e) => setCoverageAmount(e.target.value)}
                />
              </div>
            )}

            {step === 4 && <p>Compare different insurance quotes.</p>}
            {step === 5 && <p>Make a payment and confirm your policy.</p>}
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
