import { FETCHING_ONLINE_TEST , SUBMIT_TEST , SMART_TEST_SUBJECT , SMART_TEST_DATA , REDIRECT_FALSE } from '../actions/types';
const _initialState={
    fetchedonlinetest: false,
    onlinetestdata: [],
    result:[],
    smarttestsubject:[],
    smarttest : [],
    fetchedresult:false,
    fetchedsmarttestsubject: false,
    fetchedsmarttest : false,
    redirect: false,
   aftertestcallchatbot: false
}

export default function onlinetestreducer(state = _initialState, action) {
    switch (action.type) {
    case FETCHING_ONLINE_TEST:
        return {...state , onlinetestdata : action.data , fetchedonlinetest : true , };
    case SUBMIT_TEST:
        return {...state , result : action.data , fetchedresult : true , redirect: true , aftertestcallchatbot: true };
    case SMART_TEST_SUBJECT:
        return {...state , smarttestsubject : action.data , fetchedsmarttestsubject : true , };
    case SMART_TEST_DATA:
        return {...state , smarttest : action.data , fetchedsmarttest : true , };
    case REDIRECT_FALSE: 
       return {...state , redirect: false}
    default:
        return state;
}

}