import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/styles";
import { Button } from "@/components/ui/button";


interface NavProps {
  links: {
    title: string;
    label?: string;
    icon?: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

export function Nav({ links }: NavProps) {
  return (
    <nav className="container flex flex-row py-5 gap-1">
      <div className="w-1/4 flex items-center justify-center">
        <p>sadsadsadas</p>
      </div>
      <div className="w-3/4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </nav>
  );
}
