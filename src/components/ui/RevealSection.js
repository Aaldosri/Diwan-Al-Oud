"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * غلاف حركة موحّد لكل قسم: ظهور تدريجي بطيء + تكبير خفيف عند الدخول لمنطقة الرؤية.
 * حركة واحدة فقط لكل قسم — لا حركات hover إضافية على العناصر الداخلية.
 * الهدف: إحساس "كشف" هادئ يليق بموضوع فاخر، لا حيوية سريعة.
 */
export default function RevealSection({ children, className, as: Component = "div", delay = 0 }) {
  const MotionComponent = motion[Component] ?? motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
