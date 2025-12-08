import { Navbar } from "../components/layout";
import { HomePage, CartPage } from "../pages";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
