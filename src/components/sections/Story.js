import { siteConfig } from "@/content/site.config";
import RevealSection from "@/components/ui/RevealSection";
import PhotoFrame from "@/components/ui/PhotoFrame";

/**
 * قسم الحكاية — نص سردي عن تاريخ البيت وفلسفته، مقروناً بصورة كبيرة.
 * تخطيط غير متماثل: النص في العمود الأضيق (يمين)، الصورة أكبر وتنزل بمسافة إضافية (يسار).
 */
export default function Story() {
  const { eyebrow, title, paragraphs } = siteConfig.story;

  return (
    <section id="story" className="scroll-mt-20 bg-oud-ivory py-24 sm:py-32">
      <RevealSection className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* النص — عمود أضيق، محاذاة يمين (بداية السطر في RTL) */}
          <div className="md:col-span-5 md:pt-4">
            <span className="text-sm text-oud-brown/60">{eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl text-oud-dark sm:text-5xl">{title}</h2>
            <div className="mt-7 flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="max-w-[38ch] text-base leading-loose text-oud-dark/75">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* الصورة — عمود أوسع، منزاحة للأسفل لكسر التناظر */}
          <div className="md:col-span-7 md:mt-16">
            <PhotoFrame
              src="/images/story-hand-burner.jpg"
              alt="يد تحمل مبخرة يتصاعد منها الدخان، بزيّ تراثي دافئ اللون"
              aspect="aspect-[5/6] sm:aspect-[4/5]"
              objectPosition="center 35%"
            />
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
