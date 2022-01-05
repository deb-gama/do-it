import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default Routes;
