import React from 'react';
import { useState, useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoIDs, setPhotoIDs] = useState([]);
  const updateFavouritedPhotoIDs = (id, action) => {
    if (!action) {
      setPhotoIDs((prevPhotoIDs) => [...prevPhotoIDs, id]);
    } else {
      setPhotoIDs(oldValues => {
        return oldValues.filter(itemID => itemID !== id);
      });
    }
  };

  useEffect(() => {
  }, [photoIDs]);

   return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} updateFavouritedPhotoIDs={updateFavouritedPhotoIDs} />
    </div>
  );
};
export default App;
