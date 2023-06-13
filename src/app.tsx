import { AppContextProvider } from "./context/appcontextprovider";
import Cart from "./components/cart";
import Products from "./components/products";

function App() {
  return (
    <AppContextProvider>
      <Cart />
      <div style={{ paddingTop: '10px'}}>
        <Products />
      </div>
    </AppContextProvider>
  )
}

export default App
