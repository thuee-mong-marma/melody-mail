import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomAlertProps {
  title: string;
  description: string;
  className?: string;
}

const CustomAlert = ({ title, description, className }: CustomAlertProps) => {
  return (
    <Alert className={cn("bg-gray-500 text-white space-y-2", className)}>
      <AlertTitle className="flex items-center gap-2">
        <Info className="w-5 h-5" />
        <span className="text-md sm:text-lg font-bold">{title}</span>
      </AlertTitle>
      <AlertDescription className="text-xs sm:text-sm">{description}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
