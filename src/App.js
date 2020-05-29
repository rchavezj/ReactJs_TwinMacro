import './App.scss';

import React from 'react';
import Header from './layout/Header/Header';
import Realtors from './components/Realtors/Realtors';

function App() {
  return (
    <body className="container">
      <Header />
      <Realtors />
    </body>
  );
}

export default App;
