import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={photo.imageSource} alt="photo" />
      <div className="photo-list__user-info">
        <p>{photo.username}</p>
        <img className="photo-list__user-profile" src={photo.profile} alt="profile" />
        <div className="photo-list__user-location">
          {photo.location.city}, {photo.location.country}
        </div>
      </div>
    </div>  
  );
};
export default PhotoListItem;
