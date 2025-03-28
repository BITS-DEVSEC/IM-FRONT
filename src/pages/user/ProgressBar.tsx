import { Progress } from "@/components/ui/progress"; // Import shadCN's Progress component

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  const progressValue = (step / (totalSteps - 1)) * 100;

  return (
    <Progress
      value={progressValue} // Progress value as a percentage
      className="mb-4 h-2" // Tailwind classes for margin-bottom and height
    />
  );
}
