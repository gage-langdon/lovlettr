import TYPES from '../TYPES/compose';

const initialState = {
  letterHTML:
    '<p>Hello <strong>Beautiful</strong>,</p><p><br></p><p>I hope your day is going well!</p><p> </p><p><br></p>'
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
