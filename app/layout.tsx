import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "PescGelo - Qualidade e Rapidez",
  description: "Fornecedor de gelo escama de alta qualidade para peixarias, embarcações, indústrias e outros segmentos que necessitam de conservação refrigerada.",
  icons: {
    icon: '/pescgelo.jpg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", poppins.className)}>
       
          <Navbar />

          {children}

          <FooterSection />
        
      </body>
    </html>
  );
}
