import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

// ثلاث تدرّجات دخان/ضوء مختلفة لإعطاء كل لوحة صورة طابعًا مختلفًا قليلاً عن الأخرى
const ATMOSPHERES = {
  1: "radial-gradient(circle at 25% 20%, rgb(var(--color-oud-copper) / 0.22), transparent 55%), radial-gradient(circle at 80% 75%, rgb(var(--color-oud-brown) / 0.9), transparent 60%), radial-gradient(circle at 50% 100%, rgb(var(--color-oud-maroon) / 0.15), transparent 50%)",
  2: "radial-gradient(circle at 75% 15%, rgb(var(--color-oud-copper) / 0.18), transparent 50%), radial-gradient(circle at 20% 80%, rgb(var(--color-oud-brown) / 0.95), transparent 65%), radial-gradient(circle at 90% 90%, rgb(var(--color-oud-dark) / 0.6), transparent 55%)",
  3: "radial-gradient(circle at 50% 10%, rgb(var(--color-oud-copper) / 0.2), transparent 45%), radial-gradient(circle at 15% 60%, rgb(var(--color-oud-maroon) / 0.18), transparent 55%), radial-gradient(circle at 85% 85%, rgb(var(--color-oud-brown) / 0.9), transparent 60%)",
};

/**
 * لوحة صورة مؤقتة بطابع بصري متعمّد (لا أيقونة "صورة معطوبة").
 * تُستخدم مكان الصور الفعلية إلى حين تصويرها، وتحمل ملاحظة تصوير نصية مختصرة
 * توضّح للمصوّر/العميل الصورة المطلوبة تحديدًا.
 *
 * props:
 * - brief: نص ملاحظة التصوير (يظهر أسفل اللوحة)
 * - variant: 1 | 2 | 3 — لتنويع تدرّج الأجواء بين اللوحات
 * - aspect: كلاس نسبة العرض للارتفاع (مثال: "aspect-[4/5]")
 */
export default function ImageFrame({ brief, variant = 1, aspect = "aspect-[4/5]", className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-oud-copper/25 bg-oud-dark",
        aspect,
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgb(var(--color-oud-dark))", backgroundImage: ATMOSPHERES[variant] }}
      />

      {/* نسيج دقيق يكسر استواء التدرّج */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgb(var(--color-oud-ivory)) 0px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-oud-dark/90 via-oud-dark/10 to-transparent p-5 sm:p-6">
        <div className="flex items-start gap-2.5">
          <Camera size={16} className="mt-0.5 shrink-0 text-oud-copper/80" />
          <p className="text-xs leading-relaxed text-oud-ivory/70 sm:text-[13px]">{brief}</p>
        </div>
      </div>
    </div>
  );
}
