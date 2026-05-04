import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-accent/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
