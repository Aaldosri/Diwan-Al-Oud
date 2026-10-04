import { Aref_Ruqaa, IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { siteConfig } from "@/content/site.config";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

// خط العناوين — طابع خط عربي كلاسيكي أصيل، للعناوين الكبيرة فقط (استخدم font-display)
const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

// خط النص العادي — نظيف وواضح للفقرات والمحتوى العام (استخدم font-arabic)
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

// خط لاتيني مساند (أرقام/كلمات إنجليزية داخل المحتوى)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

export const metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.url,
    siteName: siteConfig.meta.name,
    images: [{ url: siteConfig.meta.ogImage }],
    locale: siteConfig.meta.locale,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${arefRuqaa.variable} ${ibmPlexSansArabic.variable} ${inter.variable} font-arabic antialiased bg-oud-dark text-oud-ivory`}
      >
        <GoogleAnalytics />

        {children}
      </body>
    </html>
  );
}
