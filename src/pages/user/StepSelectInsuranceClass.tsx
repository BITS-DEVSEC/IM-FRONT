import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { Home, Car, HeartPulse, Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const insuranceOptions = [
  {
    id: "homeowners",
    label: "Home Insurance",
    icon: <Home className="text-blue-500" size={48} />,
    description: "Protect your home and belongings from unexpected events.",
  },
  {
    id: "motor",
    label: "Motor Insurance",
    icon: <Car className="text-green-500" size={48} />,
    description: "Cover your vehicle against accidents, theft, and damages.",
  },
  {
    id: "life",
    label: "Life Insurance",
    icon: <HeartPulse className="text-purple-500" size={48} />,
    description: "Secure your family's future with financial protection.",
  },
];

interface StepSelectInsuranceProps {
  setInsuranceClassType: (type: string) => void;
}

export default function StepSelectInsuranceClass({
  setInsuranceClassType,
}: StepSelectInsuranceProps) {
  const [selected, setSelected] = useState<string>("motor");

  return (
    <div className="space-y-6">
      <TypographyH3 className="text-center">
        What kind of insurance are you looking for?
      </TypographyH3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {insuranceOptions.map(({ id, label, icon, description }) => (
          <Card
            key={id}
            className={`cursor-pointer text-center p-6 transition-all duration-300 ${
              selected === id
                ? "border-2 border-blue-600 shadow-lg scale-105"
                : "border border-gray-200 hover:shadow-md hover:scale-102"
            }`}
            onClick={() => {
              setSelected(id);
              setInsuranceClassType(id);
            }}
          >
            <CardHeader>
              <div className="flex justify-center">{icon}</div>
              <div className="flex items-center justify-center gap-2 mt-4">
                <CardTitle className="text-xl font-semibold">{label}</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <TypographyP className="text-lg text-white-600">
                        {description}
                      </TypographyP>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent>
              {selected === id && (
                <div className="mt-4">
                  <Check className="mx-auto text-blue-600 w-8 h-8" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
