import './App.scss';

import React from 'react';
import Header from './layout/Header/Header';
import Realtors from './components/Realtors/Realtors';
import Features from './components/Features/Features';
import Story from './components/Story/Story';

function App() {
  return (
    <body className="container">
      <Header />
      <Realtors />
      <Features />
      <Story />
    </body>
  );
}

export default App;
