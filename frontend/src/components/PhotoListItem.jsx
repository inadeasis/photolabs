import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  /* Insert React */
  return (
    <div className="">
      <img>{photo.username}</img>
      <img>{photo.mageSource}</img>
      <img>{photo.id}</img>
      <img>{photo.location.city}, {photo.location.country}</img>
      <img>{photo.profile}</img>
      
    </div>  
    );
};

export default PhotoListItem;
