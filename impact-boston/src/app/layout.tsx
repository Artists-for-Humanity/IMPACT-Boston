import type { Metadata } from "next";
import { Poppins, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impactboston.org"),
  title: {
    default: "IMPACT Boston",
    template: "%s | IMPACT Boston",
  },
  description:
    "IMPACT Boston offers empowerment self-defense training for individuals, schools, workplaces, and community organizations across Greater Boston.",
  openGraph: {
    siteName: "IMPACT Boston",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IMPACT Boston",
  url: "https://impactboston.org",
  logo: "https://impactboston.org/images/logos/logo-full-color.png",
  telephone: "+1-617-597-4945",
  email: "info@impactboston.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "89 South Street, Suite 600",
    addressLocality: "Boston",
    addressRegion: "MA",
    postalCode: "02111",
    addressCountry: "US",
  },
  sameAs: [
    "https://instagram.com",
    "https://twitter.com",
    "https://facebook.com",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexSans.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />

        {children}
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
        <Footer />
      </body>
    </html>
  );
}
