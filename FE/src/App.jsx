import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Add from "./pages/Add";
import Basket from "./pages/Basket";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import WishlistProvider from "./context/WishlistProvider";

function App() {
  return (
    <>
      <WishlistProvider>
        <HelmetProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/add" element={<Add />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </WishlistProvider>
    </>
  );
}

export default App;
