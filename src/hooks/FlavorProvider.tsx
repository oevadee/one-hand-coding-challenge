import React, { createContext, useContext, useState } from "react";

interface FlavorProviderProps {}

const FlavorContext = createContext(null);
const FlavorUpdateContext = createContext(null);

export const useFlavor = () => {
  return useContext(FlavorContext);
};

export const useFlavorUpdate = () => {
  return useContext(FlavorUpdateContext);
};


export const FlavorProvider: React.FC<FlavorProviderProps> = ({ children }) => {
  const [chosenFlavor, setChosenFlavor] = useState(null);

  const updateFlavor = (flavor) => {
    setChosenFlavor(flavor);
  };
  
  return (
    <FlavorContext.Provider value={chosenFlavor}>
      <FlavorUpdateContext.Provider value={updateFlavor}>
        {children}
      </FlavorUpdateContext.Provider>
    </FlavorContext.Provider>
  );
};
