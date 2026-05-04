import "./globals.css";

export const metadata = {
  title: "BaseOf",
  description: "AI brand foundation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}