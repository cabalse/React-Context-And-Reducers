import { useContext } from "react";
import { Context } from "./context";

const useAppContext = () => {
    const context = useContext(Context)
  
    if (context === undefined) {
      throw new Error("useShop must be used within ShopContext")
    }
  
    return context
  }
  
  export default useAppContext;
  