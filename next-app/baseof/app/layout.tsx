import "./globals.css";

export const metadata = {
  title: "BaseOf",
  description: "Brand foundation app with working local registration, login, and saved projects.",
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
