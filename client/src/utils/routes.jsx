import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BlogPage from "../pages/BlogPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import AdminPanel from "../pages/AdminPanel";
import PrivateRoute from "./PrivateRout";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/blog/:id',
        element: (
            <PrivateRoute>
                <BlogPage />
            </PrivateRoute>
        )
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/profile',
        element: (
            <PrivateRoute>
                <Profile />
            </PrivateRoute>
        )
    },
    {
        path: '/write-blog/:id?',
        element: (
            <PrivateRoute>
                <AdminPanel />
            </PrivateRoute>
        )
    }
]);
