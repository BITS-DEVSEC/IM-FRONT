import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TypographyH3 } from "@/components/ui/typography";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { IconInfoCircle } from "@tabler/icons-react";

interface VehicleDetails2 {
  carPrice: string;
  passengers: string;
  vehicleType: string;
  vehicleUsage: string;
  goods: string;
}

interface StepVehicleDetails2Props {
  vehicleDetails2: VehicleDetails2;
  setVehicleDetails2: (details: VehicleDetails2) => void;
}

export default function StepVehicleDetails2({
  vehicleDetails2,
  setVehicleDetails2,
}: StepVehicleDetails2Props) {
  const vehicleTypes = [
    "Private Vehicle",
    "Minibus",
    "Bus",
    "Truck/Trailer",
    "Tanker",
    "Taxi",
    "Motorcycle",
    "Three-Wheeled Vehicle",
    "Special Vehicle",
  ];

  const usages = [
    "Private Own Use",
    "Private Business Use",
    "Public Service (With Fare)",
    "Commercial Use (With Hire/Payment)",
  ];

  return (
    <div className="max-w-sm mx-auto space-y-4">
      <TypographyH3 className="mb-4">Vehicle Details</TypographyH3>
      <div className="inline-flex items-start p-3 bg-blue-50/80 rounded-lg border border-blue-200 mb-4 space-x-3">
        <IconInfoCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <span className="text-blue-800 text-sm leading-snug">
          You can find this information on your vehicle registration card
        </span>
      </div>

      {/* Vehicle Type Select */}
      <CardHeader className="p-0">
        <CardTitle>Vehicle Type</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Select
          value={vehicleDetails2.vehicleType}
          onValueChange={(value) =>
            setVehicleDetails2({
              ...vehicleDetails2,
              vehicleType: value,
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select vehicle type" />
          </SelectTrigger>
          <SelectContent>
            {vehicleTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>

      {/* Vehicle Usage Select */}
      <CardHeader className="p-0">
        <CardTitle>Vehicle Usage</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Select
          value={vehicleDetails2.vehicleUsage}
          onValueChange={(value) =>
            setVehicleDetails2({
              ...vehicleDetails2,
              vehicleUsage: value,
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select vehicle usage" />
          </SelectTrigger>
          <SelectContent>
            {usages.map((usage) => (
              <SelectItem key={usage} value={usage}>
                {usage}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>

      {/* Number of Passengers Input */}
      <CardHeader className="p-0">
        <CardTitle>Number of passengers (including driver)</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Input
          placeholder="Enter number of passengers"
          type="number"
          value={vehicleDetails2.passengers}
          onChange={(e) =>
            setVehicleDetails2({
              ...vehicleDetails2,
              passengers: e.target.value,
            })
          }
        />
      </CardContent>

      {/* Car Price Input */}
      <CardHeader className="p-0">
        <CardTitle>Car Price (including accessories)</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Input
          placeholder="Enter car price"
          type="number"
          value={vehicleDetails2.carPrice}
          onChange={(e) =>
            setVehicleDetails2({
              ...vehicleDetails2,
              carPrice: e.target.value,
            })
          }
        />
      </CardContent>

      {/* Goods Input */}
      <CardHeader className="p-0">
        <CardTitle>Goods</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Input
          placeholder="Enter goods capacity"
          type="number"
          value={vehicleDetails2.goods}
          onChange={(e) =>
            setVehicleDetails2({
              ...vehicleDetails2,
              goods: e.target.value,
            })
          }
        />
      </CardContent>
    </div>
  );
}
