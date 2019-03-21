import TYPES from '../TYPES/compose';

const initialState = {
  letterHTML: '',
  questionInputText: '',
  answerInputText: '',
  answers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.EDIT_LETTER: {
      return {
        ...state,
        letterHTML: action.payload
      };
    }
    case TYPES.EDIT_QUESTION: {
      return {
        ...state,
        questionInputText: action.payload
      };
    }
    case TYPES.EDIT_ANSWER: {
      return {
        ...state,
        answerInputText: action.payload
      };
    }
    case TYPES.ADD_ANSWER: {
      return {
        ...state,
        answers: action.payload
      };
    }
    default:
      return state;
  }
}
