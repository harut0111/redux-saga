import { SEND_DATA, SEND_ERROR } from "../../constants/actionTypes";

const initialState = {
  data: "",
};

const rootReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case SEND_DATA:
      return { ...state, data: action.payload };
    case SEND_ERROR:
      alert("Error: " + action.payload);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
