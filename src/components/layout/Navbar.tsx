import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  return (
   <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
     <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <div className="flex items-center gap-4">
  <SearchBar />
  {/* ThemeToggle */}
  <ThemeToggle />
</div>
      </div>
    </header>
  );
}