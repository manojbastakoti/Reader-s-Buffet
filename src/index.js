import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
axios.defaults.baseURL = process.env.REACT_APP_BASE_API;
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer position="bottom-left" limit={4} />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
