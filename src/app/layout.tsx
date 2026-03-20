import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Gastroenterologist Noida | Gastroenterologist Near Me",
  description:
    "Looking for a gastroenterologist near me? Consult the best gastroenterologist in Noida for fatty liver, GERD, and stomach issues. Call now.",
  keywords:
    "best gastrologist near me, good gastroenterologist near me, gastroenterologist near me, stomach doctor in greater noida, stomach doctor near me, gastroenterologist best near me, gastroenterologist clinic near me, gastro clinic near me, best gastroenterologist in noida, liver specialist noida, gastrologist near me, dr sushrut singh, ERCP specialist noida, endoscopy cost noida, fatty liver treatment noida, stomach doctor noida, gastro doctor near me",
  robots: "index, follow",
  alternates: {
    canonical: "https://drsingh.com/",
  },
  openGraph: {
    title: "Best Gastroenterologist Noida | Gastroenterologist Near Me",
    description:
      "Looking for a gastroenterologist near me? Consult the best gastroenterologist in Noida for fatty liver, GERD, and stomach issues. Call now.",
    type: "website",
    locale: "en_IN",
    url: "https://drsingh.com/",
    images: [
      {
        url: "/images/drProfilepic.webp",
        width: 800,
        height: 800,
        alt: "Dr. Sushrut Singh – Best Gastrologist & Gastroenterologist Near Me in Noida",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/images/site.webmanifest",
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
          href="/images/drProfilepic.webp"
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
              image: "https://drsingh.com/images/drProfilepic.webp",
              url: "https://drsingh.com/",
              telephone: "+919315354431",
              priceRange: "₹₹",
              description:
                "Best gastrologist near you & top stomach doctor in Noida & Greater Noida. Dr. Sushrut Singh is a DM-trained gastroenterologist specialising in Fatty Liver, GERD, IBS, ERCP, EUS, Endoscopy & Bariatric procedures at Fortis Hospital Noida & Gaur City Clinic.",
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
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                  ],
                  opens: "09:00",
                  closes: "17:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
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
        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who is the best liver doctor in Noida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dr. Sushrut Singh is a DM-trained gastroenterologist and liver specialist at Fortis Hospital, Noida. With 12+ years of experience and training under Dr. Shiv Sarin at ILBS Delhi, he has treated 3,000+ patients for fatty liver, cirrhosis, hepatitis, and other liver conditions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the endoscopy cost in Noida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Endoscopy costs at Fortis Hospital Noida vary based on the type of procedure — diagnostic vs. therapeutic. Dr. Sushrut provides a clear cost estimate during your first consultation. Call 093153 54431 for current pricing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which is the best gastroenterologist clinic near me in Noida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dr. Sushrut Singh's gastroenterology practice at Fortis Hospital (Sector 62, Noida) and Gaur City Clinic (Greater Noida) is rated 4.9/5 by 500+ patients on Google. Both clinics offer advanced procedures including ERCP, EUS, FibroScan, and bariatric endoscopy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the fatty liver treatment cost in Noida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fatty liver treatment starts with a FibroScan assessment and personalised treatment plan. Most patients with Grade I-II fatty liver recover with medication and lifestyle changes within 3-6 months. Dr. Sushrut focuses on minimal, effective treatment to avoid unnecessary costs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is ERCP available in Noida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Dr. Sushrut Singh is one of the few DM-trained ERCP and EUS specialists in Western Uttar Pradesh, performing these advanced procedures at Fortis Hospital, Noida. He has handled 500+ complex ERCP cases.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is a FibroScan and where can I get it in Noida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FibroScan is a painless, non-invasive test that measures liver stiffness to detect fibrosis and fatty liver. It is available at Dr. Sushrut Singh's clinic at Fortis Hospital, Sector 62, Noida.",
                  },
                },
              ],
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
                  target="_blank"
                  rel="noopener noreferrer"
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
