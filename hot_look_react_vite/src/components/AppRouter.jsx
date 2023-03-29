import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes.jsx";
import {HOME} from "../utils/consts.jsx";
const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth === true && authRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={HOME}/>} />
        </Routes>
    );
};

export default AppRouter;