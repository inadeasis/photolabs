import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, updateFavouritedPhotoIDs, isFavourited, updateModalData } = props;
 
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavourited={ isFavourited } />
      <div className="photo-list">
        <PhotoList photos={photos} updateFavouritedPhotoIDs={updateFavouritedPhotoIDs} isFavourited={ isFavourited } 
        updateModalData={updateModalData}/>
      </div>
    </div>
  );
};

export default HomeRoute;
