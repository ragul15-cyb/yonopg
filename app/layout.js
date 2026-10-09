import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "YONO SBI - Personal Banking | State Bank of India Net Banking",
  description:
    "Welcome to YONO SBI Net Banking. Login to access your SBI accounts, deposits, loans, cards, and investments securely online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
