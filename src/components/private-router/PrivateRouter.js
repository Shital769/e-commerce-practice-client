import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const location = useLocation();

  const { user } = useSelector((state) => state.user);
  const isAuth = user?._id;

  return isAuth ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRouter;
