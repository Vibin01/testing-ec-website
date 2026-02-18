import type { Metadata } from "next";
import "./globals.css";
import { Exo_2 } from "next/font/google";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URl || "https://connectec.app"),
  title: "Connect EC: The Gamified Ethical Hiring Platform",
  description:
    "Unlock Connect EC for gamified, ethical hiring. Empowering employers, candidates & recruiters with AI tools—from sourcing to onboarding.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Connect EC: The Gamified Ethical Hiring Platform",
    description:
      "Unlock Connect EC for gamified, ethical hiring. Empowering employers, candidates & recruiters with AI tools—from sourcing to onboarding.",
    images: {
      url: "/EC_Connect.svg",
      width: 1200,
      height: 640,
      alt: "Connect EC: The Gamified Ethical Hiring Platform",
    },
    locale: "en-US",
    type: "website",
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
       {/* Google Tag Manager */}
              <Script
                id="gtm-head"
                strategy="afterInteractive"
              >
                {`
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-NZWN738N');
                `}
              </Script>
              {/* End Google Tag Manager */}
    </head>
      <body
        className={`${exo2.className} bg-white relative
       antialiased`}
      >
            {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZWN738N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End GTM NoScript */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
