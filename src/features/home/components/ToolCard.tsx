import Link from "next/link";

import  { Tool } from "@/types/tool";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link href={tool.href}>
      <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>

          <CardTitle>{tool.title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            {tool.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}