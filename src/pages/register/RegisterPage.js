import React, { useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Container, Form, Button } from "react-bootstrap";
import { CustomInputField } from "../../components/custom-input-filed/CustomInputField";
import { postNewAdmin } from "../../helper/axiosHelper";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      toast.error("Password do not match!!");
      return;
    }

    const { status, message } = await postNewAdmin(rest);
    toast[status](message);
  };
  //   console.log(form);

  const inputes = [
    {
      label: "First Name",
      type: "text",
      name: "fName",
      placeholder: "John",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lName",
      placeholder: "Kenedy",
      required: true,
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
      placeholder: "0414234567",
      required: true,
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      placeholder: "1 Pitt Street Sydney",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "JohnFKenedy123@gmail.com",
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
      label: "ConfirmPassword",
      type: "passwoord",
      name: "confirmpassword",
      placeholder: "*******",
      required: true,
    },
  ];

  return (
    <div>
      <Header />
      <div className="main register-page p-5">
        <Container className="m-3">
          <Form
            onSubmit={handleOnSubmit}
            className="border p-3 solid shadow-lg"
          >
            <h3>Sign up with new user!!!</h3>
            <hr />

            {inputes.map((item, i) => {
              <CustomInputField key={i} {...item} onChange={handleOnChange} />;
            })}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
