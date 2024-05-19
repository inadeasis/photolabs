import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos } = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <div className="photo-list">
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};

export default HomeRoute;
