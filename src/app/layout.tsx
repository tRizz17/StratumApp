import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import { FeedResetProvider } from "@/lib/contexts/feed-reset-context";

export const metadata: Metadata = {
  title: "Stratum",
  description: "Stratum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FeedResetProvider>
          <NavBar />
          {children}
        </FeedResetProvider>
      </body>
    </html>
  );
}
