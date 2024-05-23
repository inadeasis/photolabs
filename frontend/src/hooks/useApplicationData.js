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
    setShowModal(flag);
    setModalPhotoData(item);
  };

    const handleFavouriteToggle = (photo) => {
    setFavouritedPhotos((prevFavourites) => {
      if (prevFavourites.includes(photo.id)) {
        return prevFavourites.filter((id) => id !== photo.id);
      } else {
        return [...prevFavourites, photo.id];
      }
    });
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