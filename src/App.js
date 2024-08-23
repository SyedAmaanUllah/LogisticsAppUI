import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShipmentManager from './Components/ShipmentManager';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <h1>Shipment Management System</h1>
          <ShipmentManager />
      </div>
  </Provider>
  );
}

export default App;
