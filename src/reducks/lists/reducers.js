import * as Actions from './actions';
import initialState from '../store/initialState';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        lists: [...state.lists, action.payload],
      };
    case Actions.COMPLETE_TODO:
      return {
        lists: state.lists.map(list => {
          if (list.name !== action.payload.name) return list;
          return {
            ...list,
            isCompleted: true,
          };
        })
      };
    case Actions.DELETE_TODO:
      return {
        lists: state.lists.filter(list => list.name !== action.payload.name)
      };
    case Actions.BACK_TODO:
      return {
        lists: state.lists.map(list => {
          if (list.name !== action.payload.name) return list;
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