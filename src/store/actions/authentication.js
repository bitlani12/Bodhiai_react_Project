import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_CURRENT_USER,
  USERNAME_EXIST,
  REGISTER_SUCCESS,
  LOAD,
  IIT_JEE_REGISTRATION_SUCCESS,
  IIT_JEE_REGISTRATION_FAILED
} from "./types";
import setAuthorizationtoken from "./setAuthorizationtoken";
import history from "./../../views/Login/History";
import axios from "axios";

const apiURl8 = "https://www.bodhiai.in/api/membership/custom_login/";
const apiURl9 =
  "https://www.bodhiai.in/api/membership/b2c_student_registration/";
const apiURl10 = "https://www.bodhiai.in/api/membership/24_jan_registration/";
export const load = () => {
  return {
    type: LOAD
  };
};

export const success = data => {
  return {
    type: LOGIN_SUCCESS,
    data
  };
};

export const registersuccess = data => {
  return {
    type: REGISTER_SUCCESS,
    data
  };
};

export const loginFailed = data => {
  return {
    type: LOGIN_ERROR,
    data
  };
};

export const setCurrentUser = (user, isauthtrue) => {
  return {
    type: SET_CURRENT_USER,
    user,
    isauthtrue
  };
};
export const UserNameExist = () => {
  return {
    type: USERNAME_EXIST
  };
};
export const iitjeeregistersuccess = registertrueorfalse => {
  if (registertrueorfalse === true) {
    return {
      type: IIT_JEE_REGISTRATION_SUCCESS
    };
  } else {
    return {
      type: IIT_JEE_REGISTRATION_FAILED
    };
  }
};
// ================================================================================

export const LoginUser = (username, password) => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(apiURl8, { username: username, password: password })
      .then(response => {
        {
          dispatch(success(response.data));
          localStorage.setItem("Token", response.data.key),
            localStorage.setItem("username", response.data.name),
            localStorage.setItem("name", response.data.display_name),
            localStorage.setItem("photo", response.data.photo),
            localStorage.setItem("batch", response.data.batch),
            console.log("yes this is working", response.data.key);
          setAuthorizationtoken(response.data.key);
          dispatch(setCurrentUser(response.data.key, true));
          // console.log(response.data,123)

          // window.location.reload();
        }
        response.data.hasCourse
          ? (document.location = "/")
          : (document.location.hash = "/selectsubject");
      })
      .catch(error => {
        dispatch(loginFailed()), console.log("wrong ");
      });
  };
};

export const UserRegistration = (username, password, name, code) => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(apiURl9, {
        username: username,
        password: password,
        name: name,
        institute: "bodhiai"
      })
      .then(response => {
        {
          dispatch(registersuccess(response.data));
          localStorage.setItem("Token", response.data.token.token),
            localStorage.setItem("username", response.data.username),
            console.log("yes this is working", response.data.token.token);
          setAuthorizationtoken(response.data.key);
          dispatch(setCurrentUser(response.data.token.token, true));
        }
        document.location.hash = response.data.hasCourse
          ? "/"
          : "/selectsubject";
      })
      .catch(error => {
        dispatch(loginFailed()), console.log("wrong ");
      });
  };
};

export const iitjeeregistration = (phone, email, name, shift) => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(apiURl10, { phone: phone, email: email, name: name, shift: shift })
      .then(response => {
        {
          dispatch(iitjeeregistersuccess(true, response.data));
          // localStorage.setItem('Token', response.data.token.token),localStorage.setItem('username', response.data.username)
          // , console.log("yes this is working" , response.data.token.token) ; setAuthorizationtoken(response.data.key) ; dispatch(setCurrentUser(response.data.token.token , true));
        } //document.location.hash=response.data.hasCourse ?  "/" : "/selectsubject";
      })
      .catch(error => {
        dispatch(iitjeeregistersuccess(false)), console.log("wrong ");
      });
  };
};
//   localStorage.setItem('Token', response.data.key),localStorage.setItem('username', response.data.name)
//   , console.log("yes this is working" , response.data.key) ; setAuthorizationtoken(response.data.key) ; dispatch(setCurrentUser(response.data.key , true));

//   console.log(response.data.username , "this is working ")
//   if(response.data.username.substr(0, response.data.username.indexOf(',')) === "This username already exists"){
//       return console.log(response.data.username , "this is username") , dispatch(UserNameExist)
//   }

export const LogoutUser = token => {
  return dispatch => {
    return axios
      .post(apiURl8, { Token: token })
      .then(
        localStorage.removeItem("Token"),
        setAuthorizationtoken(false),
        dispatch(setCurrentUser({}))
      );
  };
};
