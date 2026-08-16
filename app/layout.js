import "./globals.css";

export const metadata = {
  title: "Madushan Bandara | Management, Technology & Delivery",
  description: "Portfolio of Madushan Bandara — connecting management, technology, and practical project delivery.",
  metadataBase: new URL("https://madushanbandara.com"),
  openGraph: {
    title: "Madushan Bandara | Management & Technology",
    description: "Business clarity, technical understanding, and structured delivery.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
