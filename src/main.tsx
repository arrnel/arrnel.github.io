import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './styles/App.css';
import {initAnalytics} from "./service/analytics/analytics.factory.ts";
import {initDownloadCv} from "./service/cv/cv.factory.ts";

initAnalytics();
initDownloadCv();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
