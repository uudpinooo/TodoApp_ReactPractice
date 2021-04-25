export const ADD_TODO = "ADD_TODO";
export const addTodo = (name) => {
  return {
    type: "ADD_TODO",
    payload: {
      name: name,
      isCompleted: false,
    }
  }
};

export const COMPLETE_TODO = "COMPLETE_TODO";
export const onClickDone = (name) => {
  return {
    type: "COMPLETE_TODO",
    payload: {
      name: name,
    }
  }
};

export const DELETE_TODO = "DELETE_TODO";
export const onClickDelete = (name) => {
  return {
    type: "DELETE_TODO",
    payload: {
      name: name,
    }
  }
};

export const BACK_TODO = "BACK_TODO";
export const onClickBack = (name) => {
  return {
    type: "BACK_TODO",
    payload: {
      name: name,
    }
  }
};