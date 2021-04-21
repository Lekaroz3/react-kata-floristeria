import "./App.css";
import GridFloristeria from "./components/grid/grid";
import Menu from "./components/menu/menu";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DetallesFlor from "./components/detalles/detallesItem";
import { FlorProvider } from "./context/FlorContext";
import { BroadCumpProvider } from "./context/BroadCumpContext";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <BroadCumpProvider>
        <div className="App">
          <Menu></Menu>
          <header className="App-header">
            <Switch>
              <FlorProvider>
                <Route path="/">
                  <Redirect exact from="/" to="floristeria" />
                </Route>
                <Route
                  path="/floristeria"
                  component={GridFloristeria}
                  exact
                ></Route>
                <Route
                  path="/floristeria/flor"
                  component={DetallesFlor}
                  exact
                ></Route>
              </FlorProvider>
            </Switch>
          </header>
        </div>
      </BroadCumpProvider>
    </BrowserRouter>
  );
}

export default App;
