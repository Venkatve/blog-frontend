import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { ContextProvider } from "./context/Context";
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ContextProvider>


  </React.StrictMode>,
  document.getElementById('root')
);


