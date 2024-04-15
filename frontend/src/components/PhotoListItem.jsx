import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({username, imageSource, id, location, profile}) => {
  /* Insert React */
  return (
    <div className="">
      <h6>{username}</h6>
      <h6>{imageSource}</h6>
      <h6>{id}</h6>
      <h6>{location}</h6>
      <h6>{profile}</h6>
      
    </div>  
    );
};

export default PhotoListItem;
