import TYPES from '../types/compose';

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

  onEmailChange: value => ({
    type: TYPES.EDIT_EMAIL,
    payload: value
  }),

  onAnswerSubmit: value => ({
    type: TYPES.ANSWER_ONSUBMIT,
    payload: value
  }),

  onAnswerButtonClick: () => ({
    type: TYPES.ANSWER_BUTTON_CLICK
  }),

  setAnswerArray: value => ({
    type: TYPES.SET_ANSWER_ARRAY,
    payload: value
  }),

  onQuestionTick: () => ({
    type: TYPES.SET_TICK_QUESTION
  }),
  setLtr: value => ({
    type: TYPES.SET_LTR,
    payload: value
  }),

  setShow: value => ({
    type: TYPES.SET_SHOW,
    payload: value
  })
};
