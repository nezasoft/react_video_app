import React from 'react';
//import ReactDOM from 'react-dom/client';
//import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

import './index.css';


//const root = ReactDOM.CreateRoot(document.getElementById('root'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);