import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeProvider";
import { Anton, Poppins, Impact } from "next/font/google";
import Footer from "../components/Footer/Footer";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import UserAgentProvider from "../contexts/UserAgentProvider";
import { BreakpointIndicator } from "../components/Responsive/BreakpointIndicator";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";
import { DEFAULT_LOCALE, normalizeLocale } from "../lib/locale";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.box-com.com"),
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
  const requestHeaders = await headers();
  const reqUserAgent = userAgent({
    headers: requestHeaders,
  });
  const locale = normalizeLocale(
    requestHeaders.get("x-locale") || DEFAULT_LOCALE
  );

  return (
    <html
      lang={locale}
      className={`${poppins.className} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json?v=2025-11-04" />
        <link
          rel="preload"
          as="image"
          href="/images/homepage/girl-with-glasses-800.webp"
          imageSrcSet="/images/homepage/girl-with-glasses-800.webp 800w, /images/homepage/girl-with-glasses-q68.webp 1280w"
          imageSizes="(max-width: 767px) 100vw, 60vw"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <UserAgentProvider reqUserAgent={reqUserAgent}>
            <main>{children}</main>
            <Footer locale={locale} />
            <BreakpointIndicator />
            <GoogleAnalytics />
          </UserAgentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
