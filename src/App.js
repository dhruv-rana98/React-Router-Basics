import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcoome";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
