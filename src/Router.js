import { Cart, Products } from "./pages";

const { BrowserRouter, Switch, Route } = require("react-router-dom");

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
