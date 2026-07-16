interface ToolHeaderProps {
  title: string;
  description: string;
}

export default function ToolHeader({
  title,
  description,
}: ToolHeaderProps) {
  return (
    <header className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="text-lg text-muted-foreground">
        {description}
      </p>
    </header>
  );
}