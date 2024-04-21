import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
         <button className="LightSwitchButton">
        {/* When the state is favourited */}<span className="fave"><FavIcon /></span>
      </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;