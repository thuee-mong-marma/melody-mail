import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
        toast({
          title: "Error",
          description: "Failed to copy code",
          variant: "destructive",
        });
      });
  };

  return (
    <Button onClick={handleCopy} className={className}>
      {isCopied ? <Check /> : <Copy />}
    </Button>
  );
};

export default CopyButton;