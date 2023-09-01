import "./App.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SignIn from "./Pages/SignIn";
import Checkout from "./components/Checkout";
import WishList from "./Pages/WishList";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Product from "./components/Product";
import Not_found from "./Pages/Not_found";
import { ToastContainer } from "react-toastify";
import Animation from "./components/Animation";
import Account from "./Pages/Account";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Animation /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: productsData,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <Not_found />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <ToastContainer
    position="bottom-center"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
