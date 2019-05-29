import { CHATBOT_CURRENT_VIEW, CHATBOT_PREVIOUS_CHAT , LOAD ,ADD_USER_CLICK , AFTER_TEST_CUSTOM_VIEW ,CHATBOT_LOADER} from '../actions/types';

    const _initialState={
   chatbot_current_data: [],
   chatbot_previous_data: [],
   load : false,
   aftertestchat: false,
   previos_data_available: true,
   chatscroll: false,
   chatbot_loader: false
    }

        
export default function ChatbotReducer(state = _initialState, action) {
 switch (action.type) {
    case CHATBOT_CURRENT_VIEW:
        return {...state, chatbot_current_data: state.chatbot_current_data.concat(action.data), load: false , chatbot_loader: false} ;
    case CHATBOT_PREVIOUS_CHAT:
        return {...state ,chatbot_previous_data: action.data.chatHistory.concat(state.chatbot_previous_data), load: false , previos_data_available: action.data.chatHistory.length === 0 ? true : false ,chatscroll : true};
    case ADD_USER_CLICK:
        return {
         ...state,
            chatbot_current_data: state.chatbot_current_data.map((el , i ) => {
                if( i === action.id){
                    return {...el ,userclick: action.userreply }
                }
                return{ ...el   }
               })
           };
    case AFTER_TEST_CUSTOM_VIEW:
         return {...state , aftertestchat : true};
    case CHATBOT_LOADER : 
    console.log("this is chatbotloader")
         return {...state , chatbot_loader: true}
    case LOAD:
        return {...state, load:true} ;
    default:
         return state;
        }
    }