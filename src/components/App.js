import NabBar from "./NabBar";
import { Switch, Route } from "react-router-dom";
import StateCheck from "./StateCheck";
import ReducerCheck from "./ReducerCheck";
import ReduxCheck from "./ReduxCheck";
import Home from "./Home";
import ContextCheck from "./ContextCheck";

import store from "../redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <NabBar />
      <Switch>
        <Route path="/state">
          <StateCheck />
        </Route>
        <Route path="/reducer">
          <ReducerCheck />
        </Route>
        <Route path="/redux">
          <ReduxCheck />
        </Route>
        <Route path="/context">
          <ContextCheck />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
