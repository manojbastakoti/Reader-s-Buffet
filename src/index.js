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
import Cookies from "js-cookie";
axios.defaults.baseURL = process.env.REACT_APP_BASE_API;
axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
  "token"
)}`;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer position="bottom-left" limit={4} autoClose={3000} />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
