import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  /* Insert React */
return (
    <div className="photo-list__item">
      <p>{photo.username}</p>
      <img src={photo.imageSource} alt="photo" />
      <p>{photo.id}</p>
      <p>{photo.location.city}, {photo.location.country}</p>
      <img src={photo.profile} alt="profile" />
    </div>  
  );
};

export default PhotoListItem;
