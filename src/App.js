import './App.scss';

import React from 'react';
import Header from './layout/Header/Header';
import Realtors from './components/Realtors/Realtors';
import Features from './components/Features/Features';
import Story from './components/Story/Story';
import Homes from './layout/Homes/Homes';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <body className="container">
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
    </body>
  );
}

export default App;
