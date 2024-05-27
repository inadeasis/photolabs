import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavourited }) => {
  return (
    <div className='fav-badge'>
      {/* <FavIcon selected={true} displayAlert={!!isFavourited} /> */}
      <i className="fas fa-heart"></i>
      {isFavourited && <span className="fav-badge__notification" >.</span>}
    </div>
  ) 
};

export default FavBadge;