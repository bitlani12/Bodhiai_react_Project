import {
  FETCHING_MAINDASHBOARDSUBJECTS,
  FETCHING_MAINDASHBOARDTESTRANK,
  FETCHING_MAINDASHBOARDTESTRANK_PROFILE,
  FETCHING_MAINDASHBOARDTESTRANK_INDIVIDUAL_PROFILE,
  FETCHING_MAINDASHBOARD_GROUPDETAILS,
  FETCHING_MAINDASHBOARD_INDIVIDUALSUBJECT,
  FETCHING_MAINDASHBOARD_INDIVIDUALSUBJECT_TEST,
  FETCHING_MAINDASHBOARDTESTRANK_LOADMORE_UP,
  FETCHING_MAINDASHBOARD_INDIVIDUAL_LEARNING,
  CHALLENGE_USER,
  LOAD,
  LOADPROFILE,
  PAGINATION_RANK,
  FETCHING_MAINDASHBOARDTESTRANK_LOADMORE
} from "./types";
import axios from "axios";
const apiUrl1 =
  "https://www.bodhiai.in/api/basicinformation/home_page_subjects/";
const apiUrl2 =
  "https://www.bodhiai.in/api/basicinformation/get_home_page_subjectRank/";
const apiUrl3 =
  "https://www.bodhiai.in/api/basicinformation/subject_rank_details/";
const apiUrl4 = "https://www.bodhiai.in/api/basicinformation/all_rank_details/";
const apiUrl5 =
  "https://www.bodhiai.in/api/basicinformation/subjectwise_group_details/";
const apiUrl6 = "https://www.bodhiai.in/api/learning/learning_chapters/";
const apiUrl7 = "https://www.bodhiai.in/api/papers/subject_chapter_tests/";
const apiUrl8 = "https://www.bodhiai.in/api/recommendations/chapterwise_video/";
const apiUrl9 =
  "https://www.bodhiai.in/api/basicinformation/challenge_student/";
const apiUrl10 =
  "https://www.bodhiai.in/api/basicinformation/get_subject_ranking_paginated/";
// setTimeout(function() {
//   const token = localStorage.setItem('authToken');
// }, 50);
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;
let sub;

export const load = () => {
  return {
    type: LOAD
  };
};

export const loadprofile = () => {
  return {
    type: LOADPROFILE
  };
};
export const fetchmaindashboardsubjects = data => {
  return {
    type: FETCHING_MAINDASHBOARDSUBJECTS,
    data
  };
};
export const fetchmaindashboardtestrank = data => {
  return {
    type: FETCHING_MAINDASHBOARDTESTRANK,
    data
  };
};

export const fetchmaindashboardtestrankprofile = data => {
  return {
    type: FETCHING_MAINDASHBOARDTESTRANK_PROFILE,
    data
  };
};

export const fetchmaindashboardtestrankindividualprofile = data => {
  return {
    type: FETCHING_MAINDASHBOARDTESTRANK_INDIVIDUAL_PROFILE,
    data
  };
};

export const fetchmaindashboardgroupdetail = data => {
  return {
    type: FETCHING_MAINDASHBOARD_GROUPDETAILS,
    data
  };
};

export const fetchmaindashboardindividualsubject = (data, subject) => {
  return {
    type: FETCHING_MAINDASHBOARD_INDIVIDUALSUBJECT,
    data,
    subject
  };
};

export const fetchmaindashboardindividualsubjecttest = data => {
  return {
    type: FETCHING_MAINDASHBOARD_INDIVIDUALSUBJECT_TEST,
    data
  };
};

export const fetchmaindashboardindividuallearning = data => {
  return {
    type: FETCHING_MAINDASHBOARD_INDIVIDUAL_LEARNING,
    data
  };
};

export const challenge_user = data => {
  return {
    type: CHALLENGE_USER,
    data
  };
};
export const Pagination_Rank_Onclickall = data => {
  return {
    type: FETCHING_MAINDASHBOARDTESTRANK,
    data
  };
};
export const Fetching_MainDashboard_Loadmore = data => {
  return {
    type: FETCHING_MAINDASHBOARDTESTRANK_LOADMORE,
    data
  };
};

export const Fetching_MainDashboard_Loadmore_Up = data => {
  return {
    type: FETCHING_MAINDASHBOARDTESTRANK_LOADMORE_UP,
    data
  };
};
//export const
//=============================================================================
//fetchmaindashboardsubjects
export const fetchMainDashboardSubjectsData = () => {
  return dispatch => {
    dispatch(load());
    console.log(AuthString);
    return axios
      .get(apiUrl1, {
        headers: {
          Authorization: AuthString,
          "Content-Type": " application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        sub = response.data.subjects[0][0];
        dispatch(fetchmaindashboardsubjects(response.data)),
          console.log("this is called or not ");
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchMainDashboardTestRank = (subject, index, direction) => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(
        apiUrl2,
        { subject: subject, index: index, direction: direction },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(fetchmaindashboardtestrank(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetchMainDashboardTestRankProfile = (username, subject) => {
  return dispatch => {
    dispatch(loadprofile());
    return axios
      .post(
        apiUrl3,
        { username: username, subject: subject },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(fetchmaindashboardtestrankprofile(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetchmaindashboardindividualprofile = username => {
  return dispatch => {
    return axios
      .post(
        apiUrl4,
        { username: username },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(fetchmaindashboardtestrankindividualprofile(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetchMainDashboardGroupDetail = () => {
  return dispatch => {
    return axios
      .get(apiUrl5, { headers: { Authorization: AuthString } })
      .then(response => {
        dispatch(fetchmaindashboardgroupdetail(response.data));
      })
      .catch(error => {
        console.log(error.config);
      });
  };
};

export const fetchMainDashboardIndividualSubject = subject => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(
        apiUrl6,
        { subject: subject },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(fetchmaindashboardindividualsubject(response.data, subject));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetchedMainDashboardIndividualSubjectTest = (course, subject) => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(
        apiUrl7,
        { subject: subject, chapter: course },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(fetchmaindashboardindividualsubjecttest(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetchedMainDashboardIndividualLearning = (course, subject) => {
  return dispatch => {
    dispatch(load());
    return axios
      .post(
        apiUrl8,
        { subject: subject, chapter: course },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(fetchmaindashboardindividuallearning(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const ChallengeUser = username => {
  return dispatch => {
    return axios
      .post(
        apiUrl9,
        { username: username },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response), dispatch(challenge_user(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const pagination_rank_onclickall = (subject, index, direction) => {
  return dispatch => {
    return axios
      .post(
        apiUrl10,
        { subject: subject, index: index, direction: direction },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(Pagination_Rank_Onclickall(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetching_maindashboard_loadmore = (subject, index, direction) => {
  return dispatch => {
    return axios
      .post(
        apiUrl10,
        { subject: subject, index: index, direction: direction },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(Fetching_MainDashboard_Loadmore(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const fetching_maindashboard_loadmoreup = (
  subject,
  index,
  direction
) => {
  return dispatch => {
    return axios
      .post(
        apiUrl10,
        { subject: subject, index: index, direction: direction },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response),
          dispatch(Fetching_MainDashboard_Loadmore_Up(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
