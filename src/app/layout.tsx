import ContainerProvider from "@/context/ContainerProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderContext from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#eef4f7] dark:bg-dark`}
      >
        <ThemeProviderContext>
          <ContainerProvider>
            {children}
          </ContainerProvider>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
