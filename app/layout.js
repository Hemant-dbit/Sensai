import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sensai - AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: "dark",
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={` ${inter.className} `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors  />
            {/* footer */}
            <footer className="bg-black border-t border-gray-800 text-muted-foreground">
              <div className="container mx-auto px-4 py-12 text-center">
                <h3 className="text-white text-xl font-bold mb-2">SensAI</h3>
                <p className="text-sm max-w-xl mx-auto">
                  Your AI-powered career accelerator. Master interviews, grow
                  your skills, and land your dream role with confidence.
                </p>
              </div>
              <div className="0 text-center text-xs py-4">
                © {new Date().getFullYear()} SensAI. All rights reserved.
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
