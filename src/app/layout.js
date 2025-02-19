import "./globals.css";

export const metadata = {
  title: "Vilusa Gıda Tarım Sanayi - Tarım ve Teknolojik Üretimler",
  description: "Zirai faaliyetler, üretim ve teknoloji çözümleri sunan profesyonel kuruluş",
  keywords: "zeytin, zeytinyağı, tarım, teknoloji, danışmanlık",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}