import React from "react";
import ReactModal from "react-modal";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const CustomModal = (props) => {
  const { isOpen } = props;
  // If we only put the modal in the render tree when it's open, multiple modals
  // will open in the expected order
  return isOpen ? <ReactModal {...props} style={modalStyling} /> : null;
};

export default function AccountModal() {
  const [showSignupModal, setShowSignupModal] = React.useState(false);
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const ModalComponent = CustomModal;
  const whiteButton = "noStyleButton white";
  const notifyError = () => {
    toast.error("Email or password is incorrect");
  };
  const notifySuccessRegister = () => {
    toast.success("User registered, redirection in 2 sec");
    setTimeout(() => {
      setShowSignupModal(false);
      setShowLoginModal(true);
    }, 3000);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <button
          onClick={() => {
            console.log("logged out");
            setIsLoggedIn(false);
          }}
          className={whiteButton}
        >
          <LogoutIcon />
        </button>
      ) : (
        <button onClick={() => setShowLoginModal(true)} className={whiteButton}>
          <LoginIcon />
        </button>
      )}
      {/* Signup */}
      <ModalComponent
        isOpen={showSignupModal}
        onRequestClose={() => setShowSignupModal(false)}
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
              notifySuccessRegister();
            }}
          >
            <Form className="accountForm">
              <label htmlFor="mail">Email</label>
              <Field
                id="mail"
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
          <button
            onClick={() => {
              setShowSignupModal(false);
              setShowLoginModal(true);
            }}
            className="noStyleButton"
          >
            Login
          </button>
        </p>
        <button
          onClick={() => {
            setShowSignupModal(false);
            setShowLoginModal(false);
          }}
          className="modalCloseButton"
        >
          Close
        </button>
        <ToastContainer autoClose={2000} />
      </ModalComponent>
      {/* login */}
      <ModalComponent
        isOpen={showLoginModal}
        onRequestClose={() => setShowLoginModal(false)}
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
              let userNonexistent = true;
              for (let i = 0; i < existingUsers.length; i++) {
                console.log(existingUsers[i]);
                const userExists =
                  values.email === existingUsers[i].email &&
                  values.password === existingUsers[i].password;
                if (userExists) {
                  setIsLoggedIn(true);
                  console.log("true");
                  setShowLoginModal(false);

                  userNonexistent = false;
                } else {
                  console.log("error");
                  userNonexistent = true;
                }
              }
              if (userNonexistent) {
                notifyError();
              }
            }}
          >
            <Form className="accountForm">
              <label htmlFor="mail">Email</label>
              <Field
                id="mail"
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
              onClick={() => {
                setShowSignupModal(true);
                setShowLoginModal(false);
              }}
              className="noStyleButton"
            >
              Signup
            </button>
          </p>
        </div>
        <button
          onClick={() => setShowLoginModal(false)}
          className="modalCloseButton"
        >
          Close
        </button>
        <ToastContainer />
      </ModalComponent>
    </div>
  );
}
