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

export const metadata = {
  title: "Real Time Infra",
  description: "RTI - Business Consulting",
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
