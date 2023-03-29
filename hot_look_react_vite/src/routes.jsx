import {HOME,
    COLLECTIONS,
    CLOTHES,
    COLLABORATIONS,
    CHOOSE_STYLE,
    INFORMATION,
    ACCOUNT,
    LOGIN} from "./utils/consts";
import Home from "./pages/home.jsx";
import Collections from "./pages/collections.jsx";
import Clothes from "./pages/clothes.jsx";
import Collaborations from "./pages/collaborations.jsx";
import ChooseStyle from "./pages/choose_style.jsx";
import Information from "./pages/information.jsx";
import Login from "./pages/login.jsx";
import Account from "./pages/account.jsx";

export const authRoutes = [
    {
        path: ACCOUNT,
        Component: Account
    }
]

export const publicRoutes = [
    {
        path: HOME,
        Component: Home
    },
    {
        path: COLLECTIONS,
        Component: Collections
    },
    {
        path: CLOTHES,
        Component: Clothes
    },
    {
        path: COLLABORATIONS,
        Component: Collaborations
    },
    {
        path: CHOOSE_STYLE,
        Component: ChooseStyle
    },
    {
        path: INFORMATION,
        Component: Information
    },
    {
        path: LOGIN,
        Component: Login
    }
]