import React from "react";

import Card from "../card/Card";
import { pricing } from "../../data/pricingAPI";

const CardList = () => {
  const cardComponent = pricing.map((price) => {
    return (
      <Card
        key={price.id}
        name={price.name}
        currency={price.currency}
        price={price.price}
        ram={price.ram}
        size={price.size}
      />
    );
  });

  return <div>{cardComponent}</div>;
};

export default CardList;
