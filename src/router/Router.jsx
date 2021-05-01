import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopPage } from "../TopPage";
import { TrashBoxPage } from "../TrashBoxPage";

export const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <TopPage />
      </Route>
      <Route path="/delete">
        <TrashBoxPage />
      </Route>
    </Switch>
  </BrowserRouter>
  );
};