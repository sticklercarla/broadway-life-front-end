

export default (state = {}, action) => {
    switch (action.type) {
      case "LOGIN":
        return action.payload
      case "SIGNUP":
        return {};
      case "PROFILE":
        return action.payload;
      case "LOGOUT":
        return {};
      case "UPDATE_USER":
        return action.new_user;
      case "DELETE_USER":
        return {};
      default:
        return state;
    }
  };