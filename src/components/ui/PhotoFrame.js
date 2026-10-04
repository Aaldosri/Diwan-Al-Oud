import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * إطار موحّد لعرض الصور الفعلية داخل القالب.
 * يضيف طبقتين خفيفتين فوق كل صورة بغض النظر عن مصدرها (ستوك متفرّق):
 * 1) تدرّج خفيف أعلى/أسفل يربطها بخلفية القسم بدل حافة حادة.
 * 2) حلقة حدّ نحاسية رفيعة جداً تمنحها طابع "اللوحة المؤطّرة" بدل صورة خام ملصقة.
 *
 * props:
 * - vignette: فينيت داكن أقوى عند الحواف — للصور ذات خلفية فاتحة/بيضاء لا تناسب الأجواء الداكنة
 *   (حل مؤقت لدمجها بصرياً؛ الأفضل استبدالها بصورة بخلفية داكنة أصلاً عند توفرها)
 */
export default function PhotoFrame({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className,
  objectPosition = "center",
  vignette = false,
  priority = false,
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-oud-copper/25 bg-oud-dark",
        aspect,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 50vw, 100vw"
        style={{
          objectFit: "cover",
          objectPosition,
          filter: vignette ? "brightness(0.92) saturate(1.05)" : undefined,
        }}
      />

      {/* تدرّج توحيد خفيف — يربط الصورة بخلفية القسم */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-oud-dark/20 via-transparent to-oud-dark/10" />

      {/* فينيت إضافي أقوى للصور ذات الخلفية الفاتحة (حل مؤقت) */}
      {vignette && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, transparent 42%, rgb(var(--color-oud-dark) / 0.5) 100%)",
          }}
        />
      )}

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-oud-copper/10" />
    </div>
  );
}
