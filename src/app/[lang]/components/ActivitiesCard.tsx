import Image from 'next/image';
import React from 'react'
import OurCausesSectionButtons from './OurCausesSectionButtons';
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
const  ActivitiesCard: React.FC<Props> = ({ item, donateText })=> {
    const timeElapsed = Date.now();
const today = new Date(timeElapsed);
  return (
    <div className="our-activities-section-card">
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
        <div  className="date-container">
            <img src="/date-vector.png" alt="date png" />
            <p>{today.toDateString()}</p>
        </div>
      <h4 className="title">{item.description}</h4>
      <p className="content">{item.description +" "+ item.description}</p>
<button className='green-btn'>read more</button>
    </div>
  </div>
);  
}

export default ActivitiesCard