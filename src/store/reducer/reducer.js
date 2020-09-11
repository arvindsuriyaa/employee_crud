import ASSIGN_DATA from "../types/types";
import _ from "lodash";

export const initialState = {
  userList: [],
  isEdit: false,
  editIndex: null,
};

export const reducer = (state = _.cloneDeep(initialState), action) => {
  switch (action.type) {
    case ASSIGN_DATA:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
