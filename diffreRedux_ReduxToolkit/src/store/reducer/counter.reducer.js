const initialState = {
  value: 0,
};

export const counterReducer = (store = initialState, action) => {
  switch (action.type) {
    case "increase": {
      return (store = { value: store.value + 1 });
    }
    case "decrease": {
      if (store.value > 0) {
        return (store = { value: store.value - 1 });
      } else {
        return store;
      }
    }
    default:
      return store;
  }
};
