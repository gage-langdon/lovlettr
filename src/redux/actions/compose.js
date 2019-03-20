import TYPES from '../TYPES/compose';

export default {
  onLetterChange: value => ({
    type: TYPES.EDIT_LETTER,
    payload: value
  })
};
