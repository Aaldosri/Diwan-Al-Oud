/**
 * دمج أسماء classes مع تجاهل القيم الفارغة/false/undefined.
 * مفيد لبناء className ديناميكي داخل مكونات ui/ دون مكتبات خارجية.
 * مثال: cn("px-4", isActive && "bg-black", className)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * استبدال {year} بالسنة الحالية داخل نصوص مثل حقوق الفوتر.
 */
export function withCurrentYear(text) {
  return text.replace("{year}", new Date().getFullYear());
}
