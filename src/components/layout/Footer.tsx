import { siteConfig } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <p className="text-sm text-muted-foreground">
          Built with ❤️ using Next.js
        </p>
      </div>
    </footer>
  );
}