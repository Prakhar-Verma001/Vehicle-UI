import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Table1 from './Components/Table1'
import Table2 from './Components/Table2'
import Table3 from './Components/Table3'
import Table4 from './Components/Table4'
// import VechicleList from './Components/VechicleList';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='vehicle' element={<Table1 />} />
    <Route path='fuel' element={<Table2 />} />
    <Route path='Maintenance' element={<Table3 />} />
    <Route path='totalVehicle' element={<Table4 />} />
  </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
      {/* <App /> */}
  </React.StrictMode>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
