import { FETCHING_MAINDASHBOARDSUBJECTS , FETCHING_MAINDASHBOARDTESTRANK , FETCHING_MAINDASHBOARDTESTRANK_PROFILE , FETCHING_MAINDASHBOARDTESTRANK_INDIVIDUAL_PROFILE,
  FETCHING_MAINDASHBOARD_GROUPDETAILS ,FETCHING_MAINDASHBOARD_INDIVIDUALSUBJECT,FETCHING_MAINDASHBOARD_INDIVIDUALSUBJECT_TEST ,CHALLENGE_USER,
  FETCHING_MAINDASHBOARDTESTRANK_LOADMORE, FETCHING_MAINDASHBOARD_INDIVIDUAL_LEARNING,LOAD, LOADPROFILE , FETCHING_MAINDASHBOARDTESTRANK_LOADMORE_UP} from '../actions/types';
    const _initialState={
        fetched: false,
        fetchedrank: false,
        fetchedranksubjects: false,
        individualprofile: false,
        fetchedsubjectdetail: false,
        load: false,
        loadprofile: false,
        loadvideos : false ,

        individualsubjecttosendinapi: "",
        subjects: [],
        testrank: [],
        testranksubjects: [],
        profile: [],
        individualprofile: [],
        groupdetail: [],
        inidvidualsubject: [],
        inidvidualsubjecttest:[],
        learning: [],
        challenge:[]
    }

    export default function maindashboardReducer(state = _initialState, action) {
        switch (action.type) {
          case FETCHING_MAINDASHBOARDSUBJECTS:
            return {...state, subjects: action.data, fetched:true , load : false} ;
          case FETCHING_MAINDASHBOARDTESTRANK:
            return {...state, testrank: action.data, fetchedrank:true , load : false} ;
          // thsi is for fetching data from all test 
          case FETCHING_MAINDASHBOARDTESTRANK_LOADMORE:
            return {...state, testrank:{subject_ranking:  state.testrank.subject_ranking.concat(action.data.subject_ranking)}, fetchedrank:true , load : false} ;
           case FETCHING_MAINDASHBOARDTESTRANK_LOADMORE_UP:
            return {...state, testrank:{subject_ranking: action.data.subject_ranking.concat(state.testrank.subject_ranking)}, fetchedrank:true , load : false}
///////////////////////////////////////end of load 
          case FETCHING_MAINDASHBOARDTESTRANK_PROFILE:
            return {...state, profile: action.data, fetchedranksubjects:true ,  loadprofile : false} ;
          case FETCHING_MAINDASHBOARDTESTRANK_INDIVIDUAL_PROFILE:
            return {...state, individualprofile: action.data, fetchedindividualprofile:true , load : false} ;
          case FETCHING_MAINDASHBOARD_GROUPDETAILS:
            return {...state, groupdetail: action.data, fetchedgroupdetail:true , load : false};

          case FETCHING_MAINDASHBOARD_INDIVIDUALSUBJECT:
            return {...state, inidvidualsubject: action.data, fetchedsubjectdetail:true , load : false , individualsubjecttosendinapi: action.subject};
          case FETCHING_MAINDASHBOARD_INDIVIDUALSUBJECT_TEST:
            return {...state, inidvidualsubjecttest: action.data, fetchedsubjecttest:true , load : false};
          case LOAD:
            return {...state, load:true} ;
          case LOADPROFILE:
            return {...state, loadprofile:true} ;
          case FETCHING_MAINDASHBOARD_INDIVIDUAL_LEARNING:
            return {...state, learning: action.data,  load : false , loadvideos: true};
          case   CHALLENGE_USER:  
            return {...state, challenge: action.data,  loadchallenge : false};
          default:
            return state;
        }
      }
    