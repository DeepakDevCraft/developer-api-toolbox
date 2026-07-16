import Link from "next/link";
import { Wrench } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-opacity hover:opacity-80"
    >
      <Wrench className="h-6 w-6 text-primary" />

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight">
          Developer API Toolbox
        </span>

        <span className="text-xs text-muted-foreground">
          Everything developers need
        </span>
      </div>
    </Link>
  );
}