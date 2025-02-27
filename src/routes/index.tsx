import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import { menus } from "../data/MenuData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home 
                    cartItems={[]} 
                    updateQuantity={() => {}} 
                    removeFromCart={() => {}} 
                    totalPrice={0} 
                    menus={menus}
                    addToCart={() => {}} 
                />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
