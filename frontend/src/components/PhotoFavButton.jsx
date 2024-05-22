import React, { useState, useEffect} from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// function PhotoFavButton() {
//   const [favouritePhoto, setFavouritePhoto] = useState(false);

  // const handleClick = () => {
  //   setFavouritePhoto(prev => !prev);
  //   console.log('clicked')
  // };
  
const PhotoFavButton = (props) => {
  const { clickOnIcon, selected } = props;

  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const handleClick = () => {
    setFavouritePhoto(prev => !prev);
    console.log('clicked')
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon clickOnIcon={clickOnIcon} selected={selected} />
      </div>
    </div>
  );
}
export default PhotoFavButton;