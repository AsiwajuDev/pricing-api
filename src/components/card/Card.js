import React from "react";

const Card = ({ name, price, currency, ram, size }) => {
  return (
    //Renders Card
    <div className="dib ma4 grow bw2 shadow-4 br4">
      <div>
        <h2 className="mv4">{name}</h2>
        <i class={`fas fa-${currency}-sign fa-2x`}></i>
        <p className="f1 ma0">{price}</p>
        <div className="ma4">
          <p>
            <i class="fas fa-check">
              <li className="dib mh2">{ram}</li>
            </i>
          </p>
          <p>
            <i class="fas fa-check">
              <li className="dib mh2">{size}</li>
            </i>
          </p>
        </div>
        <a type="button" href="home" className="bg-red pv3 ph5">
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Card;
