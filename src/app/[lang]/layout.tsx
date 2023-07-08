import "./globals.scss";
import { Montserrat } from "next/font/google";
import Header from "@/app/[lang]/components/Header";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Tarabut Charity Organisation",
  description:
    "Welcome to Tarabut, a compassionate charity organisation dedicated to empowering refugees and homeless individuals, providing support, shelter, and new opportunities for a brighter future.",
};


export default  function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.lang !== locale) {
    notFound();
  }
  const { lang } = params;
  const commonTranslation = useTranslations("common");

  //@ts-ignore
  return (
    <html lang={lang} dir={lang == "en" ? "ltr" : "rtl"}>
      <body className={montserrat.className}>
        <Header lang={lang} homeTranslation={commonTranslation('home')} aboutTranslation={commonTranslation('about')} contactTranslation={commonTranslation('contact')} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
