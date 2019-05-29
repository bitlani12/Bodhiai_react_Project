import { FETCHING_PROGRESS , FETCHING_WEAKAREAS , FETCHING_PERFORMANCE_DATE , FETCHING_PERFORMANCE_AFTERDATESELECT,ALL_CHALLENGES , COMPARE_CHALLENGES,FETCHING_RECOMMENDATION, LOAD , LOAD_AFTER_DATE_SELECT , FETCHING_RANK_BY_ID} from '../actions/types';


const _initialState={
    fetchedprogress: false,
    progress: [],
    weakareas: [],
    date:[],
    fetchrecommendations:false,
    recommendation: [],
    load: false,
    fetcchallenges: false,
    loadafterdateselect: false,
    performancedata:[],
    fetchedperformancedata: false,
    fetchedweakareas : false,
    fetcheddate:false,
    fetchrank: false,
    rankbytestid:[],
    all_challenges:[],
    comparechallanges: []
}
export default function progressreducer(state = _initialState, action) {
    switch (action.type) {
        case FETCHING_PROGRESS:
            return {...state , progress : action.data , fetchedprogress : true , };
        case FETCHING_WEAKAREAS:
            return {...state , weakareas : action.data , fetchedweakareas : true , };
        case FETCHING_PERFORMANCE_DATE:
            return {...state , date : action.data , fetcheddate : true , load : false};
        case FETCHING_PERFORMANCE_AFTERDATESELECT:
            return {...state , performancedata : action.data , fetchedperformancedata : true , loadafterdateselect: false};
        case FETCHING_RECOMMENDATION:
            return {...state , recommendation : action.data , fetchrecommendations : true };
        case LOAD:
            return {...state, load:true};
        case LOAD_AFTER_DATE_SELECT:
            return {...state, loadafterdateselect:true };
        case FETCHING_RANK_BY_ID:
            return {...state,rankbytestid: action.data, fetchrank:true};
        case ALL_CHALLENGES:
            return {...state,all_challenges: action.data, fetcchallenges:true};
        case COMPARE_CHALLENGES:
            return {...state,comparechallanges: action.data , load : false};
        default:
            return state;
}
}
