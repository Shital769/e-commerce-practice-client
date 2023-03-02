import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export const LoginPage = () => {
  return (
    <div>
      <Header />

      <div className="main login-page">
        <Form className="shadow-lg rounded">
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
            Forget Password? <a href="#">Reset Password</a>
          </div>
        </Form>
      </div>

      <Footer />
    </div>
  );
};
