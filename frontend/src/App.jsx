import React from 'react';
import { useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {photoIDs, modalPhotoData, updateFavouritedPhotoIDs, updateModalData, fetchData } = useApplicationData();

  useEffect(() => {
   console.log(photoIDs);
  }, [modalPhotoData]);

   return (
    <div className="App">
      <HomeRoute 
        topics={fetchData.topicData}
        photos={fetchData.photoData}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        //setDisplayModal={setModalPhotoData} 
        updateModalData={updateModalData} />
      
      {modalPhotoData && <PhotoDetailsModal 
        modalPhotoData={modalPhotoData}
        updateModalData={updateModalData}
        updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
        />}
      
    </div>
  );
};
export default App;
