import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site.config";
import RevealSection from "@/components/ui/RevealSection";

/**
 * قسم Hero — تخطيط منقسم لنصفين بدل صورة/فيديو بعرض الشاشة كاملاً:
 * - نصف: فيديو دخان العود، مُدرَّج لونيًا (color-graded) عبر CSS ليتماشى مع هوية النحاس/البني
 *   بدل ألوانه الخام، مع تلاشٍ ناعم عند حافته الداخلية بدل خط فاصل حاد.
 * - نصف: العنوان والجملة التعريفية، فوق طبقة أجواء (تدرّجات) هادئة.
 * - فاصل زخرفي رفيع بالمنتصف (خط نحاسي + معينان متداخلان) بروح الزخرفة الهندسية العربية.
 * على الجوال: الفيديو يعلو (ارتفاع محدود) والنص يليه أسفله.
 */
export default function Hero() {
  const { title, tagline, scrollHint, videoAlt } = siteConfig.hero;

  return (
    <section id="hero" className="relative scroll-mt-20 overflow-hidden bg-oud-dark">
      <div className="grid md:min-h-screen md:grid-cols-2">
        {/* عمود النص — أول عنصر في DOM فيظهر يمين الواجهة (RTL)، ويأتي ثانيًا بصريًا على الجوال */}
        <div className="relative order-2 flex items-center justify-center px-6 py-20 sm:px-10 md:order-none md:py-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 28%, rgb(var(--color-oud-copper) / 0.14), transparent 45%), radial-gradient(circle at 25% 90%, rgb(var(--color-oud-brown) / 0.85), transparent 55%)",
            }}
          />

          <RevealSection className="relative z-10 max-w-md text-center md:text-right">
            <h1 className="font-display text-6xl leading-[1.15] text-oud-ivory sm:text-7xl">
              {title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-oud-ivory/75 sm:text-xl">
              {tagline}
            </p>
          </RevealSection>
        </div>

        {/* عمود الفيديو — ثانٍ في DOM فيظهر يسار الواجهة (RTL)، ويعلو بصريًا على الجوال */}
        <div className="relative order-1 h-[46vh] sm:h-[54vh] md:order-none md:h-auto">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "sepia(0.4) saturate(1.5) brightness(0.55) contrast(1.15)" }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/videos/hero-incense-poster.jpg"
            aria-label={videoAlt}
          >
            <source src="/videos/hero-incense.mp4" type="video/mp4" />
          </video>

          {/* تعتيم عام موحِّد يربط لون الفيديو الخام بهوية الموقع */}
          <div className="absolute inset-0 bg-oud-dark/30" />

          {/* تلاشي علوي خفيف تحت الهيدر الثابت */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-oud-dark to-transparent" />

          {/* تلاشي أسفل الفيديو على الجوال — يذوب داخل القسم النصي الذي يليه */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-oud-dark to-transparent md:hidden" />

          {/* تلاشي الحافة الداخلية على الشاشات الكبيرة — يذوب الفيديو نحو منتصف الواجهة بلا خط حاد */}
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-oud-dark md:block" />
        </div>
      </div>

      {/* الفاصل الزخرفي المركزي — خط نحاسي رفيع + شكل هندسي بسيط بروح الزخرفة العربية */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-oud-copper/35 to-transparent" />
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <rect
            x="9"
            y="9"
            width="16"
            height="16"
            transform="rotate(45 17 17)"
            stroke="rgb(var(--color-oud-copper))"
            strokeOpacity="0.75"
            strokeWidth="1"
          />
          <rect
            x="14"
            y="14"
            width="6"
            height="6"
            transform="rotate(45 17 17)"
            fill="rgb(var(--color-oud-copper))"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-oud-ivory/40 md:bottom-8">
        <span className="text-xs">{scrollHint}</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
