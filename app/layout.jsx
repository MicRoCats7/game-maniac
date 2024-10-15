import "./globals.css";

export const metadata = {
  title: "Game Maniac | Topup Game Online",
  description: "Game Maniac adalah platform topup game online terpercaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
