import TYPES from '../TYPES/compose';

const initialState = {
  letterHTML: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.EDIT_LETTER: {
      return {
        ...state,
        letterHTML: action.payload
      };
    }
    default:
      return state;
  }
}
