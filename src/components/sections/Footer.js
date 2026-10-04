import * as LucideIcons from "lucide-react";
import { siteConfig } from "@/content/site.config";
import { withCurrentYear } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-oud-copper/10 bg-oud-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-oud-ivory/40">
          {withCurrentYear(siteConfig.footer.copyright)}
        </p>

        <div className="flex items-center gap-5">
          {siteConfig.footer.socialLinks.map((link) => {
            // جلب أيقونة lucide-react ديناميكيًا حسب الاسم المحدد في site.config.js
            const Icon = LucideIcons[link.icon];
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-oud-ivory/40 transition-colors hover:text-oud-copper"
              >
                {Icon && <Icon size={19} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
