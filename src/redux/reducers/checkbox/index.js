import { UPDATE_CHECKBOX } from '../../action-types/checkbox';

const initialState = {
  boxChecked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHECKBOX: {
      const boxChecked = action.payload;
      return {
        ...state,
        boxChecked
      };
    }
    default:
      return state;
  }
};
