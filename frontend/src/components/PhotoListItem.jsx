import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = (props) => {
  const { urls, user, location } = props.photoData;

  return (
  <div className="photo-list__item">
    <PhotoFavButton />
    <img className="photo-list__image" src={props.urls.regular} alt="photo" />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={props.user.profile} alt="" />
      <div>
        <p className="photo-list__user-info">{props.user.username}</p>
        <p className="photo-list__user-location">{props.location.city} {props.location.country}</p>
      </div>  
  </div>
</div>
  );
};
export default PhotoListItem;
