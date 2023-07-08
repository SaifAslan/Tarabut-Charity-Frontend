import { useTranslations } from "next-intl";
import React from "react";

export default function About() {
  const aboutUsTranslation = useTranslations("about-page");

  return (
    <div className="about-us-page">
      <section>
        <p>{aboutUsTranslation("paragraph-2")}</p>
      </section>
      <section>
        <p>{aboutUsTranslation("paragraph-1")}</p>
      </section>
      <section>
        <p>{aboutUsTranslation("paragraph-3")}</p>
      </section>
      <section>
        <p>{aboutUsTranslation("paragraph-4")}</p>
      </section>
      <section>
        <p>{aboutUsTranslation("paragraph-5")}</p>
      </section>
      <section>
        <p>{aboutUsTranslation("paragraph-6")}</p>
      </section>
      <section>
        <p>{aboutUsTranslation("paragraph-7")}</p>
      </section>
      <section>
        <p>{aboutUsTranslation("paragraph-8")}</p>
      </section>
    </div>
  );
}
