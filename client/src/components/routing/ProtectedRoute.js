import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import NavbarMenu from "../layout/NavbarMenu";
import { loadUserAction } from "../../redux/Actions/AuthAction";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoading, isAuthenticated } = useSelector(
    (state) => state.AuthReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserAction());
  }, []);

  if (isLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <NavbarMenu />
            <Component {...rest} {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
