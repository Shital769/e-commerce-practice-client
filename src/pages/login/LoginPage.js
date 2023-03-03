import React, { useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import { loginAction } from "./AuthAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const emailRef = useRef("");
  const passRef = useRef("");

  //calling the  updated state from store connected with authSLice
  const { isLoading, user } = useSelector((state) => state.user);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    //dispatch login action to call an api
    if (!formData.email || !formData.password) {
      return alert("Please fill in the both fields");
    }
    dispatch(loginAction(formData));
  };

  useEffect(() => {
    user?._id && navigate("/dashboard");
    //TODO: make router private and auto login
  }, [user, navigate]);

  return (
    <div>
      <Header />

      <div className="main login-page">
        <Form className="shadow-lg rounded" onSubmit={handleOnSubmit}>
          <h3 className="textcenter">Welcome!</h3>
          <hr className="mb-5" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isLoading ? (
              <Spinner variant="dark" animation="border" />
            ) : (
              "Submit"
            )}
          </Button>
          <div className="text-center p-5">
            Forget Password? <a href="/reset-password">Reset Password</a>
          </div>
        </Form>
      </div>

      <Footer />
    </div>
  );
};
