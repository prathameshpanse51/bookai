import type { Metadata } from "next";
// import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const myFont = localFont({ src: "./ClashDisplay-Medium.woff2" });

export const metadata: Metadata = {
  title: "BookAI",
  description: "Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn("min-h-screen bg-background", myFont.className)}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
