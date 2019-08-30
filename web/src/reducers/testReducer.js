const initialState = {
  preTest: "Hi"
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "TEST":
      return { ...state, test: action.payload };
    default:
      return state;
  }
}
