import { cn } from "@/lib/utils";

/**
 * مكون زر أساسي محايد التصميم (سيُخصَّص بصريًا لكل قالب لاحقًا).
 *
 * props:
 * - variant: "primary" | "secondary" | "outline" (افتراضي: "primary")
 * - as: يسمح باستخدامه كـ <a> بتمرير as="a" href="..."
 * - باقي الـ props تُمرَّر مباشرة للعنصر (onClick, type, href...)
 */
export default function Button({
  children,
  variant = "primary",
  className,
  as: Component = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-oud-copper text-oud-dark hover:bg-oud-ivory focus-visible:outline-oud-copper",
    secondary: "bg-oud-ivory text-oud-dark hover:bg-white focus-visible:outline-oud-brown",
    outline: "border border-oud-copper/50 text-oud-ivory hover:border-oud-copper hover:text-oud-copper focus-visible:outline-oud-copper",
  };

  return (
    <Component className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}
