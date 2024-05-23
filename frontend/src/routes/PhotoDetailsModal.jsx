import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({closeDisplayModal, modalPhotoData, setModalData }) => {
  console.log(modalPhotoData);
  return (
    <div className="photo-details-modal">
    <button onClick={() => setModalData(false, {})}className="photo-details-modal__close-button"> <img src={closeSymbol} alt="close symbol" />
    </button>
    </div>
  )
};

export default PhotoDetailsModal;
