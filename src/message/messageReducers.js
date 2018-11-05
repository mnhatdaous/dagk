import * as types from "./messageActionTypes";

export const userMessageItems = (state, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return [
        ...state,
        {
          uid: action.uid,
          displayName: action.displayName,
          message: action.message,
          createdAt: action.createdAt
        }
      ];
    case types.SEND_MESSAGE_SUCCESS:
    case types.SEND_MESSAGE_ERROR:
    default:
      return state;
  }
};

const userMessageInitialState = {
  isSending: false,
  isTyping: false,
  items: []
};

export const userMessage = (state = userMessageInitialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return {
        ...state,
        isSending: true,
        items: userMessageItems(state.items, action)
      };
    case types.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        isSending: false,
        hasError: false
      };
    case types.SEND_MESSAGE_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export const messages = (state = [], action) => {
  switch (action.type) {
    case types.RETRIEVE_MESSAGE:
      return [
        ...state,
        {
          uid: action.uid,
          displayName: action.displayName,
          message: action.message,
          createdAt: action.createdAt
        }
      ];
    default:
      return state;
  }
};