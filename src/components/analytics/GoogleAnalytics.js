import Script from "next/script";

// معرّف قياس Google Analytics (GA4)
const GA_MEASUREMENT_ID = "G-BQRH6EY4G5";

/**
 * Google Analytics (gtag.js) عبر next/script بدل <script> عادي —
 * يحمّل بعد تفاعلية الصفحة (afterInteractive) فما يؤخر عرض المحتوى الأساسي.
 * أضفه مرة واحدة فقط داخل body في app/layout.js (انظر التعليمات المرفقة).
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
