import { useState } from "react";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { IconInfoCircle } from "@tabler/icons-react";

// Define the structure of the vehicleDetails object
interface VehicleDetails {
  vin: string;
  year: string;
  make: string;
  model: string;
  bodyStyle: string;
  ownershipType: string;
  engineCapacity: string;
  plateNumber: string;
  engineNumber: string;
}

// Define the props for the component
interface StepVehicleDetailsProps {
  vehicleDetails: VehicleDetails;
  setVehicleDetails: (details: VehicleDetails) => void;
  onNext: () => void;
}

export default function StepVehicleDetails({
  vehicleDetails,
  setVehicleDetails,
}: StepVehicleDetailsProps) {
  const [language, setLanguage] = useState<"en" | "am">("en"); // Default language is English
  return (
    <div className="max-w-sm mx-auto space-y-4">
      <TypographyH3 className="mb-4">
        {language === "en" ? "Vehicle Details" : "የተሽከርካሪ ዝርዝሮች"}
      </TypographyH3>

      {/* Language Selector */}
      <div className="flex items-center justify-between mb-4">
        <TypographyP>Language/ቋንቋ</TypographyP>
        <Select
          value={language}
          onValueChange={(value) => setLanguage(value as "en" | "am")}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="am">አማርኛ</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="inline-flex items-start p-3 bg-blue-50/80 rounded-lg border border-blue-200 mb-4 space-x-3">
        <IconInfoCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <span className="text-blue-800 text-sm leading-snug">
          {language === "en"
            ? "You can find this information on your vehicle registration card"
            : "እነዚህን መረጃዎች በመኪናዎ የምዝገባ ካርድ ላይ ማግኘት ይችላሉ።"}
        </span>
      </div>

      {/* Plate Number Input */}
      <CardHeader>
        <CardTitle>{language === "en" ? "Plate Number" : "የሰሌዳ ቁጥር"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder={language === "en" ? "Plate Number" : "የሰሌዳ ቁጥር"}
          value={vehicleDetails.plateNumber}
          onChange={(e) =>
            setVehicleDetails({
              ...vehicleDetails,
              plateNumber: e.target.value,
            })
          }
        />
      </CardContent>

      {/* VIN Input */}
      <CardHeader>
        <CardTitle>
          {language === "en" ? "Chassis Number" : " የሻንሲ ቁጥር"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder={
            language === "en" ? "Enter 17-character VIN" : "17-ቁልፍ ቪአይን ያስገቡ"
          }
          value={vehicleDetails.vin}
          onChange={(e) =>
            setVehicleDetails({ ...vehicleDetails, vin: e.target.value })
          }
        />
      </CardContent>
      {/* Engine Number Input */}
      <CardHeader>
        <CardTitle>
          {language === "en" ? "Engine Number" : "የሞተር ቁጥር"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder={language === "en" ? "Engine Number" : "የሞተር  ቁጥር"}
          value={vehicleDetails.engineNumber}
          onChange={(e) =>
            setVehicleDetails({
              ...vehicleDetails,
              engineNumber: e.target.value,
            })
          }
        />
      </CardContent>

      {/* Make (Company) Select */}
      <CardHeader>
        <CardTitle>
          {language === "en" ? "Make (Company)" : "የተሰራበት ድርጅት"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={vehicleDetails.make}
          onValueChange={(value) =>
            setVehicleDetails({ ...vehicleDetails, make: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Make" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Toyota",
              "Honda",
              "Ford",
              "BMW",
              "Mercedes-Benz",
              "Hyundai",
              "Nissan",
              "Volkswagen",
            ].map((make) => (
              <SelectItem key={make} value={make}>
                {make}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>

      {/* Model Input */}
      <CardHeader>
        <CardTitle>{language === "en" ? "Model" : "ሞዴል"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder={language === "en" ? "Model" : "ሞዴል"}
          value={vehicleDetails.model}
          onChange={(e) =>
            setVehicleDetails({ ...vehicleDetails, model: e.target.value })
          }
        />
      </CardContent>

      {/* Engine Capacity (CC) Select */}
      <CardHeader>
        <CardTitle>
          {language === "en" ? "Engine Capacity (CC)" : "የሞተር ችሎታ"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={vehicleDetails.engineCapacity}
          onValueChange={(value) =>
            setVehicleDetails({ ...vehicleDetails, engineCapacity: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Engine Capacity" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Below 1600 CC",
              "Between 1600cc and 2000 CC",
              "Between 2000cc and 3000 CC",
              "Between 3000cc and 4000 CC",
              "Above 4000 CC",
            ].map((capacity) => (
              <SelectItem key={capacity} value={capacity}>
                {capacity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
      {/* Year of Manufacture Select */}
      <CardHeader>
        <CardTitle>
          {language === "en" ? "Year of Manufacture" : "የተሰራበት ዘመን"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={vehicleDetails.year}
          onValueChange={(value) =>
            setVehicleDetails({ ...vehicleDetails, year: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            {["2024", "2023", "2022", "2021"].map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </div>
  );
}
