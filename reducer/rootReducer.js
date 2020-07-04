import {changeTime} from "../components/StepOne/StepOne.action";

export const initialState = {
    time: ''
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case changeTime:
            return {
                ...state,
                time: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;