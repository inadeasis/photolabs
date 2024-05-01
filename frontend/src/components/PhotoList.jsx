import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, updateFavouritedPhotoIDs, updateModalData, photoIDs }) => {

  const photoListItemArray = photos ? photos.map((item) =>
    <li key={item.id}>
      <PhotoListItem
        item={item}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        updateModalData={updateModalData}
        photoIDs={photoIDs}
      />
    </li>
  ) : null;

  return (
    <ul className="photo-list">
      {photoListItemArray}
    </ul>
  );
};

export default PhotoList;
