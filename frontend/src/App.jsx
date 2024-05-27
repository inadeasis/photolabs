import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import TopNavigation from "components/TopNavigationBar";


import "./App.scss";

const App = () => {
  const {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    numFavoritedPhotos,
    setSelectedTopic,
    onLoadTopic,
  } = useApplicationData();

  const { displayModal, favoritedPhotos, selectedPhoto, similarPhotos } = state;

  const isFavourited = favoritedPhotos.length > 0;


  return (
    <div className="App">
      <TopNavigation 
        topics={state.topicData} 
        isFavourited={isFavourited}
        onLoadTopic={onLoadTopic} />

      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        numFavoritedPhotos={numFavoritedPhotos}
        setSelectedTopic={setSelectedTopic}
        onLoadTopic={onLoadTopic}
      />

      {displayModal && (
        <PhotoDetailsModal
          onClose={() => closeModal()}
          photo={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
          similarPhotos={similarPhotos}
        />
      )}
    </div>
  );
};

export default App;
