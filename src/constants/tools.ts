import {
  Binary,
  Braces,
  Clock3,
  FileJson,
  KeyRound,
  Link,
  Fingerprint
} from "lucide-react";

import type { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format, validate, and minify JSON effortlessly.",
    href: "/tools/json-formatter",
    icon: FileJson,
    category: "Formatter",
    featured: true,
  },
  {
    id: "jwt-decoder",
    title: "JWT Decoder",
    description: "Decode JWT tokens instantly without sending data to a server.",
    href: "/tools/jwt-decoder",
    icon: KeyRound,
    category: "Security",
    featured: true,
  },
  {
    id: "uuid-generator",
    title: "UUID Generator",
    description: "Generate RFC-compliant UUID v4 values.",
    href: "/tools/uuid-generator",
    icon: Fingerprint,
    category: "Utilities",
    featured: true,
  },
  {
    id: "base64",
    title: "Base64 Encoder / Decoder",
    description: "Encode and decode Base64 strings quickly.",
    href: "/tools/base64",
    icon: Binary,
    category: "Encoding",
    featured: true,
  },
  {
    id: "timestamp",
    title: "Timestamp Converter",
    description: "Convert Unix timestamps into human-readable dates.",
    href: "/tools/timestamp",
    icon: Clock3,
    category: "Date & Time",
    featured: true,
  },
  {
  id: "url-encoder",
  title: "URL Encoder / Decoder",
  description: "Encode and decode URLs for safe transmission over the web.",
  href: "/tools/url-encoder",
  icon: Link,
  category: "Encoding",
  featured: true,
},
];