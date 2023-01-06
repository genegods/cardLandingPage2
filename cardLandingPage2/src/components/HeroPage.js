import React from "react";
import AllCards from "../cards/AllCards";

const HeroPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="h-screen grid grid-rows-3">
          <div className="wrapper"></div>
          <div className=""></div>
          <div className="wrapper"></div>
        </div>

        {/* all cards */}
        <div className=""><AllCards/></div>
      </section>
    </React.Fragment>
  );
};

export default HeroPage;
