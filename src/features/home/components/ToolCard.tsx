import Link from "next/link";

import  { Tool } from "@/types/tool";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link href={tool.href}>
      <Card className="h-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>

          <CardTitle>{tool.title}</CardTitle>
          <Badge variant="secondary" className="mt-2 w-fit">
  {tool.category}
</Badge>

{tool.featured && (
  <Badge className="mt-2 w-fit">
    ⭐ Featured
  </Badge>
)}
        </CardHeader>

       <CardContent className="flex flex-1 flex-col">
          <p className="flex-1 text-sm text-muted-foreground leading-6">
  {tool.description}
</p>
        </CardContent>
      </Card>
    </Link>
  );
}