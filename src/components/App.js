import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Menu from "./Menu";
import Usuarios from "./Usuarios/index";

// Solo para ejercicio rapido
const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/" component={Usuarios} />
    <Route exact path="/tareas" component={Tareas} />
  </BrowserRouter>
);

export default App;
