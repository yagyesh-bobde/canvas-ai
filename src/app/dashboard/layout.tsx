import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "~/components/Sidebar/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "Canvas-AI",
    template: "%s | Canvas-AI",
  },
  description: "A online art evaluator and marketplace for all art fanatics",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="flex w-screen">
        <Sidebar />
        {children}
      </main>
  );
}
