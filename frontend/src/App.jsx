import React from 'react';
import { useState, useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {photoIDs, displayModal, modalPhotoData, updateFavouritedPhotoIDs, setModalData } = useApplicationData();

  const handleFavouriteToggle = (photo) => {
    setFavouritedPhotos((prevFavourites) => {
      if (prevFavourites.includes(photo.id)) {
        return prevFavourites.filter((id) => id !== photo.id);
      } else {
        return [...prevFavourites, photo.id];
      }
    });
  };

  useEffect(() => {
   console.log(photoIDs);
  }, [modalPhotoData]);

   return (
    <div className="App">
      <HomeRoute 
      topics={topics} 
      photos={photos}
      updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
      handleFavouriteToggle={handleFavouriteToggle}
      setModalData={setModalData} />
      
      {modalPhotoData && <PhotoDetailsModal 
        modalPhotoData={modalPhotoData}
        setModalData={setModalData}
        handleFavouriteToggle={handleFavouriteToggle}
        />}
      
    </div>
  );
};
export default App;
