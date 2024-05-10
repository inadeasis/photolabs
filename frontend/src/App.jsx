import React from 'react';
import { useState } from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => {
    const [fav, setFav] = useState(false);
  const favPhoto = () => {
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
  };

   return (
        <div className="App">
      <TopicList />
      <PhotoList fav={fav} favPhoto={favPhoto} />
    </div>
  );
};
//   const photos = [...Array(3)];
//   const sampleArrayOfPhotos = photos.map((photo, i) => 
//       <PhotoList key={i} photo={sampleDataForPhotoListItem} />
    
//    );

//    return (
//     <div className="App">
//     <TopicList/>
//      {sampleArrayOfPhotos}
     
//    </div>
//    );

   
  
// }

export default App;
