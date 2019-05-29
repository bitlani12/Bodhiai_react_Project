import { SIDEBAR_PROFILE  } from '../actions/types';


const _initialState={
    fetch: false,
    sidebarprofile: []
}

export default function sidebarreducer(state = _initialState, action) {
    switch (action.type) {
        case SIDEBAR_PROFILE:
            return {...state , sidebarprofile : action.data , fetch : true , };
        default:
            return state;
}
}