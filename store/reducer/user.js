import { ADD_USER } from "../actions/user";

const initialState = {
  user: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const user = action.user;

      return {
        user: user
      };
  }
  return state;
};