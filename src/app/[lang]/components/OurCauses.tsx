import React from "react";
import SectionContainer from "./SectionContainer";
import DonationCard from "./DonationCard";
import { useTranslations } from "next-intl";

interface Props {}

const OurCauses: React.FC<Props> = ({}) => {
  const ourCauses = useTranslations("home.ourCauses");
  const commonTranslation = useTranslations("common");
  const causes = [
    {
      title: ourCauses("title1"),
      category: ourCauses("category1"),
      description: ourCauses("description1"),
      image: "/clothing.jpg",
      stripeID: "price_1NF2UDHLrbGCHekraTiD25aS",
    },
    {
      title: ourCauses("title2"),
      category: ourCauses("category2"),
      description: ourCauses("description2"),
      image: "/language.jpg",
      stripeID: "price_1NHu7FHLrbGCHekrKjP7bifB",
    },
    {
      title: ourCauses("title3"),
      category: ourCauses("category3"),
      description: ourCauses("description3"),
      image: "/teaching.jpg",
      stripeID: "price_1NHu9FHLrbGCHekrGuLY7x1T",
    },
    {
      title: ourCauses("title4"),
      category: ourCauses("category4"),
      description: ourCauses("description4"),
      image: "/help.jpg",
      stripeID: "price_1NHuAKHLrbGCHekrlx0R4zJb",
    },
  ];
  return (
    <SectionContainer
      title={ourCauses("ourCauses")}
      subTitle={ourCauses("subTitle")}
    >
      <div className={"our-causes-section"}>
        {causes.map((ca, index) => {
          return (
            <DonationCard
              key={index}
              item={ca}
              donateText={commonTranslation("donateNow")}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default OurCauses;
