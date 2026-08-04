// navigation.ts
import {
 Home
} from "lucide-react";
import { tools } from "./tools";

export const navigation = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  ...tools,
];