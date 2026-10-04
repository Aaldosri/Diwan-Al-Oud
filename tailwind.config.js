/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/content/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // يتم حقن المتغيرات الفعلية من next/font في layout.js
        // font-display: خط العناوين الكلاسيكي (Aref Ruqaa) — للعناوين الكبيرة فقط
        // font-arabic: خط النص العادي (IBM Plex Sans Arabic) — للفقرات والمحتوى العام
        display: ["var(--font-display)", "serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
        latin: ["var(--font-latin)", "sans-serif"],
      },
      colors: {
        // هوية "ديوان العود" — معرّفة كمتغيرات CSS (بصيغة RGB) في globals.css
        // لدعم معدِّلات الشفافية Tailwind (مثال: bg-oud-dark/60) دون التقيّد بالقيم الخام فقط
        oud: {
          dark: "rgb(var(--color-oud-dark) / <alpha-value>)", // أسود دافئ — خلفيات رئيسية
          brown: "rgb(var(--color-oud-brown) / <alpha-value>)", // بني العود — عناصر ثانوية وحدود
          copper: "rgb(var(--color-oud-copper) / <alpha-value>)", // نحاس عتيق — تفاصيل وأيقونات
          ivory: "rgb(var(--color-oud-ivory) / <alpha-value>)", // عاجي دافئ — خلفيات بديلة فاتحة
          maroon: "rgb(var(--color-oud-maroon) / <alpha-value>)", // عنابي غامق — لمسة نادرة جداً
        },
      },
    },
  },
  plugins: [],
};
