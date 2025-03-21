import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  IconCar,
  IconShieldCheck,
  IconArrowsExchange,
  IconInfoCircle,
} from "@tabler/icons-react";
import { useState } from "react";

type StepSelectInsuranceProps = {
  setInsuranceType: (type: string) => void;
};

const insuranceOptions = [
  {
    value: "own-damage",
    label: { en: "Own Damage", am: "የራስ ጉዳት" },
    description: {
      en: "Covers damages to your car",
      am: "የመኪናዎን ጉዳት ይሸፍናል",
    },
    icon: <IconCar size={24} />,
    details: {
      en: "Own Damage insurance covers repairs or replacement costs for your vehicle in case of accidents, theft, or natural disasters.",
      am: "የራስ ጉዳት ኢንሹራንስ በአደጋዎች፣ በስርቆት ወይም በተፈጥሮ አደጋዎች ምክንያት ለመኪናዎ የጠፈር ወጪዎችን ይሸፍናል።",
    },
  },
  {
    value: "third-party",
    label: { en: "Third Party", am: "ሦስተኛ ወገን" },
    description: {
      en: "Covers damages to others",
      am: "ለሌሎች የሚደርስ ጉዳት ይሸፍናል",
    },
    icon: <IconArrowsExchange size={24} />,
    details: {
      en: "Third Party insurance covers damages or injuries caused to other people or their property by your vehicle.",
      am: "ሦስተኛ ወገን ኢንሹራንስ በመኪናዎ ምክንያት ለሌሎች ሰዎች ወይም ንብረታቸው የሚደርስ ጉዳት ይሸፍናል።",
    },
  },
  {
    value: "comprehensive",
    label: { en: "Comprehensive", am: "ሁለንተናዊ" },
    description: {
      en: "Covers both your car and others",
      am: "ለመኪናዎ እና ለሌሎች ይሸፍናል",
    },
    icon: <IconShieldCheck size={24} />,
    details: {
      en: "Comprehensive insurance provides coverage for damages to your vehicle as well as damages caused to others by your vehicle.",
      am: "ሁለንተናዊ ኢንሹራንስ ለመኪናዎ እና �ሌሎች የሚደርስ ጉዳት ይሸፍናል።",
    },
  },
];

export default function StepSelectInsurance({
  setInsuranceType,
}: StepSelectInsuranceProps) {
  const [selected, setSelected] = useState("own-damage");
  const [language, setLanguage] = useState<"en" | "am">("en"); // Default language is English
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSelection = (value: string) => {
    setSelected(value);
    setInsuranceType(value);
  };

  const handleInfoClick = (details: string) => {
    setModalContent(details); // Set the modal content
    setModalOpen(true); // Open the modal
  };

  return (
    <div className="max-w-sm mx-auto">
      {/* Language Selector and Text */}
      <div className="flex items-center justify-between mb-4">
        <TypographyP> Language/ቋንቋ</TypographyP>
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

      <TypographyH3 className="mb-4">
        {language === "en" ? "Choose Insurance Type" : "የኢንሹራንስ ዓይነት ይምረጡ"}
      </TypographyH3>
      <div className="space-y-4">
        {insuranceOptions.map((option) => (
          <Card
            key={option.value}
            className={`cursor-pointer ${
              selected === option.value ? "border-blue-500" : "border-gray-200"
            }`}
            onClick={() => handleSelection(option.value)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {option.icon}
                  <div>
                    <CardTitle>{option.label[language]}</CardTitle>
                    <CardDescription>
                      {option.description[language]}
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="bg-brown-500 text-black hover:bg-brown-600"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    handleInfoClick(option.details[language]);
                  }}
                >
                  <IconInfoCircle size={16} className="mr-2" />
                  {language === "en" ? "Details" : "ዝርዝሮች"}
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Modal for Details */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {language === "en" ? "Insurance Details" : "የኢንሹራንስ ዝርዝሮች"}
            </DialogTitle>
          </DialogHeader>
          <TypographyP>{modalContent}</TypographyP>
        </DialogContent>
      </Dialog>
    </div>
  );
}
