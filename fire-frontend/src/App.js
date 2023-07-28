import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Workspace from "./Components/Workspace/Workspace";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/workspace" component={Workspace} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
