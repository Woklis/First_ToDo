import React, { useState, createContext } from "react";

export const CurrentUserContext = createContext([{}, () => {}]);

export const CurrentUserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isLoading: false,
    isLoggedIn: false,
  });
  return (
    <CurrentUserContext.Provider value={[state, setState]}>
      {children}
    </CurrentUserContext.Provider>
  );
};
