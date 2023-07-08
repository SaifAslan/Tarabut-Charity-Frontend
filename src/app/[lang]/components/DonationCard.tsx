import Image from "next/image";
import OurCausesSectionButtons from "./OurCausesSectionButtons";

interface Props {
  item: {
    title: string;
    category: string;
    description: string;
    image: string;
    stripeID:string;
  };
  donateText: string;
}

const DonationCard: React.FC<Props> = ({ item, donateText }) => {
 
  return (
    <div className="our-causes-section-card">
      <div className="image-container">
        <Image
          // loader={()=>"loading..."}
          src={item.image}
          alt={item.title}
          style={{ objectFit: "cover" }}
          loading="lazy"
          fill={true}
          sizes="(max-width: 400px) 100vw"
          // onError={(e) => console.log(e)}
        />
      </div>
      <div className="lower-container">
        <h5 className="category">{item.category}</h5>
        <h4 className="title">{item.title}</h4>
        <p className="description">{item.description}</p>

        <OurCausesSectionButtons donateText={donateText} stripeID={item.stripeID} />
      </div>
    </div>
  );
};

export default DonationCard;
