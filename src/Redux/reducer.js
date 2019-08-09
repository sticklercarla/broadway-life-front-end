

export default (state = {}, { type, payload }) => {
    switch (type) {
      case "LOGIN":
      case "SIGNUP":
      case "PROFILE":
        return payload;
      case "LOGOUT":
        return {};
      default:
        return state;
    }
  };