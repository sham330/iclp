/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Static HTML export (pure HTML files)
  // output: 'export',
   
  // ✅ Required for static export - disables image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.wallpapersafari.com' },
      { protocol: 'https', hostname: 'c4.wallpaperflare.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'tcagurgaon.in' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'news.gala.com' },
      { protocol: 'https', hostname: 's3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'stream-blog-v2.imgix.net' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'wallpapercave.com' },
      { protocol: 'https', hostname: 'www.shutterstock.com' },
      { protocol: 'http', hostname: 'localhost', port: '3000', pathname: '/**' }
    ],
  },
  
  // ✅ Clean URLs (blog/slug → blog/slug/index.html)
  trailingSlash: true,
  
  // ✅ Skip Node.js server generation
  distDir: 'next'
};

export default nextConfig;
