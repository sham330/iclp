// app/blogs/[title]/page.jsx
import Head from "./Head";
import ShareButton from "./Sharebutton";
import Image from 'next/image';
import { notFound } from 'next/navigation'; // ✅ ADD THIS
import { blogs } from "../../../../public/data/blog.js";
import ScrollToTop from "./ScrollToTop";
import "./blogdetail.css"


// ✅ Safe static params - works even if blogs is undefined
export async function generateStaticParams() {
  try {
    // Your blogs data source (adjust path)
    return blogs.default?.map(blog => ({ slug: blog.slug })) || [];
  } catch (error) {
    console.log('Blogs not found, skipping static generation');
    return []; // Empty = no static pages for blogs
  }
}


export const revalidate = 86400;  // 24 hours in seconds

// 3. Force static rendering (skip SSR)
export const dynamic = 'force-static';


export default async function BlogDetailPage({ params }) {
  // Await the params Promise (Next.js 15+ requirement)
  const resolvedParams = await params;

  const slug = resolvedParams?.slug;
 

  if (!slug || !blogs?.length) {
    return (
      <div className="not-found-container">
        <h2>Blog Not Found</h2>
      </div>
    );
  }

  const blog = blogs.find(b => b?.slug === decodeURIComponent(slug));
if (!blog) notFound();

  return (
 <>
      <ScrollToTop />
      <Head course={blog}/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blog.schema||null) }}
      />
      
      <div className="min-h-screen bg-white">
  {/* Hero Section */}
  <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
        <span>Featured Article</span>
      </div>
      
      {/* Hero Image */}
      <div className="w-full h-[280px] sm:h-[380px] lg:h-[480px]  rounded-2xl overflow-hidden shadow-xl bg-gray-100">
  <img
    src={blog.image}
    alt={blog.title}
    width={800}
    height={450}
    loading="eager"
    decoding="async"
    fetchPriority="high"
    className="w-full h-full object-cover"
  />
</div>
      
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight">
        {blog.title}
      </h1>
      
      <p
        className="blog-content text-xl text-gray-600 mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.intro }}
      />
      
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          <span className="text-gray-600">8 min read</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          <span className="text-gray-600">Published Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          <span className="text-gray-600">Web Development</span>
        </div>
      </div>
    </div>
  </div>


  {/* Main Content */}
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    {blog.sections.map((section, index) => (
      <article key={index} className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {section.heading}
        </h2>


      


        {/* Convert points array to paragraph */}
        {section.points && (
          <div 
            className="blog-content text-lg text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ 
              __html: section.points.join(' ') 
            }}
          />
        )}


        {section.note && (
          <div className="blog-content bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 text-white flex items-center justify-center font-bold text-sm">
                !
              </div>
              <p 
                className="text-amber-900 leading-relaxed" 
                dangerouslySetInnerHTML={{__html:section.note}}
              />
            </div>
          </div>
        )}


        {section.syllabus && (
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Course Outline
            </h3>
            <ol className="space-y-4">
              {section.syllabus.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 leading-relaxed pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}


        {section.faqs && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Frequently Asked Questions
            </h3>
            {section.faqs.map((faq, i) => (
              <div key={i} className="blog-content border-b border-gray-200 pb-6 mb-6 last:border-b-0">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                    Q
                  </span>
                  {faq.q}
                </h4>
                <div className="ml-9">
                  <p 
                    className="text-gray-700 leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: faq.a}}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </article>
    ))}


    {/* Conclusion */}
    <article className="blog-content bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <div className="text-3xl">✨</div>
        Conclusion
      </h2>
      {blog?.conclusion ? (
        <p
          className="text-lg text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.conclusion }}
        />
      ) : (
        <p>No conclusion available.</p>
      )}
    </article>


    {/* Call to Action */}
    <div className="text-center py-6 border-t border-gray-200">
      <div className="flex flex-col items-center gap-4">
        <span className="text-lg text-gray-600">Found this helpful?</span>
        <ShareButton/>
      </div>
    </div>
  </div>
</div>

    </>
  );
}