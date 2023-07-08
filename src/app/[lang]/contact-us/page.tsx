import { useTranslations } from "next-intl";
import React from "react";
import GoogleMaps from "./components/GoogleMaps";

export default function About() {
  const contactUsTranslation = useTranslations("contact-us-page");

  return (
    <div className="contact-us-page">
      <div>
        <section>
          <p>{contactUsTranslation("top-paragraph")}</p>
        </section>
        <section>
          <p>
            <span className="details">{contactUsTranslation("mobile")}</span>:{" "}
            <span dir="ltr">+44 7564 371526</span>
          </p>
          <p>
            <span className="details">{contactUsTranslation("email")}</span>:
            info@tarabut.org.uk
          </p>
        </section>
        <section>
          <p className="details"> {contactUsTranslation("address")}:</p>
          <p>Fairgate House</p>
          <p>205 Kings Road Tyseley</p>
          <p>Birmingham. B11 2AA</p>
          <p>United Kingdom</p>
        </section>
        <section>
          <p>{contactUsTranslation("lower-paragraph-1")}</p>
        </section>
        <section>
          <p>{contactUsTranslation("lower-paragraph-2")}</p>
        </section>
      </div>
      <div id="google-map">
        <GoogleMaps />
      </div>
    </div>
  );
}
