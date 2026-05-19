import type { Metadata } from "next";

import {
  defaultDescription,
  defaultKeywords,
  defaultTitle,
  siteName,
  siteUrl,
  socialImage,
} from "@/libs/seo";

const globalStylesheets = [
  "/assets/css/range-slider-input.css",
  "/assets/css/swiper.min.css",
  "/assets/css/swiper-effect-coverflow.css",
  "/assets/css/swiper-effect-fade.css",
  "/assets/css/swiper-navigation.css",
  "/assets/css/swiper-pagination.css",
  "/assets/css/swiper-thumbs.css",
  "/assets/css/venobox.min.css",
  "/assets/css/globals.css",
  "/assets/css/animate.css",
  "/assets/css/bootstrap.min.css",
  "/assets/css/font-awesome-pro.min.css",
  "/assets/css/glightbox.min.css",
  "/assets/css/meanmenu.css",
  "/assets/css/odometer-theme-default.css",
  "/assets/css/solvior-icons.css",
  "/assets/css/nice-select2.css",
  "/assets/css/main.css",
  "/assets/css/shop.css",
  "/assets/css/main-rtl.css",
  "/assets/css/responsive.css",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Real Time Infra engineering and building services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage],
  },
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
  category: "Engineering Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {globalStylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}
