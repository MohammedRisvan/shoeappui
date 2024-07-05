import { GET_USERS_SUCCESS } from "./actions";

interface state{
    type:any
}
interface action{
    type:any
}
const myFirstReducer=(state:state,action:action)=>{
    switch(action.type){
        case GET_USERS_SUCCESS:
            return {...state,users:action.users}
        default:
            return state;
    }
}
export default myFirstReducer;