import { cn } from "@/lib/utils";

/**
 * مكون بطاقة محايد التصميم — إطار بسيط قابل للتوسع.
 * استخدمه كحاوية لأي محتوى (خدمة، منتج، مقالة...) في القوالب لاحقًا.
 */
export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-200 bg-white p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
