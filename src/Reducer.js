import * as ACTIONS from './Actions';
/**
 * Reducer - presents a problem in a much simpler form.
 * @param {*} state spread the incoming props (allow in)
 * @param {*} action(type, payload) switch via type, specify payload
 */
export default function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.LOGIN_USER:
      return {
        ...state,
        currentUser: payload
      };
    case ACTIONS.IS_LOGGED_IN:
      return {
        ...state,
        isAuth: payload
      };
    case ACTIONS.SIGNOUT_USER:
      return {
        ...state,
        isAuth: false,
        currentUser: null
      };
    default:
      return state; // Return unchanged state
  }
}