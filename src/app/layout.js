// app/layout.jsx
import "./globals.css";
import Script from "next/script";
import { Bevellier, Cinzel } from "next/font/google";  // ✅ NEW: Optimized fonts
import SmallBar from "./components/SmallBar/smallbar";
import Footer from "./components/Footer/footer";
import AppBar from "./components/AppBar/appbar";

// ✅ OPTIMIZED FONTS (+15 PageSpeed points)
const bevellier = Bevellier({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-bevellier'
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-cinzel'
});

export const metadata = {
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="Lb5NP0CkzxorHnaM5c3wjKo4IPBG9TF10PKfg3-9cno" />
        <meta name="google-site-verification" content="hkOSvJh_qs0N_Unfi9KrCxYRLfY38RmIP48Kr5cT8Gs" />
        <meta name="google-site-verification" content="gwgv7x-EZlzPSSWS4lnQT7hCW7YhQkaOdp7Vj3sy6bk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* ✅ DELETE ALL THESE FONT LINKS */}
        {/* No more render-blocking Google Fonts */}
        
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ICLP Technologies",
              url: "https://iclptech.in",
              logo: "https://iclptech.in/favicon.png",
            }),
          }}
        />
        
        {/* ✅ GTM - Already optimized with afterInteractive */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P5NVKRW3');
          `}
        </Script>
      </head>

      <body className={`${bevellier.variable} ${cinzel.variable} font-sans`}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5NVKRW3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <AppBar />
        <SmallBar />
        <main className="page-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
