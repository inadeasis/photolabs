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

  let [modalPhotoData, setModalPhotoData] = useState({});

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

  const setModalData = (flag, item) => {
    setDisplayModal(flag);
    setModalPhotoData(item);
  };

  { isFavourited = photoIDs.length ? !isFavourited : isFavourited; }


  useEffect(() => {
   // console.log(photoIDs);
  }, [photoIDs]);

   return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} updateFavouritedPhotoIDs={updateFavouritedPhotoIDs} isFavourited={isFavourited} setDisplayModal={setDisplayModal} setModalData={setModalData} />
      {modalPhotoData && <PhotoDetailsModal setDisplayModal={setDisplayModal} />}
      setModalData={setModalData}
    </div>
  );
};
export default App;
