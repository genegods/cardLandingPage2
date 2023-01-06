import React from 'react'
import { CardData2 } from "../data/CardData";

const Card2 = () => {
  return (
    <React.Fragment>
    <section>
      <div>
        {
             CardData2.map((item, index) => {
                return(
                    <div key={index}>
                        <div className="w-2/3 mx-auto min-h-96 centered space-y-4 px-5 py-10 flex-col bg-white shadow-lg rounded-lg mb-10 mt-24">
                        <img src={item.img} alt="" className="rounded-lg" />
                        <p className="text-2xl font-semibold">{item.title}</p>
                        <p>{item.body}</p>
                        </div>
                    </div>
                )
             })
        }
      </div>
    </section>
  </React.Fragment>
  )
}

export default Card2