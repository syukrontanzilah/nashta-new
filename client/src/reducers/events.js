const initState = {
  data: [],
  loading: false
}

const events = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_EVENT":
      return { ...state, ...action && action.data || {} }
    default:
      return state;
  }

};



export default events;
