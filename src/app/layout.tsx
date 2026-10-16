import type { Metadata } from "next";
import { Noto_Sans_Ethiopic, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company, leaders } from "@/lib/content";
import { defaultDescription, siteUrl } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const ethiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "600"],
  variable: "--font-noto-ethiopic",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: company.name,
    template: `%s · ${company.name}`,
  },
  description: defaultDescription,
  applicationName: company.name,
  authors: leaders.map((leader) => ({ name: leader.name })),
  creator: company.name,
  publisher: company.name,
  category: "business",
  keywords: [
    "EKA Consulting and Trading PLC",
    "HSEQ consulting",
    "risk assessment",
    "fire and emergency",
    "occupational health",
    "environmental consulting",
    "safety training",
    "PPE and safety supply",
    "technical advisory",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: company.name,
    description: defaultDescription,
    url: siteUrl,
    siteName: company.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "EKA Consulting and Trading PLC. Tomorrow begins with today's best.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: defaultDescription,
    images: ["/twitter-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      alternateName: company.amharic,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      email: company.email,
      slogan: company.motto,
      description: company.overview,
      employee: leaders.map((leader) => ({
        "@type": "Person",
        name: leader.name,
        jobTitle: leader.role,
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: company.name,
      description: defaultDescription,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${ethiopic.variable} h-full scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-green focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
