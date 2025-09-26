/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  domains: [
      "images.unsplash.com",
      "cdn.wallpapersafari.com",
      "c4.wallpaperflare.com" ,// add this new domain
            "encrypted-tbn0.gstatic.com", // add this domain,
                  "tcagurgaon.in",
                        "i.ytimg.com", // add YouTube thumbnail domain
                              "news.gala.com", // <-- add this domain
      "s3.ap-south-1.amazonaws.com", // <-- Add this
      "media.licdn.com", // <-- Add this
      "stream-blog-v2.imgix.net", // <-- Add this
      "img.freepik.com", // <-- Add this
            "wallpapercave.com", // ✅ add this

    "www.shutterstock.com" // ✅ add this

 // add this domain


    ],
  },
};

export default nextConfig;
