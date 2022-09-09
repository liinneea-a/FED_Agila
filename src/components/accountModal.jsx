import React, { Component } from "react";
import Modal from "react-modal";
import LoginIcon from "@mui/icons-material/Login";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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

const RegisterFormSchema = Yup.object().shape({
  email: Yup.string().required("Email Required"),
  password: Yup.string().required("Password Required"),
});

export default class AccountModal extends Component {
  state = {
    loginOpened: false,
    signupOpened: false,
  };
  openModal = (modalType) => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: true,
        signupOpened: false,
      });
    } else if (modalType === "signup") {
      this.setState({
        loginOpened: false,
        signupOpened: true,
      });
    }
  };
  closeModal = (modalType) => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: false,
      });
    } else if (modalType === "signup") {
      this.setState({
        signupOpened: false,
      });
    }
  };
  render() {
    const { loginOpened, signupOpened } = this.state;
    const whiteButton = "noStyleButton white";

    return (
      <>
        <Modal
          isOpen={loginOpened}
          onRequestClose={this.closeModal("login")}
          style={modalStyling}
        >
          <div>
            <h1>Login</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginFormSchema}
              onSubmit={(values) => {
                let existingUsers = JSON.parse(localStorage.getItem("users"));
                console.log(existingUsers);
                console.log(values);
                for (let i = 0; i < existingUsers.length; i++) {
                  console.log(existingUsers[i]);
                  const userExists =
                    values.email === existingUsers[i].email &&
                    values.password === existingUsers[i].password;
                  if (userExists) {
                    console.log("true");
                  } else {
                    // create login error on login form
                    // email or password incorrect
                  }
                }
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
                {ErrorMessage.email && touched.email ? (
                  <div>{ErrorMessage.email}</div>
                ) : null}
                <ErrorMessage component="span" name="email" className="error" />
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                />
                {ErrorMessage.password && touched.password ? (
                  <div>{ErrorMessage.password}</div>
                ) : null}
                <ErrorMessage
                  component="span"
                  name="password"
                  className="error"
                />
                <button type="submit">Submit</button>
              </Form>
            </Formik>
            <p>
              Dont have an account?
              <button
                onClick={this.openModal("signup")}
                className="noStyleButton"
              >
                Signup
              </button>
            </p>
          </div>

          <button onClick={this.closeModal("login")} className="noStyleButton">
            Close
          </button>
        </Modal>

        <Modal
          isOpen={signupOpened}
          onRequestClose={this.closeModal("signup")}
          style={modalStyling}
        >
          <div>
            <h1>Signup</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={RegisterFormSchema}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                let existingUsers = JSON.parse(localStorage.getItem("users"));
                if (existingUsers == null) {
                  existingUsers = [];
                }
                existingUsers.push(values);
                localStorage.setItem("users", JSON.stringify(existingUsers));
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
                {ErrorMessage.email && touched.email ? (
                  <div>{ErrorMessage.email}</div>
                ) : null}
                <ErrorMessage component="span" name="email" className="error" />
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                />
                {ErrorMessage.password && touched.password ? (
                  <div>{ErrorMessage.password}</div>
                ) : null}
                <ErrorMessage
                  component="span"
                  name="password"
                  className="error"
                />
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </div>
          <p>
            Already have an account?
            <button onClick={this.openModal("login")} className="noStyleButton">
              Login
            </button>
          </p>

          <button onClick={this.closeModal("signup")} className="noStyleButton">
            Close
          </button>
        </Modal>
        <button onClick={this.openModal("login")} className={whiteButton}>
          <LoginIcon />
        </button>
      </>
    );
  }
}
