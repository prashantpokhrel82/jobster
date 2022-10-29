import React from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div>Shared Layout</div>
      <Outlet />
    </>
  );
};

export default SharedLayout;
