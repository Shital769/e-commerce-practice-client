import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CustomInputField } from "../custom-input-field/CustomInputField";

export const PasswordResetForm = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setError("");

      value.length < 6 && setError("Minimum length is six digit characters");

      //wirting regular expressios
      !/[0-9]/.test(value) && setError("Number is required");
      !/[A-Z]/.test(value) && setError("Uppercase letter is required");
      !/[a-z]/.text(value) && setError("Lowercase letter is required");

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnPasswordRequest(formData);
  };

  const inputes = [
    {
      label: "OTP",
      type: "number",
      name: "otp",
      placeholder: "123456",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "*******",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmpassword",
      placeholder: "*******",
      required: true,
    },
  ];
  return (
    <div>
      <Form onSubmit={handleOnSubmit} className="border p-4 rounded shadow-lg">
        <h3 className="text-center">Reset New Password</h3>
        <hr className="mb-5" />
        {inputes.map((item, i) => (
          <CustomInputField key={i} {...item} onChange={handleOnChange} />
        ))}
        <Form.Group className="mb-3">
          <Form.Text>
            Your password must have at least 6 character long and one each
            Uppercase and Lowercase letter.
          </Form.Text>
        </Form.Group>
        <div className="text-danger mt-3 fw-bolder">{error}</div>
        <div className="d-grid mt-5">
          <Button variant="primary" type="submit" disabled={error}>
            Send OTP Request
          </Button>
        </div>
      </Form>
    </div>
  );
};
