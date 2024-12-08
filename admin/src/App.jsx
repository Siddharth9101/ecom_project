import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function Layout() {
  const location = useLocation();

  const shouldRenderLayout = location.pathname !== "/login";

  return (
    <>
      {shouldRenderLayout && <Topbar />}
      {shouldRenderLayout && (
        <div className="container">
          {shouldRenderLayout && <Sidebar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      )}
    </>
  );
}

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  // console.log(
  //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  //     .currentUser.isAdmin
  // );
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && <Route path="*" element={<Layout />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
