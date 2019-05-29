import { SIDEBAR_PROFILE } from "./types";
import axios from "axios";

const apiUrl = "https://www.bodhiai.in/api/basicinformation/student_profile/";
const apiUrl2 =
  "https://www.bodhiai.in/api/basicinformation/student_change_details/";
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;
export const fetchprofileofuser = data => {
  return {
    type: SIDEBAR_PROFILE,
    data
  };
};
export const changeprofile = data => {
  return {
    type: SIDEBAR_PROFILE,
    data
  };
};
// ==============================================
export const getstudentprofile = () => {
  return dispatch => {
    return axios
      .get(apiUrl, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchprofileofuser(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const changeprofileofuser = (
  name,
  photo,
  phone,
  email,
  course,
  language
) => {
  console.log(name, photo, phone, email, course, language);
  return dispatch => {
    return axios
      .post(
        apiUrl2,
        {
          full_name: name,
          photo: photo,
          phone: phone,
          email: email,
          course: course,
          language: language
        },
        { headers: { Authorization: `Token ${token}` } }
      )
      .then(response => {
        dispatch(changeprofile(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
