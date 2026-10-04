<<<<<<< HEAD
# الأساس (Foundation)

قاعدة نظيفة وقابلة للتوسع لبناء القوالب عليها. لا هوية بصرية نهائية بعد — الألوان والخطوط الدقيقة تُحدَّد لكل قالب لاحقًا.

## التشغيل

```bash
npm install
npm run dev
```

الموقع يعمل على `http://localhost:3000`.

## أهم نقاط التخصيص

### 1. المحتوى (نصوص، روابط، ألوان مستقبلية)
كل شيء في مكان واحد:
```
src/content/site.config.js
```
عدّل هناك فقط — لا تلمس المكونات لتغيير نص أو رابط.

### 2. مفتاح Web3Forms (نموذج التواصل)
النموذج في `src/components/sections/ContactForm.js` يقرأ المفتاح من:
```
src/content/site.config.js → contactForm.web3formsAccessKey
```
استبدل القيمة `"YOUR_WEB3FORMS_ACCESS_KEY_HERE"` بمفتاحك الحقيقي من:
https://web3forms.com (مجاني، يعطيك access key بعد تسجيل بريدك).

### 3. الخطوط
معرَّفة في `src/app/layout.js` عبر `next/font/google`:
- **Tajawal** للنص العربي (يمكن استبدالها بـ `IBM_Plex_Sans_Arabic` بنفس الطريقة)
- **Inter** كخط لاتيني مساند

استخدم `font-arabic` أو `font-latin` في Tailwind عند الحاجة للتفريق بينهما.

### 4. القسم المؤقت (Placeholder)
`src/components/sections/PlaceholderSection.js` — مكان مؤقت، سيُستبدل بقسم مخصص حسب كل قالب (عرض منتجات/خدمات أو هوية وقصة).

### 5. صورة Open Graph
ضع صورة المشاركة داخل `public/` وحدّث مسارها في:
```
site.config.js → meta.ogImage
```

## البنية

```
src/
├── app/
│   ├── layout.js       ← الخطوط + dir="rtl" + Metadata
│   ├── page.js         ← يجمّع الأقسام فقط
│   └── globals.css     ← Tailwind directives فقط
├── components/
│   ├── ui/              (Button, Card, Input/Textarea)
│   └── sections/        (Header, Footer, PlaceholderSection, ContactForm)
├── content/
│   └── site.config.js   ← كل المحتوى هنا
└── lib/
    └── utils.js
```
=======
# Diwan-Al-Oud
>>>>>>> 88ec053cf0c98ac5b36811d94522b36d5b09f910
