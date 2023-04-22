import {HOME,
    COLLECTIONS,
    CLOTHES,
    COLLABORATIONS,
    CHOOSE_STYLE,
    INFORMATION,
    ACCOUNT,
    LOGIN} from "./consts.jsx";
import Home from "../components/screens/home/home.jsx";
import Collections from "../components/screens/collections/collections.jsx";
import Clothes from "../components/screens/clothes/clothes.jsx";
import Collaborations from "../components/screens/collaborations/collaborations.jsx";
import ChooseStyle from "../components/screens/choose_style/choose_style.jsx";
import Information from "../components/screens/information/information.jsx";
import Login from "../components/screens/login/login.jsx";
import Account from "../components/screens/account/account.jsx";

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