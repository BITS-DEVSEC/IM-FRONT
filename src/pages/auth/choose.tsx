import { ModeToggle } from "@/components/mode-toggle";
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Rainbow,
  Ruler,
  NetworkIcon,
  WatchIcon,
  PenIcon,
} from "lucide-react";

const customizationOptions = [
  {
    id: "colors",
    title: "Colors", 
    icon: <Ruler />,
  },
  {
    id: "emojis",
    title: "Emojis",
    icon: <NetworkIcon />,
  },
  {
    id: "theming",
    title: "Theming",
    icon: <Rainbow />,
  },
];

export default function Choose() {
  const [selectedOptions, setSelectedOptions] = useState({
    colors: true,
    shadows: false,
    typography: false,
    spacing: false,
    emojis: true,
    theming: false,
    user: false,
  });

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

    return (
      <>
        <header className="flex h-16 items-center gap-2 px-4">
          <ModeToggle />
        </header>
        <div className="flex flex-col justify-center items-center min-h-screen p-6">
          <h1 className="text-2xl font-bold mb-4">Select Your Role</h1>
          <p className="text-center max-w-2xl text-gray-600 mb-6">
            Insurance plays a vital role in financial security, offering
            protection against unexpected risks and losses. Whether you are an
            insurer managing policies, an agent assisting clients, or a user
            exploring options, insurance helps safeguard individuals and
            businesses from financial setbacks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-4xl">
            <Card
              className={`relative cursor-pointer p-4 w-48 h-48 flex flex-col items-center justify-center gap-3 transition-all ring-2 rounded-lg ${
                selectedOptions.insurer
                  ? "border-primary ring-primary bg-primary/10 dark:bg-primary/20"
                  : "ring-gray-300 dark:ring-gray-600"
              }`}
              onClick={() =>
                setSelectedOptions({
                  insurer: true,
                  agent: false,
                  user: false,
                })
              }
            >
              <div className="absolute right-3 top-3">
                <Checkbox
                  id="checkbox-insurer"
                  checked={selectedOptions.insurer}
                  onCheckedChange={() =>
                    setSelectedOptions({
                      insurer: true,
                      agent: false,
                      user: false,
                    })
                  }
                  className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground rounded-full"
                />
              </div>
              <div
                className={`text-3xl ${
                  selectedOptions.insurer
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <NetworkIcon />
              </div>
              <h3
                className={`text-base font-semibold text-center ${
                  selectedOptions.insurer
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Insurer
              </h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                As an insurer, you oversee risk management and provide coverage
                solutions to clients.
              </p>
            </Card>
            <Card
              className={`relative cursor-pointer p-4 w-48 h-48 flex flex-col items-center justify-center gap-3 transition-all ring-2 rounded-lg ${
                selectedOptions.agent
                  ? "border-primary ring-primary bg-primary/10 dark:bg-primary/20"
                  : "ring-gray-300 dark:ring-gray-600"
              }`}
              onClick={() =>
                setSelectedOptions({
                  insurer: false,
                  agent: true,
                  user: false,
                })
              }
            >
              <div className="absolute right-3 top-3">
                <Checkbox
                  id="checkbox-agent"
                  checked={selectedOptions.agent}
                  onCheckedChange={() =>
                    setSelectedOptions({
                      insurer: false,
                      agent: true,
                      user: false,
                    })
                  }
                  className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground rounded-full"
                />
              </div>
              <div
                className={`text-3xl ${
                  selectedOptions.agent
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <PenIcon />
              </div>
              <h3
                className={`text-base font-semibold text-center ${
                  selectedOptions.agent
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Agent
              </h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                As an agent, you help clients understand and purchase suitable
                insurance policies.
              </p>
            </Card>
            <Card
              className={`relative cursor-pointer p-4 w-48 h-48 flex flex-col items-center justify-center gap-3 transition-all ring-2 rounded-lg ${
                selectedOptions.user
                  ? "border-primary ring-primary bg-primary/10 dark:bg-primary/20"
                  : "ring-gray-300 dark:ring-gray-600"
              }`}
              onClick={() =>
                setSelectedOptions({
                  insurer: false,
                  agent: false,
                  user: true,
                })
              }
            >
              <div className="absolute right-3 top-3">
                <Checkbox
                  id="checkbox-user"
                  checked={selectedOptions.user}
                  onCheckedChange={() =>
                    setSelectedOptions({
                      insurer: false,
                      agent: false,
                      user: true,
                    })
                  }
                  className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground rounded-full"
                />
              </div>
              <div
                className={`text-3xl ${
                  selectedOptions.user
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <WatchIcon />
              </div>
              <h3
                className={`text-base font-semibold text-center ${
                  selectedOptions.user
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                User
              </h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                As a user, you can explore different insurance options and
                secure your future.
              </p>
            </Card>
          </div>
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition cursor-pointer">
            <a href="/register">Next</a>
          </button>
        </div>
      </>
    );
};
