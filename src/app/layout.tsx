import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Dr. Sushrut Singh – Top Gastroenterologist & Liver Specialist in Noida | Book Now",
  description:
    "Consult Dr. Sushrut Singh, Additional Director – Gastroenterology with 12+ years experience. Expert in Liver Disease, ERCP, EUS & Bariatric Endoscopy. Fortis Hospital Noida & Gaur City Clinic. Book your appointment today.",
  keywords:
    "gastroenterologist noida, liver specialist noida, dr sushrut singh, ERCP specialist, EUS specialist, bariatric endoscopy, fatty liver treatment, cirrhosis treatment, hepatologist noida",
  robots: "index, follow",
  openGraph: {
    title: "Dr. Sushrut Singh – Top Gastroenterologist in Noida",
    description:
      "12+ years experience | MBBS, MD (KGMC), DM (ILBS) | Fortis Hospital Noida",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Page Content */}
        {children}

        {/* ─── Global Footer ─── */}
        <footer className="bg-slate-900 text-slate-300" id="footer">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* Clinic Locations Summary */}
            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div>
                <h3 className="text-teal-400 font-semibold text-sm tracking-wide uppercase mb-2">
                  Fortis Hospital Noida
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  B-22, Rasoolpur Nawada, D Block, Sector 62, Noida <br />
                  <span className="font-medium text-slate-300">Ph: 093153 54431</span>
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Mon – Sat · 9:00 AM – 5:30 PM
                </p>
              </div>
              <div>
                <h3 className="text-teal-400 font-semibold text-sm tracking-wide uppercase mb-2">
                  Gaur City Clinic
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  2nd Floor, Shop 215, Aarza Square 2, Gaur City 2 Rd, Greater
                  Noida <br />
                  <span className="font-medium text-slate-300">Ph: 093153 54431</span>
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Mon – Sat · 6:00 PM – 9:30 PM
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-xs text-center sm:text-left">
                © {new Date().getFullYear()} Dr.&nbsp;Sushrut Singh. All rights
                reserved.
              </p>
              <div className="flex items-center gap-5">
                <a
                  href="/legal"
                  id="footer-legal-link"
                  className="text-xs text-slate-400 hover:text-teal-400 transition-colors duration-200 underline-offset-2 hover:underline"
                >
                  Privacy · Terms · Disclaimer
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
