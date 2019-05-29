import { MESSAGE_ANNOUNCEMENT , LOAD } from '../actions/types';

    const _initialState={
  
   load: false,
   announcements: []
    }
    
    export default function messagereducer(state = _initialState, action) {
        switch (action.type) {
            case MESSAGE_ANNOUNCEMENT:
                return {...state, announcements: action.data, load: false} ;
            case LOAD:
                return {...state, load:true} ;
            default:
                return state;
        }
      }
    