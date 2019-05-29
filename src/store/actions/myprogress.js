import {
  FETCHING_PROGRESS,
  FETCHING_PERFORMANCE_DATE,
  FETCHING_WEAKAREAS,
  FETCHING_PERFORMANCE_AFTERDATESELECT,
  ALL_CHALLENGES,
  COMPARE_CHALLENGES,
  FETCHING_RECOMMENDATION,
  LOAD,
  LOAD_AFTER_DATE_SELECT,
  FETCHING_RANK_BY_ID
} from "./types";
import axios from "axios";
//const apiUrl = 'https://www.bodhiai.in/api/basicinformation/student_performance_1/';
// this is previos api http://13.234.62.233/api/basicinformation/student_individual_test_detail/
const apiUrl =
  "https://www.bodhiai.in/api/basicinformation/home_page_subjects/";
const apiUrl2 =
  "https://www.bodhiai.in/api/basicinformation/student_performance_2/";
const apiUrl3 =
  "https://www.bodhiai.in/api/basicinformation/student_subject_weakAreas/";
const apiUrl4 =
  "https://www.bodhiai.in/api/basicinformation/new_test_performance/";
const apiUrl5 =
  "https://www.bodhiai.in/api/recommendations/chapter_recommendations/";
const apiUrl6 =
  "https://www.bodhiai.in/api/basicinformation/test_ranking_table/";
const apiUrl7 =
  "https://www.bodhiai.in/api/basicinformation/see_my_challenges/";
const apiUrl8 =
  "https://www.bodhiai.in/api/basicinformation/challenge_get_subjectrank/";
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;
export const load = () => {
  return {
    type: LOAD
  };
};
export const loadafterdateselect = () => {
  return {
    type: LOAD_AFTER_DATE_SELECT
  };
};

export const fetchprogress = data => {
  return {
    type: FETCHING_PROGRESS,
    data
  };
};

export const fetchprogressDate = data => {
  return {
    type: FETCHING_PERFORMANCE_DATE,
    data
  };
};

export const fetchWeakAreas = data => {
  return {
    type: FETCHING_WEAKAREAS,
    data
  };
};
export const fetchPerformanceAfterDateSelect = data => {
  return {
    type: FETCHING_PERFORMANCE_AFTERDATESELECT,
    data
  };
};

export const fetchrecommendation = data => {
  return {
    type: FETCHING_RECOMMENDATION,
    data
  };
};
export const RankByTestId = data => {
  return {
    type: FETCHING_RANK_BY_ID,
    data
  };
};
export const All_Challenges = data => {
  return {
    type: ALL_CHALLENGES,
    data
  };
};
export const Compare_Challenge = data => {
  return {
    type: COMPARE_CHALLENGES,
    data
  };
};
//==================================================================
export const fetchMyProgressData = () => {
  return dispatch => {
    return axios
      .get(apiUrl, {
        headers: {
          Authorization: AuthString,
          "Content-Type": " application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        dispatch(fetchprogress(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetchMyPerformanceDateData = subject => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(
        apiUrl2,
        { subject: subject },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(fetchprogressDate(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetchWeakAreasData = subject => {
  return dispatch => {
    return axios
      .post(
        apiUrl3,
        { subject: subject },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(fetchWeakAreas(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
export const fetchPerformanceDataAfterDateSelect = (testid, subject) => {
  return dispatch => {
    dispatch(loadafterdateselect());
    return axios
      .post(
        apiUrl4,
        { test_id: testid, subject: subject },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(fetchPerformanceAfterDateSelect(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetchrecommendations = () => {
  return dispatch => {
    return axios
      .get(apiUrl5, {
        headers: {
          Authorization: AuthString,
          "Content-Type": " application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        dispatch(fetchrecommendation(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
export const rankbytestid = testid => {
  return dispatch => {
    dispatch(loadafterdateselect());
    return axios
      .post(
        apiUrl6,
        { test_id: testid },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(RankByTestId(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const allchallenges = () => {
  return dispatch => {
    return axios
      .get(apiUrl7, {
        headers: {
          Authorization: AuthString,
          "Content-Type": " application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        dispatch(All_Challenges(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
export const comparechallenge = username => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(
        apiUrl8,
        { username: username },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(Compare_Challenge(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
