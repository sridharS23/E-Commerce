import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Homepage from "../../Features/home/Homepage";
import Catalog from "../../Features/catalog/Catalog";
import AboutPage from "../../Features/about/AboutPage";
import ProductDetails from "../../Features/catalog/ProductDetails";
import ContactPage from "../../Features/contact/Contactpage";

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
        ]
    },
])