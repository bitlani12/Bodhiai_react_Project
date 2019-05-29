import {
  LOAD,
  MESSAGE_ANNOUNCEMENT,
  MESSAGE_INBOX,
  SUBMIT_FEEDBACK
} from "./types";
import axios from "axios";
const apiURl1 = "https://www.bodhiai.in/api/messages/student_announcements/";
const apiURl2 = "https://www.bodhiai.in/api/messages/student_inbox/";
const apiUrl3 =
  "https://www.bodhiai.in/api/messages/student_send_message_sent/";
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;

export const load = () => {
  return {
    type: LOAD
  };
};

export const Message_Announcement = data => {
  return {
    type: MESSAGE_ANNOUNCEMENT,
    data
  };
};
export const Message_Inbox = data => {
  return {
    type: MESSAGE_INBOX,
    data
  };
};

export const Submit_Feedback = data => {
  return {
    type: SUBMIT_FEEDBACK,
    data
  };
};
// ================================================================================

export const messageannouncement = () => {
  return dispatch => {
    dispatch(load());
    return axios
      .get(apiURl1, {
        headers: {
          Authorization: AuthString,
          "Content-Type": " application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        dispatch(Message_Announcement(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
export const messageinbox = () => {
  return dispatch => {
    dispatch(load());
    return axios
      .get(apiURl2, {
        headers: {
          Authorization: AuthString,
          "Content-Type": " application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        dispatch(Message_Inbox(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const submitfeedback = (teacher_id, message) => {
  return dispatch => {
    return axios
      .post(
        apiUrl3,
        { teacher_id: teacher_id, message: message },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response), dispatch(Submit_Feedback(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
