import React from "react";
import cardStyle from "./Card.module.scss";

const Card = ({ img, name, role }) => {
  return (
    <div className={cardStyle.div}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default Card;
