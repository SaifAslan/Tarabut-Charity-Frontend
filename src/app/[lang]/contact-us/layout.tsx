import StandardPageHero from "@/Shared/StandardPageHero";
import { useTranslations } from "next-intl";
import React from "react";

export const metadata = {
  title: "Tarabut Charity Organisation | Contact Us",
  description:
    "Welcome to Tarabut, a compassionate charity organisation dedicated to empowering refugees and homeless individuals, providing support, shelter, and new opportunities for a brighter future.",
};

interface IProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<IProps> = ({ children }) => {
  const contactUsTranslation = useTranslations("contact-us-page");

  return (
    <div>
      <StandardPageHero title={contactUsTranslation("title")} />
      <div className="container page-min-height">{children}</div>
    </div>
  );
};

export default AboutLayout;
