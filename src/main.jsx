import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SolicitudesProvider } from './context/SolicitudesProvider';
import { TemaProvider } from './context/TemaProvider';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <SolicitudesProvider>
                    <TemaProvider>
                        <App />
                    </TemaProvider>
                </SolicitudesProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);