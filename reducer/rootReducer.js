import {changeTime} from "../components/DateAndTime/DateAndTime.action";
import {changeAddress} from "../components/ChooseAddress/Address.action";

export const initialState = {
    time: '',
    address: {}
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case changeTime:
            return {
                ...state,
                time: action.time
            }
        case changeAddress: {
            return {
                ...state,
                address: action.address
            }
        }
        default:
            return state
    }
}

export default rootReducer;