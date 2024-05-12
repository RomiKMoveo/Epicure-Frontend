import React from "react";

import "./IconsMeaningItem.scss";

interface IconMeaningItemInterface {
  icon: string;
  alt: string;
  caption: string;
}

const IconMeaningItem: React.FC<IconMeaningItemInterface> = ({ icon, alt, caption }) => {
  return (
    <figure className="icon-meaning-item">
      <img src={icon} alt={alt} className="icon-img" />
      <figcaption className="icon-caption">{caption}</figcaption>
    </figure>
  );
};

export default IconMeaningItem;

