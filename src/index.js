import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async';
import { store } from "./redux/store";
import {theme} from "./theme/theme.config"
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <HelmetProvider>
                <ChakraProvider theme={theme} >
                  <App />
                </ChakraProvider>
            </HelmetProvider>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
