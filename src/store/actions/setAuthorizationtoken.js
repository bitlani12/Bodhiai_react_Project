import axios from 'axios';
export default function setAuthorizationtoken (token){
    
    if(token){
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    }
    else{
        delete axios.defaults.headers.common['Authorization']
    }
    
}