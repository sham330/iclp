import fs from "fs";
import path from "path";

const BASE_URL = "https://iclptech.in";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { loc: "/", priority: "1.0000", changefreq: "daily", lastmod: today },
  { loc: "/about", priority: "0.8000", changefreq: "daily", lastmod: today },
  { loc: "/corporate-training", priority: "0.8000", changefreq: "daily", lastmod: today },
  { loc: "/contact", priority: "0.8000", changefreq: "daily", lastmod: today },
  { loc: "/courses", priority: "0.6400", changefreq: "daily", lastmod: today },
  { loc: "/interview-questions", priority: "0.6400", changefreq: "daily", lastmod: today },
  { loc: "/tutorial", priority: "0.6400", changefreq: "daily", lastmod: today },
  { loc: "/freelance-trainee", priority: "0.6400", changefreq: "daily", lastmod: today },
  { loc: "/blog", priority: "0.6400", changefreq: "daily", lastmod: today },
  { loc: "/privacy-policy", priority: "0.6400", changefreq: "daily", lastmod: today },
];

function urlEntry({ loc, priority = "0.8", changefreq = "monthly", lastmod }) {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  const normalizedLoc = loc.endsWith("/") ? loc : `${loc}/`;
  return `  <url>
    <loc>${BASE_URL}${normalizedLoc}</loc>${lastmodTag}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Extract blog slugs from blog.js via regex (it's a JS module, not JSON)
const blogFile = fs.readFileSync(path.resolve("public/data/blog.js"), "utf-8");
const slugMatches = [...blogFile.matchAll(/"slug"\s*:\s*"([^"]+)"/g)];
const blogSlugs = [...new Set(slugMatches.map((m) => m[1]))];

// Extract course paths from courses.json
const coursesData = JSON.parse(
  fs.readFileSync(path.resolve("public/data/courses.json"), "utf-8")
);
const coursePaths = [];
for (const category of coursesData.categories ?? []) {
  if (!category.path) continue;
  for (const sub of category.sub_categories ?? []) {
    if (sub.path) coursePaths.push(`${category.path}/${sub.path}`);
  }
}
const uniqueCoursePaths = [...new Set(coursePaths)];

const entries = [
  ...staticPages.map((p) => urlEntry(p)),
  ...blogSlugs.map((slug) =>
    urlEntry({ loc: `/blog/${slug}`, priority: "0.4096", changefreq: "daily", lastmod: today })
  ),
  ...uniqueCoursePaths.map((p) =>
    urlEntry({ loc: `/courses/${p}`, priority: "0.3277", changefreq: "daily", lastmod: today })
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve("public/sitemap.xml"), xml, "utf-8");
console.log(
  `sitemap.xml generated: ${staticPages.length} static + ${blogSlugs.length} blog + ${uniqueCoursePaths.length} course URLs`
);
