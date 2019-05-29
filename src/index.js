import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

import indexRoutes from "routes/index.jsx";
import ReactGA from "react-ga";
import configureStore from "./store/configureStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import Rank from "./views/Dashboard/Rank";
//import Login from "./views/Login/Login";
import setAuthorizationtoken from "./store/actions/setAuthorizationtoken";
import { setCurrentUser } from "./store/actions/authentication";
//import SelectSubject from "./views/SelectLanguageandSubjectinLogin/SelectSubject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Registration from "./views/Registration/Registration";
import createHistory from "history/createBrowserHistory";
//import Iiitjeeregistration from "./views/IIT_JEE_registraion/IITJEEregistration";

import Loadable from "react-loadable";

const Loads = ({ isLoading, error }) => {
  return <div />;
};
const Login = Loadable({
  loader: () => import("./views/Login/Login"),
  loading: Loads
});
const SelectSubject = Loadable({
  loader: () => import("./views/SelectLanguageandSubjectinLogin/SelectSubject"),
  loading: Loads
});
const Registration = Loadable({
  loader: () => import("./views/Registration/Registration"),
  loading: Loads
});
const Iiitjeeregistration = Loadable({
  loader: () => import("./views/IIT_JEE_registraion/IITJEEregistration"),
  loading: Loads
});
const history = createHistory();

history.listen((location, action) => {
  ReactGA.initialize("UA-133831033-1");
  ReactGA.pageview(location.pathname + location.search);
  console.log(location.pathname, "this is pathname");
});
console.log("this is working ");
const store = configureStore();
if (localStorage.Token) {
  setAuthorizationtoken(localStorage.Token);
  console.log(setAuthorizationtoken(localStorage.Token), "yes this is set ");
  store.dispatch(setCurrentUser(localStorage.Token));
}
// Remove loader when it is loaded

ReactDOM.render(
  <div>
    <div>
      <Provider store={store}>
        <HashRouter history={history}>
          {/* <Router   > */}
          <Switch>
            `
            <Route exact path="/login" component={Login} />
            <Route exact path="/userregistration" component={Registration} />
            <Route
              exact
              path="/iitjeeregistration"
              component={Iiitjeeregistration}
            />
            {<Route exact path="/selectsubject" component={SelectSubject} />}
            {indexRoutes.map((prop, key) => {
              return (
                <Route
                  exact
                  to={prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
          {/* </Router> */}
        </HashRouter>
      </Provider>
    </div>
  </div>,
  document.getElementById("root")
);
