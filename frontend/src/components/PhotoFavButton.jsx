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
        <FavIcon isFavourite={favouritePhoto} onClick={handleClick} />
      </div>
    </div>
  );
}
export default PhotoFavButton;