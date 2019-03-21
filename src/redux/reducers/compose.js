import TYPES from '../TYPES/compose';

const initialState = {
  letterHTML: '',
  questionInputText: '',
  answerInputText: '',
  hiddenAddAnswer: false,
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
    case TYPES.ANSWER_BUTTON_CLICK: {
      return {
        ...state,
        hiddenAddAnswer: true
      };
    }
    case TYPES.ANSWER_ONSUBMIT: {
      return {
        ...state,
        hiddenAddAnswer: false,
        answerInputText: ''
      };
    }
    case TYPES.SET_ANSWER_ARRAY: {
      return {
        ...state,
        answers: action.payload
      };
    }
    default:
      return state;
  }
}
