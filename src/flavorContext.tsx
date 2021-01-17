import React, { createContext, useContext, useMemo, useState } from "react";

const FlavorContext = createContext(null);

function useFlavor() {
  const context = useContext(FlavorContext);
  if (!context) {
    throw new Error(`useFlavor must be used within a FlavorProvider`);
  }
  return context;
}
function FlavorProvider(props) {
  const [flavor, setFlavor] = useState(null);
  const value = useMemo(() => [setFlavor, flavor], [flavor]);
  return <FlavorContext.Provider value={value} {...props} />;
}
export { FlavorProvider, useFlavor };
