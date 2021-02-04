import * as types from "../../redux/types";

const initState = {
    isLoading: false
}

export default function(state = initState, action){
    switch (action.type) {
        case types.HOME_SET_LOADER:{
            let loading
            return{
                ...state
            }
        }
        default:{
            return {...state}
        }
    }
}