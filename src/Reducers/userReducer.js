

export default (state = {}, { type, payload }) => {
    switch (type) {
      case "LOGIN":
        return payload
      case "SIGNUP":
        return {};
      case "PROFILE":
        return payload;
      case "LOGOUT":
        return {};
      default:
        return state;
    }
  };