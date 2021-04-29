export const ADD_TODO = "ADD_TODO";
export const addTodo = (name) => {
  return {
    type: "ADD_TODO",
    payload: {
      name: name,
    }
  }
};

export const COMPLETE_TODO = "COMPLETE_TODO";
export const onClickDone = (name, index) => {
  return {
    type: "COMPLETE_TODO",
    payload: {
      name: name,
      index: index,
    }
  }
};

export const DELETE_TODO = "DELETE_TODO";
export const onClickDelete = (name, index) => {
  return {
    type: "DELETE_TODO",
    payload: {
      name: name,
      index: index
    }
  }
};

export const BACK_TODO = "BACK_TODO";
export const onClickBack = (name, index) => {
  return {
    type: "BACK_TODO",
    payload: {
      name: name,
      index, index,
    }
  }
};