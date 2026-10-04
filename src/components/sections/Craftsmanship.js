import { siteConfig } from "@/content/site.config";
import RevealSection from "@/components/ui/RevealSection";
import PhotoFrame from "@/components/ui/PhotoFrame";

/**
 * قسم الحرفية — فقرة قصيرة عن طريقة التحضير، مع صورة تفصيلية قريبة (macro).
 * الاتجاه معاكس لقسم الحكاية: الصورة يمين، النص يسار — لكسر التكرار البصري.
 */
export default function Craftsmanship() {
  const { eyebrow, title, paragraph } = siteConfig.craft;

  return (
    <section id="craft" className="scroll-mt-20 bg-oud-brown py-24 sm:py-32">
      <RevealSection className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* الصورة — عمود أوسع، في الأعلى قليلاً هذه المرة */}
          <div className="md:col-span-6">
            <PhotoFrame
              src="/images/craft-macro-chips.jpg"
              alt="قطع عود خام متراصّة يتصاعد منها خيط دخان رفيع على خلفية داكنة"
              aspect="aspect-square sm:aspect-[4/5]"
            />
          </div>

          {/* النص — عمود أضيق، منزاح للأسفل ومحاذٍ لأسفل الصورة */}
          <div className="md:col-span-5 md:col-start-8 md:self-end md:pb-6">
            <span className="text-sm text-oud-copper/70">{eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl text-oud-ivory sm:text-5xl">{title}</h2>
            <p className="mt-7 max-w-[40ch] text-base leading-loose text-oud-ivory/75">
              {paragraph}
            </p>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
