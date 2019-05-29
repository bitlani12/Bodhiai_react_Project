import {
  FETCHING_DASHBOARD,
  FETCHING_DASHBOARD_TEST_PERFORMANCE,
  FETCHING_DASHBOARD_ACCURACY,
  FETCHING_DASHBOARD_AVERAGETIME,
  FETCHING_DASHBOARD_PROGRESS,
  FETCHING_DASHBOARD_RANK,
  FETCHING_DASHBOARD_ALLTEST,
  FETCHING_DASHBOARD_TAKE_TEST,
  FETCHING_DASHBOARD_ACCURACY_MOREDETAIL,
  LOAD,
  CHECK_SUBJECT
} from "./types";
import axios from "axios";

const apiURl0 = "https://www.bodhiai.in/api/membership/check_subject/";
const apiUrl = "https://www.bodhiai.in/api/papers/paper_details_android/";
const apiURl2 =
  "https://www.bodhiai.in/api/basicinformation/student_previous_performance_detailed/";
const apiURl3 =
  "https://www.bodhiai.in/api/basicinformation/student_weak_accuracy_brief/";
const apiUrl4 =
  "https://www.bodhiai.in/api/basicinformation/student_chapter_timing/";
const apiUrl5 =
  "https://www.bodhiai.in/api/basicinformation/student_progress_brief/";
const apiUrl6 =
  "https://www.bodhiai.in/api/basicinformation/student_test_rank/";
const apiUrl7 = "https://www.bodhiai.in/api/papers/paper_details_android/";
const apiURl8 = "https://www.bodhiai.in/api/papers/individual_test_details/";
const apiURl9 =
  "https://www.bodhiai.in/api/basicinformation/student_weak_accuracy_detail/";
const apiUrl10 = "https://www.bodhiai.in/api/papers/paper_details_filter/";
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;
export const fetchchecksubject = data => {
  return {
    type: CHECK_SUBJECT,
    data
  };
};
export const fetchDashboard = data => {
  return {
    type: FETCHING_DASHBOARD,
    data
  };
};
export const fetchDashboardTestPerformance = data => {
  return {
    type: FETCHING_DASHBOARD_TEST_PERFORMANCE,
    data
  };
};

export const fetchDashboardAccuracy = data => {
  return {
    type: FETCHING_DASHBOARD_ACCURACY,
    data
  };
};

export const fetchDashboardAverageTime = data => {
  return {
    type: FETCHING_DASHBOARD_AVERAGETIME,
    data
  };
};

export const fetchDashboardProgress = data => {
  return {
    type: FETCHING_DASHBOARD_PROGRESS,
    data
  };
};

export const fetchDashboardRank = data => {
  return {
    type: FETCHING_DASHBOARD_RANK,
    data
  };
};
export const fetchDashboardAllTest = data => {
  return {
    type: FETCHING_DASHBOARD_ALLTEST,
    data
  };
};

export const fetchDashboardTakeTest = data => {
  return {
    type: FETCHING_DASHBOARD_TAKE_TEST,
    data
  };
};

export const fetchDashboardAccuracyMoreDetail = data => {
  return {
    type: FETCHING_DASHBOARD_ACCURACY_MOREDETAIL,
    data
  };
};
export const load = () => {
  return {
    type: LOAD
  };
};

//======================================
export const checksubject = () => {
  return dispatch => {
    return axios
      .get(apiURl0, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchchecksubject(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardData = () => {
  return dispatch => {
    return axios
      .get(apiUrl, {
        headers: {
          Authorization: AuthString,
          "Content-Type": " application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        dispatch(fetchDashboard(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardDataTestPerformance = () => {
  return dispatch => {
    return axios
      .get(apiURl2, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchDashboardTestPerformance(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardDataAccuracy = () => {
  return dispatch => {
    return axios
      .get(apiURl3, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchDashboardAccuracy(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardDataAverageTime = () => {
  return dispatch => {
    return axios
      .get(apiUrl4, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchDashboardAverageTime(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardDataProgress = () => {
  return dispatch => {
    return axios
      .get(apiUrl5, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchDashboardProgress(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardDataRank = () => {
  return dispatch => {
    return axios
      .get(apiUrl6, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchDashboardRank(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardDataAllTest = () => {
  return dispatch => {
    return axios
      .get(apiUrl7, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchDashboardAllTest(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardDataTakeTest = test_id => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(
        apiURl8,
        { testid: test_id },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response), dispatch(fetchDashboardTakeTest(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchAccuracyMoreDetail = (subject, chaptercode) => {
  return dispatch => {
    return axios
      .post(
        apiURl9,
        { subject: subject, chapter: chaptercode },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(fetchDashboardAccuracyMoreDetail(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchDashboardAllTestFilter = filter => {
  return dispatch => {
    return axios
      .post(
        apiUrl10,
        { typeTest: filter },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response), dispatch(fetchDashboardAllTest(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};
