import React from "react";

interface Props {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<Props> = ({ children, title, subTitle }) => {
  return (
    <section className="container">
      <div className="container-section-title-container">
        <h3 className="container-section-title">{title}</h3>
        <div className="container-section-title-line">
        </div>
      </div>
      <h4 className="container-section-section-subtitle"> {subTitle}</h4>
      {children}
    </section>
  );
};

export default SectionContainer;
