const initialValue = 0;

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "increase": {
      return state + 1;
      break;
    }
    case "decrease": {
      return state - 1;
      break;
    }
    default:
      return state;
  }
};

export default counterReducer;
