import React, { useState } from "react";
import { Route, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateRoom from "../pages/CreateRoom";
import RoomLayout from "../components/Layout/RoomLayout";
import Room from "../pages/Room";


export const Router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
        errorElement: <div>404</div>,
    },
    {
        path: "/room",
        element: <RoomLayout />,
        errorElement: <div>404</div>,
        children: [
            {
                path: "",
                element: <div>Room</div>,
            },
            {
                path: ":id",
                element: <Room />,
            },
            {
                path: "create",
                element: <CreateRoom />,
            }
        ]
    },
   
]);

export default Router;