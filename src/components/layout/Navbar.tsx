import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import ThemeToggle from '../common/ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
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