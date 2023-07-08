'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  dictionaryCommon: any;
  lang: string;
}

const SideMenu: React.FC<Props> = ({ dictionaryCommon, lang }) => {
  const pathName = usePathname();
  const router = useRouter();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="side-menu">
      <div className="side-menu-background"></div>
      <div className="side-menu-content">
          <Link href="#home">
            <p className="active">{dictionaryCommon.home}</p>
          </Link>
          <Link href="#contact">
            <p>{dictionaryCommon.contact}</p>
          </Link>{" "}
          <Link href="#about">
            <p>{dictionaryCommon.about}</p>
          </Link>
          <form action="" className="language-picker__form">
        <select
          value={lang}
          name="language-picker-select"
          id="language-picker-select"
          onChange={(e) => router.push(redirectedPathName(e.target.value))}
        >
          <option lang="ar" value="ar">
            {"العربية"}
          </option>
          <option lang="en" value="en">
            {"English"}
          </option>
        </select>
      </form>
      </div>
    </div>
  );
};

export default SideMenu;
