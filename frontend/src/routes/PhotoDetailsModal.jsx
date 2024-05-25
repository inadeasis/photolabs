import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({
  modalPhotoData, 
  updateModalData,
  updateFavouritedPhotoIDs,
  setModalData
 }) => {

    if (!modalPhotoData || !modalPhotoData.urls) {
    return null;
  }

console.log(modalPhotoData);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
        src={closeSymbol} onClick={() => setModalData(null)} alt="close symbol" >
      </button>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__images_and_icon">
          <PhotoFavButton
            updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
            item={modalPhotoData}
          />
          <img src={modalPhotoData.urls.regular} className="photo-details-modal__image" alt="main image" />
        </div>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={modalPhotoData.user.profile} alt="profile photos" />
          <div >
            <p className="photo-list__user-info">{modalPhotoData.user.username}</p>
            <p className="photo-list__user-location">{modalPhotoData.location.city} {modalPhotoData.location.country}</p>
          </div>
        </div>

         {modalPhotoData.similarPhotos && modalPhotoData.similarPhotos.length > 0 && (
          <>
        <h1 className="photo-details-modal__header">Similar Photos</h1>
        
        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(modalPhotoData.similar_photos)}
            updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
          />
        </div>
         </>
        )}
      </div>
    </div >
  );
};


export default PhotoDetailsModal;
