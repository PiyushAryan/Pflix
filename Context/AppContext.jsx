import { createContext, useState } from 'react';

export const AppContext = createContext("");


export const AppProvider = ({ children }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  
    return (
      <AppContext.Provider value={{ isDropdownVisible, setIsDropdownVisible }}>
        {children}
      </AppContext.Provider>
    );
  };