import { createStore } from 'redux';

const initialState = {lists: [],};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        lists: [...state.lists, action.payload],
      };
    case "COMPLETE_TODO":
      return {
        lists: state.lists.map(list => {
          if (list.name !== action.payload) return list;
          return {
            ...list,
            isCompleted: true,
          };
        })
      };
    case "DELETE_TODO":
      return {
        lists: state.lists.filter(list => list.name !== action.payload)
      };
    case "BACK_TODO":
      return {
        lists: state.lists.map(list => {
          if (list.name !== action.payload) return list;
          return {
            ...list,
            isCompleted: false,
          };
        })
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;