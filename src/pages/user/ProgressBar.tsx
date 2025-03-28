import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  const progressValue = (step / (totalSteps - 1)) * 100;

  return <Progress value={progressValue} className="mb-4 h-2" />;
}
