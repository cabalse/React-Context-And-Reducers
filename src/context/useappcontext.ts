import { useContext } from "react";
import { Context } from "./appcontextprovider";

const useAppContext = () => {
    const context = useContext(Context)
  
    if (context === undefined) {
      throw new Error("useAppContext must be used within AppContext")
    }
  
    return context
  }
  
  export default useAppContext;
  