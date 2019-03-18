import { UPDATE_CHECKBOX } from '../../action-types/checkbox';

export const onClick = value => ({
  type: UPDATE_CHECKBOX,
  payload: value
});
