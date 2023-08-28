import React from "react";
import { Button, Form } from "react-bootstrap";

const RequestOtp = ({ handleOnChange, handleOnOtpRequest }) => {
  return (
    <div>
      <Form
        onSubmit={handleOnOtpRequest}
        className="border p-4 rounded shadow-lg"
      >
        <h3 className="text-center">Request OTP!</h3>
        <hr className="mb-5" />
        <p>OTP will be sent to your email.</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="email"
            placeholder="Enter Email"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Request OTP
        </Button>
      </Form>
    </div>
  );
};

export default RequestOtp;
