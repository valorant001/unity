import { combineReducers } from "@reduxjs/toolkit";
import loginState from '../reducers/login'
import skeletonLoadingState from '../reducers/skeletonloading'
import messageState from '../reducers/messageloader'
import  circularloadingState from '../reducers/cirularLoading'
const rootReducers = combineReducers({
    loginReducer:loginState,
    skeletonloadingReducer:skeletonLoadingState,
    circularloadingReducer:circularloadingState,
    messageReducer:messageState, //This Reducer is use for display the message in Snackbar

});
export default rootReducers;