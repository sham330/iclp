// app/layout.jsx

import "./globals.css";
import Script from "next/script";
import SmallBar from "./components/SmallBar/smallbar";
import Footer from "./components/Footer/footer";
import AppBar from "./components/AppBar/appbar";

export const metadata = {
  metadataBase: new URL("https://iclptech.in"),
  themeColor: "#0d47a1",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Lb5NP0CkzxorHnaM5c3wjKo4IPBG9TF10PKfg3-9cno"
        />

        {/* Favicon — single clean set, 96x96 is what Google prefers for search results */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="google-site-verification" content="hkOSvJh_qs0N_Unfi9KrCxYRLfY38RmIP48Kr5cT8Gs" />
        <meta
          name="google-site-verification"
          content="gwgv7x-EZlzPSSWS4lnQT7hCW7YhQkaOdp7Vj3sy6bk"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=Bevellier@400,500,600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cinzel:400,700,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel+Text:wght@400;500;600;700&display=swap"
        />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ICLP Technologies",
              url: "https://iclptech.in",
              logo: "https://iclptech.in/favicon-96x96.png",
            }),
          }}
        />

        {/* Google Tag Manager */}
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

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5NVKRW3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* App Layout */}
        <AppBar />
        <SmallBar />
        <main className="page-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}