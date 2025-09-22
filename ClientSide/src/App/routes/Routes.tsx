import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../Layout/App";
import Homepage from "../../Features/home/Homepage";
import Catalog from "../../Features/catalog/Catalog";
import AboutPage from "../../Features/about/AboutPage";
import ProductDetails from "../../Features/catalog/ProductDetails";
import ContactPage from "../../Features/contact/Contactpage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../Features/basket/BasketPage";
import CheckoutPage from "../../Features/checkout/CheckoutPage";
import LoginForm from "../../Features/account/LoginForm";
import RegisterForm from "../../Features/account/RegisterForm";
import RequireAuth from "./RequiredAuth";
import CheckoutSuccess from "../../Features/checkout/CheckoutSuccess";
import OrderPage from "../../Features/orders/OrderPage";
import OrderDetailedPage from "../../Features/orders/OrderDetailedPage";
import InventoryPage from "../../Features/admin/InventoryPage";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth/>, children: [
                {path: '/checkout', element: <CheckoutPage />},
                {path: '/checkout/success', element: <CheckoutSuccess />},
                {path: '/order', element: <OrderPage />},
                {path: '/order/:id', element: <OrderDetailedPage />},
                {path: '/Inventory', element: <InventoryPage />},
            ]},
            {path: '', element: <Homepage />},
            {path: '/catalog', element: <Catalog />},
            {path: '/catalog/:id', element: <ProductDetails />},
            {path: '/about', element: <AboutPage />},
            {path: '/contact', element: <ContactPage />},
            {path: '/Basket', element: <BasketPage />},
            {path: '/server-error', element: <ServerError />},
            {path: '/login', element: <LoginForm />},
            {path: '/register', element: <RegisterForm />},
            {path: '/not-found', element: <NotFound />},
            {path:'*', element: <Navigate replace to ='/not-found' />}
        ]
    },
])