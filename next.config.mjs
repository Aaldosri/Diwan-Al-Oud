/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // أضف هنا أي نطاقات صور خارجية سنحتاجها لاحقًا (مثال: 'images.unsplash.com')
    remotePatterns: [],
  },
};

export default nextConfig;
