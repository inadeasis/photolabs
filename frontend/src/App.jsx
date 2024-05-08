import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicListItem from 'components/TopicListItem';

// Note: Rendering a single component to build components in isolation
const App = () => {

  <TopicListItem/>
  
  const photos = [...Array(3)];
  const sampleArrayOfPhotos = photos.map((photo, i) => 
      <PhotoList key={i} photo={sampleDataForPhotoListItem} />
    
    
   );

   return (
    <div className="App">
     {sampleArrayOfPhotos}
     
   </div>
   );

   
  
}

export default App;
