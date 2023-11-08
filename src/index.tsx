import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import CardBoard from './components/card-board';
import StatisticPanel from './components/statistics-panel';
import { Provider } from 'react-redux';
import { store } from './contexts/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="column game-container">
                <StatisticPanel/>
                <CardBoard />
            </div>
        </Provider>
    </React.StrictMode>
);
