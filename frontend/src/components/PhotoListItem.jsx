import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  /* Insert React */
return (
    <div className="photo-list__user-profile">
      <div className="photo-list__user-info">
        <p>{photo.username}</p>
        <img src={photo.imageSource} alt="photo" />
        <p>{photo.id}</p>
      </div>

    <p className="photo-list__location">{photo.location.city}, {photo.location.country}</p>

    <img className="photo-list__image" src={photo.profile} alt="profile" />
    </div>  
  );
};

export default PhotoListItem;
