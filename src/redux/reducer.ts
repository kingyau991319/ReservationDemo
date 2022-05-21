const initialState = {
  langCode: 'en'
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action : any) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case 'setLangCode':
      return {
        ...state,
        langCode: action.langCode
      };
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
