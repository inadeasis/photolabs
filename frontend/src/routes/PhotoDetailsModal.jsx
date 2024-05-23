import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({closeDisplayModal, modalPhotoData, setModalData, photos }) => {
  const item = modalPhotoData;

  return (
    <div className="photo-details-modal">
    <button onClick={() => setModalData(false, {})}className="photo-details-modal__close-button"> <img src={closeSymbol} alt="close symbol" />
    </button>
   
   <div className="photo-details-modal__images">
        <img src={item.urls.regular} className="photo-details-modal__image" alt="main image" />
        <h1 className="photo-details-modal__header">Similar Photos</h1>
        <div className="photo-details-modal__images">
          <PhotoList photos={item.similarPhotos}
          />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
