import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import "../styles/forms.css";

import Modal from "react-modal";
import Register from "./registerModal";

const modalStyling = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
};

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().required("Email Required"),
  password: Yup.string().required("Password Required"),
});

Modal.setAppElement("#root");

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const whiteButton = "noStyleButton white";

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="modal">
      <button onClick={toggleModal} className={whiteButton}>
        <LoginIcon />
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={modalStyling}
        contentLabel="My dialog"
      >
        <button onClick={toggleModal} className="noStyleButton">
          <CloseIcon />
        </button>
        <div>
          <h1>Login</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginFormSchema}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="accountForm">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
          <p>
            Dont have an account? <Register />
          </p>
        </div>
      </Modal>
    </div>
  );
}
