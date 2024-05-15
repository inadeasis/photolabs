import React from 'react';
import { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';


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
      {/* <TopNavigationBar/> 
      <PhotoList fav={fav} favPhoto={favPhoto} /> */}
      <HomeRoute />
    </div>
  );
};
export default App;
