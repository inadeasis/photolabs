import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, updateFavouritedPhotoIDs, updateModalData } = props;
  
return (
  <ul className="photo-list">
    {photos.map((item) => <li key={item.id}>
      <PhotoListItem 
        item={item} 
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs} 
        updateModalData={updateModalData}
      />
    </li>)}
  </ul>
);
};

export default PhotoList;
