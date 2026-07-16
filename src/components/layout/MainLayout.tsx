import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="mx-auto flex w-full max-w-7xl flex-1">
        <Sidebar />

        <main className="flex-1 p-6">{children}</main>
      </div>

      <Footer />
    </div>
  );
}