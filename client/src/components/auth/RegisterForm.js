import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import AlertMessage from "../layout/AlertMessage";
import { registerUserAction } from "../../redux/Actions/AuthAction";

const RegisterForm = () => {
  const dispatch = useDispatch();
  // Local state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const register = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Passwords do not match" });
      setTimeout(() => setAlert(null), 5000);
      return;
    }
    dispatch(registerUserAction(registerForm));
  };

  return (
    <>
      <Form className="my-4" onSubmit={register}>
        <AlertMessage info={alert} />

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link to="/login">
          <Button variant="info" size="sm" className="ml-2">
            Login
          </Button>
        </Link>
      </p>
    </>
  );
};
export default RegisterForm;
