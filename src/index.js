import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);
// The App Component has been place in-between the Provider tag.
// The App Component is going to show as a prop to our Provider called Children
root.render(
    <Provider>
        <App />
    </Provider>
);