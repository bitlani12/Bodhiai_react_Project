import {
  CHATBOT_CURRENT_VIEW,
  CHATBOT_PREVIOUS_CHAT,
  SAVE_CHAT,
  ADD_USER_CLICK,
  AFTER_TEST_CUSTOM_VIEW,
  CHATBOT_LOADER
} from "./types";
import axios from "axios";
const apiURl1 = "https://www.bodhiai.in/api/chatbox/";
const apiURl2 = "https://www.bodhiai.in/api/chatbox/getChat/";
const apiURl3 = "https://www.bodhiai.in/api/chatbox/saveChat/";
const token = localStorage.getItem("Token");
const AuthString = `Token ${token}`;

export const chatbot_current_view = data => {
  return {
    type: CHATBOT_CURRENT_VIEW,
    data
  };
};
export const chatbot_previous_chat = data => {
  return {
    type: CHATBOT_PREVIOUS_CHAT,
    data
  };
};
export const save_chat_messages = data => {
  return {
    type: SAVE_CHAT,
    data
  };
};
export const Add_User_Click = (userreply, id) => {
  console.log("this is add user click    ");
  return {
    type: ADD_USER_CLICK,
    userreply,
    id
  };
};
export const After_Test_Custom_View = data => {
  console.log("this is add user click    ");
  return {
    type: AFTER_TEST_CUSTOM_VIEW,
    data
  };
};
export const chat_bot_loader = () => {
  console.log("console.log");
  return {
    type: CHATBOT_LOADER
  };
};
// export const chatbot_current_view = (data) => {
//     return {
//       type: CHATBOT_CURRENT_VIEW,
//       data
//     };
// }
// ===============================
let senddata = {
  sentByMe: false,
  text: "",
  loading: false,
  viewType: "",
  clickable: false,
  data: null
};
export const get_current_view = user_reply => {
  console.log("this is user reply which user reply after test", user_reply);
  return dispatch => {
    dispatch(chat_bot_loader());
    return axios
      .post(
        apiURl1,
        { user_reply: user_reply },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response, "thisis reply after test +++++++++++++++++++"),
          dispatch(chatbot_current_view(response.data));
        (senddata.viewType = response.data.view),
          (senddata.data =
            response.data.data === null ? null : response.data.data),
          (senddata.text = response.data.message);
        response.data.next === true
          ? dispatch(After_get_current_view_send("none"))
          : "";
      })
      .then(() => dispatch(save_chat(senddata)))
      .catch(error => {
        console.log(error.config);
      });
  };
};
// if in response condition is true then send this function
export const After_get_current_view_send = user_reply => {
  console.log("this is user reply which user reply after test", user_reply);
  return dispatch => {
    return axios
      .post(
        apiURl1,
        { user_reply: user_reply },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        console.log(response, "thisis reply after test +++++++++++++++++++"),
          dispatch(chatbot_current_view(response.data));
        (senddata.viewType = response.data.view),
          (senddata.data =
            response.data.data === null ? null : response.data.data),
          (senddata.text = response.data.message);
        //  senddata.next === true ? dispatch(get_current_view("none")):""
      })
      .then(() => dispatch(save_chat(senddata)))
      .catch(error => {
        console.log(error.config);
      });
  };
};
export const get_previous_chat = filter => {
  console.log(filter, "this is for filter");
  return dispatch => {
    // dispatch(load())
    return axios
      .post(
        apiURl2,
        { page: filter },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(chatbot_previous_chat(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const save_chat = save_user_reply => {
  console.log(save_user_reply, "this is reply +++++++++++++++");
  return dispatch => {
    // dispatch(load())
    return axios
      .post(
        apiURl3,
        { chatData: save_user_reply },
        { headers: { Authorization: AuthString } }
      )
      .then(response => {
        dispatch(save_chat_messages(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const add_user_click = (userreply, id) => {
  console.log("this is use click ---------------");
  return dispatch => {
    dispatch(Add_User_Click(userreply, id));
  };
};

export const after_test_custom_view = view => {
  return dispatch => {
    dispatch(After_Test_Custom_View(view));
  };
};
