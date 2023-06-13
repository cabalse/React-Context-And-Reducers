import Cart from "./cart";
import { AppProvider } from "../context/context";
import Products from "./products";

function App() {
  return (
    <AppProvider>
      <Cart />
      <div style={{ paddingTop: '10px'}}>
        <Products />
      </div>
    </AppProvider>
  )
}

export default App
