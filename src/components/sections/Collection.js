import { siteConfig } from "@/content/site.config";
import RevealSection from "@/components/ui/RevealSection";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { cn } from "@/lib/utils";

// ربط كل قطعة باسمها بصورتها الفعلية — يُحدَّث هنا فقط عند تغيير أي صورة لاحقًا
const COLLECTION_MEDIA = {
  "عنبر الديوان": {
    src: "/images/collection-amber-diwan.jpg",
    alt: "زجاجة عطر عنبري بغطاء نحاسي منقوش محاطة بقطع عود خام",
  },
  "عود الملوك": {
    src: "/images/collection-oud-moluk.jpg",
    alt: "قطع عود خام متفرقة",
    // خلفية الصورة الأصلية بيضاء — فينيت مؤقت لدمجها بالأجواء الداكنة لحين توفر بديل بخلفية داكنة
    vignette: true,
  },
  "بخور الحرملك": {
    src: "/images/collection-bakhoor-harimlek.jpg",
    alt: "مبخرة نحاسية يتصاعد منها دخان كثيف بجانب وعاء من رقائق البخور",
  },
};

/**
 * قسم لمحة من المجموعة — 2-3 قطع مختارة فقط، معروضة بشكل كبير وفخم.
 * هذا قالب هوية لا قالب منتجات: لا شبكة كثيفة، ولا بطاقات متطابقة صغيرة.
 * الاتجاه يتبادل بين قطعة وأخرى، ولمسة العنابي تُستخدم هنا فقط كفاصل نادر.
 */
export default function Collection() {
  const { eyebrow, title, intro, items } = siteConfig.collection;

  return (
    <section id="collection" className="scroll-mt-20 bg-oud-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealSection className="mx-auto max-w-2xl text-center">
          <span className="text-sm text-oud-brown/60">{eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl text-oud-dark sm:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-oud-dark/60">{intro}</p>
        </RevealSection>

        <div className="mt-20 flex flex-col gap-24 sm:mt-24 sm:gap-28">
          {items.map((item, i) => {
            const imageFirst = i % 2 === 0;
            const media = COLLECTION_MEDIA[item.name];

            return (
              <RevealSection key={item.name} delay={0.05}>
                <div className="grid items-center gap-10 md:grid-cols-12 md:gap-10">
                  <div
                    className={cn(
                      "md:col-span-7",
                      imageFirst ? "md:order-1" : "md:order-2"
                    )}
                  >
                    {media && (
                      <PhotoFrame
                        src={media.src}
                        alt={media.alt}
                        vignette={media.vignette}
                        aspect="aspect-[4/5] sm:aspect-[16/11]"
                      />
                    )}
                  </div>

                  <div
                    className={cn(
                      "md:col-span-5",
                      imageFirst ? "md:order-2" : "md:order-1"
                    )}
                  >
                    <span className="block h-px w-10 bg-oud-maroon/60" />
                    <h3 className="mt-5 font-display text-3xl text-oud-dark sm:text-4xl">
                      {item.name}
                    </h3>
                    <p className="mt-5 max-w-[42ch] text-base leading-loose text-oud-dark/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
