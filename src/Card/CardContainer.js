import React from "react";
import Card from "./Card.js";

const CardContainer = ({ cardContent }) => {
  return cardContent.map((user, i) => {
    return (
      <Card
        title={user.title}
        description={user.description}
        descriptionList={user.descriptionList}
        image={user.image}
      />
    );
  });
};

export default CardContainer;
