import                                     './index.css';
import React                          from 'react';
import ReactDOM                       from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App                            from './App';
import MCQ1                           from './pages/MCQ1';
import OpenEnded1                     from './pages/OpenEnded1';
import Banner                         from './components/Banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
      <BrowserRouter>
      <Banner />
          <Routes>
              <Route path="/"           element={<App/> }       />
              <Route path="/mcq1"       element={<MCQ1/>}       />
              <Route path="/openended1" element={<OpenEnded1/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);