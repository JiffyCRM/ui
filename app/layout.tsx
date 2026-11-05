import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitScript = `(function(){try{var key="jiffy-theme";var stored=null;try{stored=window.localStorage.getItem(key);}catch(e){}var theme=stored==="light"||stored==="dark"||stored==="system"?stored:"system";var dark=false;if(theme==="system"){if(typeof window.matchMedia==="function"){try{dark=window.matchMedia("(prefers-color-scheme: dark)").matches;}catch(e){dark=true;}}else{dark=true;}}else{dark=theme==="dark";}var root=document.documentElement;root.classList.add(dark?"dark":"light");root.style.colorScheme=dark?"dark":"light";}catch(e){document.documentElement.classList.add("dark");}})();`;

export const metadata: Metadata = {
  title: "JiffyCRM",
  description: "Customer relationship platform",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
