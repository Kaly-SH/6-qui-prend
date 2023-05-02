import React from "react";
import { Route, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateRoom from "../components/Room/CreateRoom";
import RoomLayout from "../components/Room/RoomLayout";
import Room from "../components/Room/Room";


const Router = createBrowserRouter([

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
                path: "/room/:id",
                element: <Room />,
            },
            {
                path: "/room/create",
                element: <CreateRoom />,
            }
        ]
    },
   
]);

export default Router;