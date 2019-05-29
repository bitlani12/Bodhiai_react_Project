import { SET_LANGUAGE, Set_SUBJECT } from "./types";
import axios from "axios";
const apiUrl1 =
  "https://www.bodhiai.in/api/membership/register_student_course_language/";
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;
export const language = data => {
  return {
    type: SET_LANGUAGE,
    data
  };
};
export const subject = data => {
  return {
    type: Set_SUBJECT,
    data
  };
};
//{ 'Authorization':`Token ${ localStorage.getItem('Token')}`}
//====================================================================
export const setLanguageandSubject = (selectedlanguage, selectedsubject) => {
  return dispatch => {
    console.log({ headers: `Token ${localStorage.getItem("Token")}` });
    return axios
      .post(
        apiUrl1,
        { language: selectedlanguage, course: selectedsubject },
        { headers: { Authorization: `Token ${localStorage.getItem("Token")}` } }
      )
      .then(response => {
        console.log(response + "this is response from redux"),
          dispatch(language(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

// export const setSubject  = (selectedsubject) => {

//   return (dispatch) => {
//       return axios.post(apiUrl1 , { subject : selectedsubject}, {headers : { 'Authorization': AuthString } })
//         .then(response => {
//           console.log(response + 'this is response from redux'),
//           dispatch(subject (response.data));
//         })
//         .catch(error => {
//           console.log(error.message);
//         });
//     };
// };
