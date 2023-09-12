import { stateActionType } from "./stateActionType";

const INTIAL_STATE = {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    brand: "",
    category: "",
    thumbnail: null
}

export const stateReducer = (state=INTIAL_STATE,action)=>{
    const {type,payload} = action;
    switch (type) {
        case stateActionType.SET_UPDATE:
            return{
                ...state,
                ...payload
            }
    
        default:
            return state;
    }
}