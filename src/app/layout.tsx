import type { Metadata } from "next";
import "./../../public/globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { poppins, grapeNuts } from "@/lib/fonts";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Melody Mail",
  description:
    "Melody Mail is an anonymous message board platform where you share your unspoken words or thoughts to your special or loved ones through songs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", poppins.className, grapeNuts.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Navbar />
          <main className="max-w-screen-lg mx-auto p-4 min-h-[calc(100vh-66px-93px)]">
            {children}
          </main>
          <Toaster richColors position="top-center"/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
