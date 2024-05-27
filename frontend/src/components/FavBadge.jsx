import React from 'react';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavourited }) => {
  return (
    <div className='fav-badge'>
      <i className="fas fa-heart"></i>
      {isFavourited && <span className="fav-badge__notification" >.</span>}
    </div>
  ) 
};

export default FavBadge;