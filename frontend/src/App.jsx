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

  let isFavourited = false;

  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      setPhotoIDs((prevPhotoIDs) => [...prevPhotoIDs, id]);
    } else {
      setPhotoIDs(oldValues => {
        return oldValues.filter(itemID => itemID !== id);
      });
    }
  };

  { isFavourited = photoIDs.length ? !isFavourited : isFavourited; }


  useEffect(() => {
  }, [photoIDs]);

   return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} updateFavouritedPhotoIDs={updateFavouritedPhotoIDs} isFavourited={isFavourited} />
      <PhotoDetailsModal />
    </div>
  );
};
export default App;
