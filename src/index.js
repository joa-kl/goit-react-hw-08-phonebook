import React from 'react';
import ReactDOM from 'react-dom/client';
import App   from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./components/App"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </Provider>
      </PersistGate>
    </BrowserRouter >
  </React.StrictMode>
);
