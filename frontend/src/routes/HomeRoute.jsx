import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";


const HomeRoute = ({
  photos,
  topics,
  setDisplayModal,
  favoritedPhotos,
  toggleFavorite,
  displayAlert,
  openModal,
  numFavoritedPhotos,
  setSelectedTopic,
  onLoadTopic,

}) => {

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        displayAlert={displayAlert}
        numFavoritedPhotos={numFavoritedPhotos}
        setSelectedTopic={setSelectedTopic}
        onLoadTopic={onLoadTopic}
      />

      <PhotoList
        photos={photos.map((photo) => ({
          ...photo,
          similarPhotos: photo.similar_photos,
        }))}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        setDisplayModal={setDisplayModal}
        openModal={openModal} 
      />
    </div>
  );
};

export default HomeRoute;