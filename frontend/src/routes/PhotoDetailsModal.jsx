import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({closeDisplayModal, modalPhotoData, setModalData, updateFavouritedPhotoIDs }) => {

    if (!modalPhotoData || !modalPhotoData.urls) {
    return null;
  }

  return (
    <div className="photo-details-modal">
    <button onClick={() => closeDisplayModal(false, {})}className="photo-details-modal__close-button"> <img src={closeSymbol} alt="close symbol" />
    </button>
    
    <div className="photo-details-modal__images">
      <PhotoFavButton updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
      modalPhotoData={modalPhotoData}/>

      <img src={modalPhotoData.urls.regular} className="photo-details-modal__image" alt="main" />

      <h1 className="photo-details-modal__header">Similar Photos</h1>
      <div className="photo-details-modal__images">
        <PhotoList photos={modalPhotoData.similarPhotos || []}/>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
