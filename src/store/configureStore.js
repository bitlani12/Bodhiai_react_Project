import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import auth from './reducers/auth';
import sidebarreducer from './reducers/sidebarreducer'
import { composeWithDevTools } from 'redux-devtools-extension';

import dashboardReducer from './reducers/dashboardreducer';
import onlinetestreducer from  './reducers/onlinetestreducer';
import progressreducer from "./reducers/progressreducer";
import AuthenticateReducer from "./reducers/AuthenticationReducer";
import maindashboardReducer from './reducers/maindashboardreducer';
import messagereducer from './reducers/messagereducer';
import ChatbotReducer from "./reducers/ChatBotReducer";
// var console = {};

// window.console = console;
// console.log = function(){};
// console.error = function(){};
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  onlinetest : onlinetestreducer ,
  progress: progressreducer,
  authenticate:AuthenticateReducer,
  auth: auth,
  maindashboard : maindashboardReducer,
  sidebar : sidebarreducer,
  message: messagereducer,
  chatbot: ChatbotReducer
});

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
// loger for hiding api in console
const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,logger
    )));
};

export default configureStore;
