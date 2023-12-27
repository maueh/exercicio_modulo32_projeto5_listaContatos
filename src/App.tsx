import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store";

import EstiloGlobal, { Container } from "./styles";

import Home from "./pages/Home";
import Contato from "./pages/Contato";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EstiloGlobal />
        <RouterProvider router={rotas}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
