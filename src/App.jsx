import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route to="/" Component={<Homepage />}></Route>
          <Route to="/about" Component={<About />}></Route>
          <Route to="/products" Component={<Products />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
