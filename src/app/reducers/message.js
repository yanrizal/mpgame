const defaultState = {
  message: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_FAILURE':
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        message: 'failed'
      }; 
    case 'POST_SUCCESS':
    case 'CHANGE_PASSWORD_SUCCESS':
      return {
        ...state,
        message: 'success'
      };    
    case 'FORGOT_PASSWORD_SUCCESS':
    case 'UNLINK_SUCCESS':
      return {
        ...state,
        message: 'success'
      };
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        message: ''
      };
    default:
      return state;
  }
}
