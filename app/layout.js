import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auralytix",
  description: "AI Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />
        <footer className="bg-emerald-600 py-12">
          <div className="container mx-auto px-4 text-center text-gray-900">
            <p>Made with 💗 by Us</p>
          </div>
        </footer>
      </body>
    </html>
  </ClerkProvider>
  );
}
