import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";    

const AllCards = () => {
  return (
    <React.Fragment>
      <section>
        <div className="absolute top-56 md:top-0 md:grid md:grid-cols-3 ">
          <div className="md:mt-20"><Card1/></div>
          <div className="md:mt-60"><Card2/></div>
          <div className="md:mt-96"><Card3/></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AllCards;
