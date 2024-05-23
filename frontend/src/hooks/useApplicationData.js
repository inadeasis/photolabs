import { useState } from 'react';

const useApplicationData = () => {

  const [photoIDs, setPhotoIDs] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalPhotoData, setModalPhotoData] = useState({});
  const [favouritedPhotos, setFavouritedPhotos] = useState([]);


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

  return {
    photoIDs,
    displayModal,
    modalPhotoData,
    updateFavouritedPhotoIDs,
    setModalData
  };
};

export default useApplicationData;