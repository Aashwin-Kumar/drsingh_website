import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Best Gastroenterologist Near Me in Noida | Dr. Sushrut Singh – Gastro Clinic Near You",
  description:
    "Searching for a gastroenterologist near me or a gastro clinic near you in Noida &amp; Greater Noida? Dr. Sushrut Singh (MBBS, MD-KGMC, DM-ILBS) offers expert care for Liver Disease, GERD, IBS, Fatty Liver, ERCP &amp; Bariatric Endoscopy. 12+ years experience at Fortis Hospital Noida &amp; Gaur City Clinic. Book your appointment today.",
  keywords:
    "gastroenterologist near me, gastroenterologist clinic near me, gastro clinic near me, best gastroenterologist in noida, gastroenterologist noida, liver specialist noida, dr sushrut singh, ERCP specialist, EUS specialist, bariatric endoscopy, fatty liver treatment, cirrhosis treatment, hepatologist noida, gastro doctor near me",
  robots: "index, follow",
  alternates: {
    canonical: "https://drsingh.com/",
  },
  openGraph: {
    title: "Best Gastroenterologist Near Me – Dr. Sushrut Singh | Gastro Clinic in Noida",
    description:
      "Looking for a gastroenterologist clinic near you? Dr. Sushrut Singh offers 12+ years of expertise in Liver Disease, ERCP, EUS &amp; Bariatric Endoscopy at Fortis Hospital Noida &amp; Gaur City Clinic.",
    type: "website",
    locale: "en_IN",
    url: "https://drsingh.com/",
    images: [
      {
        url: "/images/portrait.webp",
        width: 800,
        height: 800,
        alt: "Dr. Sushrut Singh – Best Gastroenterologist Near Me in Noida",
      },
    ],
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
})(window,document,'script','dataLayer','GTM-KKDFT6QM');`,
          }}
        />
        {/* Preload hero image for LCP */}
        <link
          rel="preload"
          href="/images/portrait.webp"
          as="image"
          type="image/webp"
        />
        {/* Local Business + Physician JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "Physician"],
              name: "Dr. Sushrut Singh – Gastroenterologist & Liver Specialist",
              image: "https://drsingh.com/images/portrait.webp",
              url: "https://drsingh.com/",
              telephone: "+919315354431",
              priceRange: "₹₹",
              description:
                "Top gastroenterologist clinic near you in Noida & Greater Noida. Dr. Sushrut Singh specialises in Liver Disease, GERD, IBS, Fatty Liver, ERCP, EUS & Bariatric Endoscopy.",
              medicalSpecialty: "Gastroenterology",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "B-22, Rasoolpur Nawada, D Block, Sector 62",
                  addressLocality: "Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "201301",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "2nd Floor, Shop 215, Aarza Square 2, Gaur City 2 Rd",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "201009",
                  addressCountry: "IN",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
                  ],
                  opens: "09:00",
                  closes: "17:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
                  ],
                  opens: "18:00",
                  closes: "21:30",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKDFT6QM"
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
