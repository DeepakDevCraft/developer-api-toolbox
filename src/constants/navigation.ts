// navigation.ts
import {
 Home,Binary
} from "lucide-react";
import { tools } from "./tools";

export const navigation = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
  title: "Base64 Encoder",
  href: "/tools/base64",
  icon: Binary,
},
  ...tools,
];