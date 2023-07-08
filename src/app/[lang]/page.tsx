import styles from "./page.module.scss";
import WelcomeSection from "./components/WelcomeSection";
import OurCauses from "./components/OurCauses";
import SideMenu from "./components/SideMenu";
import { useTranslations } from "next-intl";

export default function Home({ params }: { params: { lang: string } }) {
  const commonTranslation = useTranslations("common");
  const homeTranslation = useTranslations("home");

  const { lang } = params;

  return (
    <div className={styles.home} lang={lang} dir={lang == "en" ? "ltr" : "rtl"}>
      <WelcomeSection />
      <OurCauses />
      {/* <SideMenu lang={lang}         dictionaryCommon={dictionary.common} 
/>*/}
    </div>
  );
}
