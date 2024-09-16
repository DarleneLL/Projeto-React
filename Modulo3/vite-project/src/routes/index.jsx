import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/home/index'
import { Login } from '../pages/login/index'

export const routers = createBrowserRouter([
    {
        path: '/', // caminho
        element: <Login />
    },
    {
        path: '/HomePage', // caminho
        element: <HomePage />
    }
])