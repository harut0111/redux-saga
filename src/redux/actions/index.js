import * as actionTypes from "../../constants/actionTypes";

export const sendData = (data) => ({
  type: actionTypes.SEND_DATA,
  payload: data,
});
export const sendDataAsync = (data) => ({
  type: actionTypes.SEND_DATA_ASYNC,
  payload: data,
});
export const sendErrorAsync = () => ({
  type: actionTypes.SEND_ERROR_ASYNC,
});
