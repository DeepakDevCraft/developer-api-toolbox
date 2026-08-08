import { siteConfig } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <p className="text-sm font-medium text-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          <p className="text-xs text-muted-foreground">
            Version 1.0.0
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-sm text-muted-foreground">
            Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}