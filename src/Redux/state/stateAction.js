import { stateActionType } from "./stateActionType";

export const stateActionUpdate = (item) =>{
    
    return{
        type : stateActionType.SET_UPDATE,
        payload:item
    }
}
export const stateActionCreate = (item) =>{
    return{
        type : stateActionType.SET_CREATE,
        payload:item
    }
}