import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { BRAND_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "@/modules/site/utils/siteConfig";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} · ${SITE_TAGLINE}`,
    template: `%s · ${BRAND_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable} antialiased`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
