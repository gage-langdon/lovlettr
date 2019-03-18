import { UPDATE_CHECKBOX } from '../../action-types/compose';

const initialState = {
  boxChecked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHECKBOX: {
      const boxChecked = !state.boxChecked;
      console.log(boxChecked);
      return {
        ...state,
        boxChecked
      };
    }
    default:
      return state;
  }
};
