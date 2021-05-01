import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [incompleteLists, setIncompleteLists] = useState([]);
  const [completeLists, setCompleteLists] = useState([]);
  const [deleteLists, setDeleteLists] = useState([]);

  return (
    <Context.Provider
      value={{
        incompleteLists,
        completeLists,
        deleteLists,
        setIncompleteLists,
        setCompleteLists,
        setDeleteLists,
      }}>
      {children}
    </Context.Provider>
  );
};