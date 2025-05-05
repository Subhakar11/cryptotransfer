import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import { CookiesProvider } from 'react-cookie';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
 
    <TransactionsProvider>
    <CookiesProvider>
      <App />
      </CookiesProvider>
      </TransactionsProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);