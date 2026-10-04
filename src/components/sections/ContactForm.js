"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import RevealSection from "@/components/ui/RevealSection";
import { siteConfig } from "@/content/site.config";

// حالات الإرسال الممكنة للنموذج
const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

export default function ContactForm() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const { fields, web3formsAccessKey, successMessage, errorMessage, submitLabel, sendingLabel } =
    siteConfig.contactForm;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATUS.SENDING);

    const formData = new FormData(e.target);
    formData.append("access_key", web3formsAccessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus(STATUS.SUCCESS);
        e.target.reset();
      } else {
        setStatus(STATUS.ERROR);
      }
    } catch (error) {
      setStatus(STATUS.ERROR);
    }
  }

  const { eyebrow, title, subtitle } = siteConfig.contactSection;

  return (
    <section id="contact" className="scroll-mt-20 border-t border-oud-copper/10 bg-oud-dark py-24 sm:py-32">
      <RevealSection className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm text-oud-copper/70">{eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl text-oud-ivory sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-oud-ivory/60">
            {subtitle}
          </p>
        </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          id="name"
          name="name"
          type="text"
          required
          label={fields.name.label}
          placeholder={fields.name.placeholder}
        />
        <Input
          id="email"
          name="email"
          type="email"
          required
          label={fields.email.label}
          placeholder={fields.email.placeholder}
        />
        <Textarea
          id="message"
          name="message"
          required
          label={fields.message.label}
          placeholder={fields.message.placeholder}
        />

        {/* حقل مخفي اختياري لعنوان الإشعار الذي يصلك من Web3Forms */}
        <input type="hidden" name="subject" value={`رسالة جديدة من نموذج التواصل — ${siteConfig.meta.name}`} />

        <Button type="submit" disabled={status === STATUS.SENDING} className="w-full sm:w-fit">
          {status === STATUS.SENDING ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              {sendingLabel}
            </>
          ) : (
            submitLabel
          )}
        </Button>

        {status === STATUS.SUCCESS && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm font-medium text-green-400"
          >
            <CheckCircle2 size={18} />
            {successMessage}
          </motion.p>
        )}

        {status === STATUS.ERROR && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm font-medium text-red-400"
          >
            <AlertCircle size={18} />
            {errorMessage}
          </motion.p>
        )}
      </form>
      </RevealSection>
    </section>
  );
}
