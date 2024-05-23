import React from 'react';
import { useState, useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoIDs, setPhotoIDs] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalPhotoData, setModalPhotoData] = useState({});
  const [favouritedPhotos, setFavouritedPhotos] = useState([]);

  const handleFavouriteToggle = (photo) => {
    setFavouritedPhotos((prevFavourites) => {
      if (prevFavourites.includes(photo.id)) {
        return prevFavourites.filter((id) => id !== photo.id);
      } else {
        return [...prevFavourites, photo.id];
      }
    });
  };

  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      setPhotoIDs((prevPhotoIDs) => [...prevPhotoIDs, id]);
    } else {
      setPhotoIDs(oldValues => {
        return oldValues.filter(itemID => itemID !== id);
      });
    }
  };

  const setModalData = (flag, item) => {
    setDisplayModal(flag);
    setModalPhotoData(item);
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
      favouritedPhotos={favouritedPhotos}
      handleFavouriteToggle={handleFavouriteToggle}
      setDisplayModal={setModalPhotoData}
      setModalData={setModalData} />
      
      {modalPhotoData && <PhotoDetailsModal 
        modalPhotoData={modalPhotoData}
        setModalData={setModalPhotoData}
        isFavourited={favouritedPhotos.includes(modalPhotoData.id)}
        handleFavouriteToggle={handleFavouriteToggle}
        favouritedPhotos={favouritedPhotos}/>}
      
    </div>
  );
};
export default App;
