import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="space-y-6">
      <Badge>Developer Tools</Badge>

      <div className="space-y-4">
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight">
          Everything developers need,
          <br />
          in one place.
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground">
          A collection of modern developer utilities designed
          for speed, simplicity, and productivity.
        </p>
      </div>
    </section>
  );
}