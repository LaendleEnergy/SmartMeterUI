import Navigation from "./components/navigation/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LaendleEnergy",
  description: "Smart meter project, FHV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}