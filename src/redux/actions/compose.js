import TYPES from '../TYPES/compose';

export default {
  onLetterChange: value => ({
    type: TYPES.EDIT_LETTER,
    payload: value
  }),

  onQuestionChange: value => ({
    type: TYPES.EDIT_QUESTION,
    payload: value
  }),
  onAnswerChange: value => ({
    type: TYPES.EDIT_ANSWER,
    payload: value
  }),

  addAnswer: value => ({
    type: TYPES.ADD_ANSWER,
    payload: value
  })
};
