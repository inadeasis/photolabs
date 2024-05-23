import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = (props) => {
  const { photo, item, updateFavouritedPhotoIDs, setDisplayModal } = props;

  const [selected, setSelected] = useState(false);

  // const clicked = () => {
  //   if (selected) {
  //     setSelected(false);
  //     updateFavouritedPhotoIDs(item.id, selected);
  //     setDisplayModal(photo);
  //   } else {
  //     setSelected(true);
  //     updateFavouritedPhotoIDs(item.id, selected);
  //     setDisplayModal(true);
  //   }
  // };

    const handlePhotoClick = () => {
    updateFavouritedPhotoIDs(item.id, selected);
    setDisplayModal(photo);
  };

  return (
  <div className="photo-list__item">
    <PhotoFavButton 
    updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
    item={item} />

    <img className="photo-list__image" onClick={handlePhotoClick} src={item.urls.regular} alt="photo" />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={item.user.profile} alt="profile pic" />
      <div>
        <p className="photo-list__user-info">{item.user.username}</p>
        <p className="photo-list__user-location">{item.location.city} {item.location.country}</p>
      </div>  
  </div>
</div>
  );
};
export default PhotoListItem;
