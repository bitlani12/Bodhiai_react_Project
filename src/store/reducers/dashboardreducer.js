import { FETCHING_DASHBOARD , FETCHING_DASHBOARD_TEST_PERFORMANCE , FETCHING_DASHBOARD_ACCURACY , FETCHING_DASHBOARD_AVERAGETIME ,
   FETCHING_DASHBOARD_PROGRESS , FETCHING_DASHBOARD_RANK , FETCHING_DASHBOARD_ALLTEST , FETCHING_DASHBOARD_TAKE_TEST , FETCHING_DASHBOARD_ACCURACY_MOREDETAIL ,LOAD, CHECK_SUBJECT} from '../actions/types';

const _initialState={
    fetched: false,
    fetchedd: false,
    fetcheddd: false,
    fetchedddd: false,
    fetcheddddd: false,
    fetchedddddd: false,
    showtestmodal: false,
    fetchedchecksubject: false,
    showchecksubjectmodal: false,
    fetchedaccuracymoredetail: false,
    fetchedprogress: false,
    fetchedalltest: false,
    load : false,
    data: [],
    testperformance : [] , 
    accuracy : [] ,
    averagetime:[],
    progress:[],
    rank:[],
    alltest:[] , 
    taketest:[],
    checksubject:{},
    accuracymoredetail: []

}

export default function dashboardReducer(state = _initialState, action) {
    switch (action.type) {
      case FETCHING_DASHBOARD:
        return {...state, data: action.data, fetched:true} ;
      case FETCHING_DASHBOARD_TEST_PERFORMANCE:
        return {...state, testperformance: action.data, fetchedd:true}  ;
      case FETCHING_DASHBOARD_ACCURACY:
        return {...state , accuracy : action.data , fetcheddd:true};
      case FETCHING_DASHBOARD_AVERAGETIME:
        return {...state , averagetime : action.data , fetchedddd:true};
      case FETCHING_DASHBOARD_PROGRESS:
        return {...state , progress : action.data , fetchedprogress:true};
      case FETCHING_DASHBOARD_RANK:
        return {...state , rank : action.data , fetchedddddd:true};
      case FETCHING_DASHBOARD_ALLTEST:
        return {...state , alltest : action.data , fetchedalltest:true};
      case FETCHING_DASHBOARD_TAKE_TEST:
        return {...state , taketest : action.data , fetchedddddd:true , showtestmodal : true , load: false};
      case CHECK_SUBJECT:
        return {...state , checksubject : action.data  , showchecksubjectmodal : true};
      case FETCHING_DASHBOARD_ACCURACY_MOREDETAIL:
      {console.log(action.data , "yes this is data of action in reducer")}
        return {...state , accuracymoredetail : action.data  , fetchedaccuracymoredetail : true};
      case LOAD:
            return {...state, load:true} ;
      default:
        return state;
    }
  }
