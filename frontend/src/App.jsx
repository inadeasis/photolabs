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

  useEffect(() => {
   console.log(photoIDs);
  }, [modalPhotoData]);

   return (
    <div className="App">
      <HomeRoute 
      topics={topics} 
      photos={photos}
      updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
      setModalData={setModalData} />
      
      {modalPhotoData && <PhotoDetailsModal 
        modalPhotoData={modalPhotoData}
        setModalData={setModalData}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        />}
      
    </div>
  );
};
export default App;
