import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const handleClick = () => {
    setFavouritePhoto(prev => !prev);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button className="LightSwitchButton" onClick={handleClick}>
          <FavIcon isFavourite={favouritePhoto} />
        </button>
      </div>
    </div>
  );
}
export default PhotoFavButton;