import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="card ">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info bottom">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
