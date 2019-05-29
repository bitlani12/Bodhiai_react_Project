import {
  FETCHING_ONLINE_TEST,
  SUBMIT_TEST,
  SMART_TEST_SUBJECT,
  SMART_TEST_DATA,
  REDIRECT_FALSE
} from "./types";
import axios from "axios";
import { get_current_view } from "./ChatbotAction";
const apiUrl = "https://www.bodhiai.in/api/papers/take_test/";
const apiUrl2 = "https://www.bodhiai.in/api/papers/evaluate_test_android/";
const apiUrl3 = "https://www.bodhiai.in/api/papers/smart_test_subjects/";
const apiUrl4 = "https://www.bodhiai.in/api/papers/smart_test_create/";
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;
export const fetchOnlineTest = data => {
  return {
    type: FETCHING_ONLINE_TEST,
    data
  };
};
export const TestSubmit = data => {
  return {
    type: SUBMIT_TEST,
    data
  };
};
export const fetchSmartTestSubject = data => {
  return {
    type: SMART_TEST_SUBJECT,
    data
  };
};
export const fetchSmartTest = data => {
  return {
    type: SMART_TEST_DATA,
    data
  };
};

export const Redirect_False = data => {
  return {
    type: REDIRECT_FALSE
  };
};
//==================================================================
export const fetchOnlineTestData = testid => {
  return dispatch => {
    return axios
      .post(
        apiUrl,
        { test_id: testid },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response + "this is response from redux"),
          dispatch(fetchOnlineTest(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
export const TestSubmitData = (testid, answers, totaltime, subject) => {
  return dispatch => {
    return axios
      .post(
        apiUrl2,
        { test_id: testid, answers: answers + "", total_time: totaltime },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(TestSubmit(response.data));
        // document.location.href= `/#/testperformance/${testid}/${subject}`
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
export const fetchSmartTestSubjectData = () => {
  return dispatch => {
    return axios
      .get(apiUrl3, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchSmartTestSubject(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
export const fetchSmartTestData = subject => {
  return dispatch => {
    return axios
      .post(
        apiUrl4,
        { subject: subject },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        if (response.status === 200 && response != null) {
          dispatch(fetchSmartTest(response.data));
        } else {
          dispatch(fetchSmartTest("Empty data"));
        }
      })
      .catch(error => {
        dispatch(fetchSmartTest("Empty data"));
      });
  };
};

export const redirectfalse = subject => {
  return dispatch => {
    return dispatch(Redirect_False()); //axios.post(apiUrl4 , { subject :subject }, {headers : { 'Authorization': AuthString } })
    //   .then(response => {
    //       if(response.status === 200 && response != null){
    //     dispatch(fetchSmartTest (response.data));
    // }else {
    //     dispatch(fetchSmartTest("Empty data"))
    // }
    //   })
    //   .catch(error => {
    //     dispatch(fetchSmartTest("Empty data"))
    //   });
  };
};
