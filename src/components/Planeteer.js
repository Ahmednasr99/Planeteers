import React,{useState} from "react";


function Planeteer({element}) {
  const {name,fromUSA,bio,pictureUrl,quote,twitter}=element
  const [visible,setVisible]=useState(true)
  return (
    <li className="cards__item">
      <div className="card">
        <div>
          <div onClick={()=>setVisible(!visible)}>
          <img
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
          </div>


        </div>

        <div className="card__content">
          <div className="card__title">{name}</div>
          {visible?
          (<p className="card__text"> {bio}</p>)
          :( <p className="card__text"> {quote}</p>)}
          <div className="card__detail">
            <p>{twitter}</p>
            
            <p>
              {
                fromUSA?"USA-BASED":"WORKING-OVERSEAS"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
