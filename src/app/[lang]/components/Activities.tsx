import React from "react";
import SectionContainer from "./SectionContainer";
import { useTranslations } from "next-intl";
import ActivitiesCard from "./ActivitiesCard";

function Activities() {
  const ourActivities = useTranslations("home.ourActivities");

  const ourCauses = useTranslations("home.ourCauses");

  const commonTranslation = useTranslations("common");
  const activities = [
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
  ];
  return (
    <SectionContainer
      title={ourActivities("ourActivities")}
      subTitle={ourActivities("subTitle")}
    >
      <div className={"our-activities-section"}>
        {activities.map((activ, index) => (
          <ActivitiesCard key={index} donateText="test" item={activ} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Activities;
