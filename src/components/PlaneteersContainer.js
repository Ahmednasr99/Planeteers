import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteers}) {
  return (
    <ul className="cards">
      {
        planeteers.map((element)=>{
          return(
            <Planeteer element={element}/>
          )
        })
      }
    </ul>
  );
}

export default PlaneteersContainer;
