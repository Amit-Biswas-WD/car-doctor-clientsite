import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location.pathname);

  if (loading) {
    (<span className="loading loading-bars loading-xs"></span>),
      (<span className="loading loading-bars loading-sm"></span>),
      (<span className="loading loading-bars loading-md"></span>),
      (<span className="loading loading-bars loading-lg"></span>);
  }

  if (user?.email) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
  );
};

export default PrivateRoute;
