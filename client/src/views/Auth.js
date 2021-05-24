import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import Spinner from "react-bootstrap/Spinner";
import { loadUserAction } from "../redux/Actions/AuthAction";

const Auth = ({ authRoute }) => {
  const { isLoading, isAuthenticated } = useSelector(
    (state) => state.AuthReducer
  );
  const dispatch = useDispatch();

  let body;
  if (isAuthenticated) return <Redirect to="/dashboard" />;
  else
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>LearnIt</h1>
          <h4>Keep track of what you are learning</h4>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;
