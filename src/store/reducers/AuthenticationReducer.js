import { LOGIN_SUCCESS, LOGIN_ERROR , USERNAME_EXIST , LOAD ,  IIT_JEE_REGISTRATION_SUCCESS ,IIT_JEE_REGISTRATION_FAILED } from '../actions/types';

    const _initialState={
   success:{},
   error:false,
   load: false,
   usernameexist: false,
   register : false
    }
    
    export default function AuthenticateReducer(state = _initialState, action) {
        switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, success: action.data, fetched:true , load: false} ;
        case LOGIN_ERROR:
            return {...state, error: true, fetched:true , load: false} ;
        case USERNAME_EXIST:
            return {...state, usernameexist: true, load: false};
        case LOAD:
            return {...state, load:true} ;
        case IIT_JEE_REGISTRATION_SUCCESS: 
            return{ ...state ,  load: false , register : true}
        case IIT_JEE_REGISTRATION_FAILED: 
            return{ ...state ,  load: false ,register : false }
          default:
            return state;
        }
      }
    