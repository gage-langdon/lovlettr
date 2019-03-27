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

  onAnswerSubmit: () => ({
    type: TYPES.ANSWER_ONSUBMIT
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
  onTextEditorTick: () => ({
    type: TYPES.SET_TICK_EDITOR
  })
};
