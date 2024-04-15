import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const username = props.username
  const imageSource = props.imageSource
  const id = props.id
  const location = props.location
  const profile = props.profile

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
