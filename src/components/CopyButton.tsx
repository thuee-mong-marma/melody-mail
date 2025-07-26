import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton = ({ text, className }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch(() => {
        toast.error("Failed to copy code");
      });
  };

  return (
    <Button onClick={handleCopy} className={className}>
      {isCopied ? <Check /> : <Copy />}
    </Button>
  );
};

export default CopyButton;