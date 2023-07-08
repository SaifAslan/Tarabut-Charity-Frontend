import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const commonTranslation = useTranslations("common");
    const ourCausesTranslation = useTranslations("home.ourCauses");
  const Links = [
    {
      title: commonTranslation("quicklinks"),
      content: [
        {
          title: commonTranslation("home"),
          link: "/",
        },
        {
          title: commonTranslation("about"),
          link: "/about",
        },
        {
          title: commonTranslation("contact"),
          link: "/contact-us",
        },
      ],
    },
    {
      title: commonTranslation("donating"),
      content: [
        {
          title: commonTranslation("generalDonation"),
          link: "https://buy.stripe.com/cN2eVZbiY6fWgiQdQQ",
        },
        {
          title: ourCausesTranslation("ourCauses"),
          link: "/our-causes",
        },
      ],
    },
  ];
  return (
    <footer>
      <div className="linkes ">
        {Links.map((link, index) => (
          <div key={index} className="footer-section">
            <h3>{link.title}</h3>
            <ul>
              {link.content.map((item, index) => (
                <li key={index}>
                  <Link href={item?.link}>{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-section">
          <h3>{commonTranslation("address")}</h3>
          <p dir="ltr">Fairgate House 205 Kings Road Tyseley, Birmingham. B11 2AA. UK.</p>
        </div>
        <div className="footer-section">
          {" "}
          <Image
            priority
            src="/logo.png"
            alt="tarabut-logo"
            style={{ objectFit: "contain" }}
            fill={true}
          />
        </div>
      </div>
      <div className="footer-lower-section" dir="ltr">
        <p>Made with 💚 by Saif.</p>
        <p>©Copyright © 2023 Tarabut Charity Organisation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
