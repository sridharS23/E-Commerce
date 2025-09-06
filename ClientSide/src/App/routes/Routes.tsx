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

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <Homepage />},
            {path: '/catalog', element: <Catalog />},
            {path: '/catalog/:id', element: <ProductDetails />},
            {path: '/about', element: <AboutPage />},
            {path: '/contact', element: <ContactPage />},
            {path: '/Basket', element: <BasketPage />},
            {path: '/checkout', element: <CheckoutPage />},
            {path: '/server-error', element: <ServerError />},
            {path: '/not-found', element: <NotFound />},
            {path:'*', element: <Navigate replace to ='/not-found' />}
        ]
    },
])