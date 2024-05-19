import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos } = props;

  const photoListItemArray = photos.map((item) =>
    <li key={item.id}><PhotoListItem item={item} /></li>
  );
  
  return (
  <ul className="photo-list">
      {photoListItemArray}
    </ul>
  );
};

export default PhotoList;
