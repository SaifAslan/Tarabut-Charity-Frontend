"use client";
import Link from "next/link";
import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Header({ lang, homeTranslation,aboutTranslation,contactTranslation }: { lang: string, homeTranslation: string ,contactTranslation: string ,aboutTranslation: string }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const router = useRouter();

  return (
    <nav className="header">
      <a href="/" className="logo">
        <Image
          priority
          src="/logo.png"
          alt="tarabut-logo"
          style={{ objectFit: "contain",    overflow: "visible"}}
          fill={true}
        />
      </a>
      <div className={"header-links"}>
        <Link href="/" lang={lang}>
          <p className="active">{homeTranslation}</p>
        </Link>
        <Link href="/contact-us" lang={lang}>
          <p>{contactTranslation}</p>
        </Link>{" "}
        <Link href="/about" lang={lang}>
          <p>{aboutTranslation}</p>
        </Link>
      </div>
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
    </nav>
  );
}

export default Header;