import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeProvider";
import { Anton, Poppins, Impact } from "next/font/google";
import Footer from "../components/Footer/Footer";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import UserAgentProvider from "../contexts/UserAgentProvider";
import { BreakpointIndicator } from "../components/Responsive/BreakpointIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boxcom",
  description: "Boxcom",
  icons: {
    icon: [
      {
        url: "/favicon-96x96.png?v=2025-11-03",
        sizes: "96x96",
        type: "image/png",
      },
      // { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png?v=2025-11-03",
  },
  appleWebApp: {
    title: "Boxcom",
  },
};

// const anton = Anton({
//   subsets: ["latin"],
//   weight: "400",
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({ children }) {
  const reqUserAgent = userAgent({
    headers: await headers(),
  });

  return (
    <ThemeProvider>
      <html lang="en" className={poppins.className}>
        <head>
          <link rel="manifest" href="/manifest.json?v=2025-11-04" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <UserAgentProvider reqUserAgent={reqUserAgent}>
            {children}
            <Footer />
            <BreakpointIndicator />
          </UserAgentProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
