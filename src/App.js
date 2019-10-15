import React from 'react';
import './App.css';

import Main from './components/Main'
import { Provider } from "react-redux";
import { store } from '../src/redux/store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
