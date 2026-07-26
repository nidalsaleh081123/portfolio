import "./globals.css";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>
        {children}
      </body>
    </html>
  );
}