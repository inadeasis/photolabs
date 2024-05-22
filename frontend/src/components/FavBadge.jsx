import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavourited }) => {
  console.log(isFavourited);
  return (
    <div className='fav-badge'>
      <FavIcon selected={true} displayAlert={!!isFavourited}/>
    </div>
  ) 
};

export default FavBadge;