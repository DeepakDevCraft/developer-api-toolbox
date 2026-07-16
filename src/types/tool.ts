import type { LucideIcon } from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  category: string;
  featured?: boolean;
  comingSoon?: boolean;
}