import React from "react";
import FavIcon from "./FavIcon";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = (props) => {
  const { urls, user, location } = props.photoData;

  return (
  <div className="photo-list__item">
    <PhotoFavButton fav={props.fav} favPhoto={props.favPhoto} />
    <img className="photo-list__image" src={urls.regular} alt="photo" />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={urls.profile} alt="profile" />
      <div className="photo-list__user-info">
        <p>{user.name}</p>
        <div className="photo-list__user-location">
          {location.city}, {location.country}
      </div>
    </div>
  </div>
</div>
  );
};
export default PhotoListItem;
