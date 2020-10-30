import React, { useState } from "react";

import "./card.styles.scss";

const Card: React.FC<{ name: string }> = ({ name }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="card__wrapper">
      <p>{name}</p>
    </div>
  );
};

export default Card;
