import { createContext, useState } from "react";

export const TShakyaContext = createContext(null);
// export const DochakiContext = createContext(null);


const TShakyaContextProvider = (props) => {
  const [searchQuerry, setSearchQuerry] = useState('test');

  const contextValue = {
    searchQuerry,
    setSearchQuerry
  };

  return (
    <TShakyaContext.Provider value={contextValue}>
      {props.children}
    </TShakyaContext.Provider>
  );
};

export default TShakyaContextProvider;