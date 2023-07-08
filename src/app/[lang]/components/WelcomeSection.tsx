import React from "react";
import styles from "../page.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {}

const WelcomeSection: React.FC<Props> = ({}) => {
  const commonTranslation = useTranslations("common");
  const homeTranslation = useTranslations("home.welcomeSection");
  return (
    <div className={styles.welcomeSection}>
      <div className={styles.text}>
        <h3>{homeTranslation("h3")}</h3>
        <h2>{homeTranslation("h2")}</h2>
        <h5>{homeTranslation("h5")}</h5>
      </div>
      <div className={styles.buttons}>
        <Link href="https://buy.stripe.com/cN2eVZbiY6fWgiQdQQ">
          <button className={"green-btn"}>
            {commonTranslation("donateNow")}
          </button>
        </Link>
        <Link href="/contact-us">
          <button className={"green-border-btn"}>
            {commonTranslation("knowAboutUs")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeSection;
