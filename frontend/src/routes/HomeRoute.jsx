import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";


const HomeRoute = ({
  photos,
  setDisplayModal,
  favoritedPhotos,
  toggleFavorite,
  openModal,

}) => {

  return (
    <div className="home-route">

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