import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="space-y-6">
      <Badge variant="secondary">
  🚀 Free Developer Tools
</Badge>

      <div className="space-y-4">
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight">
         Free Developer API Toolbox
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground">
          Format JSON, decode JWTs, generate UUIDs, convert Unix timestamps, encode Base64, and more—all in one place.
        </p>
      </div>
    </section>
  );
}