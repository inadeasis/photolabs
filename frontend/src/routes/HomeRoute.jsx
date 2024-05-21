import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';



const HomeRoute = (props) => {
  const { topics, photos, updateFavouritedPhotoIDs } = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <div className="photo-list">
        <PhotoList photos={photos} updateFavouritedPhotoIDs={updateFavouritedPhotoIDs} />
      </div>
    </div>
  );
};

export default HomeRoute;
