import React from "react";
import { Outlet } from "react-router-dom";

const RoomLayout = () => (
    <div className="room-layout">
        <div className="container">
            <h1>6 QUI PREND</h1>
            <Outlet />
        </div>
    </div>
);

export default RoomLayout;