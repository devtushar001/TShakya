import { createContext, useContext, useState } from "react";

const TShakyaContext = createContext(null);

const TShakyaContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('test');

  const contextValue = {
    searchQuery,
    setSearchQuery
  };

  return (
    <TShakyaContext.Provider value={contextValue}>
      {children}
    </TShakyaContext.Provider>
  );
};

export default TShakyaContextProvider;