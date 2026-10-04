import { cn } from "@/lib/utils";

/**
 * حقل إدخال أساسي (input واحد السطر).
 * props:
 * - label: نص التسمية فوق الحقل (اختياري)
 * - id: مطلوب إذا مررت label لربطها بـ htmlFor
 * - باقي الـ props (name, type, value, onChange, placeholder...) تُمرَّر مباشرة
 */
export function Input({ label, id, className, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-oud-ivory/80">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full border border-oud-copper/25 bg-oud-ivory/[0.03] px-4 py-3 text-sm text-oud-ivory placeholder:text-oud-ivory/35 focus:outline-none focus:border-oud-copper/70 focus:bg-oud-ivory/[0.05] transition-colors",
          className
        )}
        {...props}
      />
    </div>
  );
}

/**
 * حقل نص متعدد الأسطر (textarea) بنفس أسلوب Input.
 */
export function Textarea({ label, id, className, rows = 5, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-oud-ivory/80">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={cn(
          "w-full border border-oud-copper/25 bg-oud-ivory/[0.03] px-4 py-3 text-sm text-oud-ivory placeholder:text-oud-ivory/35 focus:outline-none focus:border-oud-copper/70 focus:bg-oud-ivory/[0.05] transition-colors resize-none",
          className
        )}
        {...props}
      />
    </div>
  );
}
