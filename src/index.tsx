import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'; 
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}> {/* Redux Provider를 가장 바깥쪽에 배치 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);


