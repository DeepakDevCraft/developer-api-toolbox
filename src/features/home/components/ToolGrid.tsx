import { tools } from "@/constants/tools";

import ToolCard from "./ToolCard";

export default function ToolGrid() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">
          Popular Tools
        </h2>

        <p className="text-muted-foreground">
          Everything you need for day-to-day development.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
          />
        ))}
      </div>
    </section>
  );
}