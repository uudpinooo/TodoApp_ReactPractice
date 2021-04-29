import * as Actions from './actions';
import initialState from '../store/initialState';

export const incompleteReducers = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        incompleteLists: [...state.incompleteLists, action.payload.name],
      };

    case Actions.COMPLETE_TODO:
      const incompleteListsAfterComplete = [...state.incompleteLists];
      incompleteListsAfterComplete.splice(action.payload.index, 1);
      const completeListsAfterComplete = [...state.completeLists, action.payload.name]
      return {
        ...state,
        incompleteLists: incompleteListsAfterComplete,
        completeLists: completeListsAfterComplete,
      };

    case Actions.DELETE_TODO:
      const incompleteListsAfterDelete = [...state.incompleteLists];
      incompleteListsAfterDelete.splice(action.payload.index, 1);
      return {
        ...state,
        incompleteLists: incompleteListsAfterDelete,
      };

    case Actions.BACK_TODO:
      const completeListsAfterBack = [...state.completeLists];
      completeListsAfterBack.splice(action.payload.index, 1);
      const incompleteListsAfterBack = [...state.incompleteLists, action.payload.name]
      return {
        ...state,
        incompleteLists: incompleteListsAfterBack,
        completeLists: completeListsAfterBack,
      };

    default:
      return state;
  }
}