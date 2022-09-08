import { Formik, Form, Field } from "formik";
import React, { useEffect, useRef } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  let setMessageSent = false;

  useEffect(() => {}, []);

  const form = useRef();

  const notify = () => toast.success("Message has been sent successfully!", {
    theme: "colored"
  });

  return (
    <div>
      <Formik
        initialValues={{
          subject: "",
          message: "",
          email: "",
        }}
        validationSchema={Yup.object().shape({
          subject: Yup.string().required("Please fill in a subject."),
          message: Yup.string().required("Please fill in a message."),
          email: Yup.string().required("Please enter your email adress."),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          emailjs.sendForm(
            "service_janhzou",
            "template_tjapnol",
            "form",
            "2ijQHECER4e4p4In8"
          );

          setSubmitting(false);
          setMessageSent = true;
          notify()
          resetForm()
        }}
      >
        {(formik, errors, touched) => (
          <Form
            ref={form}
            className="contact-form"
            onSubmit={formik.handleSubmit}
          >

            {setMessageSent ? (
              <div>
                <hr />
                <ToastContainer />
                <p className="form-message">
                  Thank you for your message! <br />
                  We'll get back to you as soon as possible!
                </p>
                <hr />
              </div>
            ) : null}
            <h2 className="form-title">How can we help you?</h2>
            <label htmlFor="subject">Subject *</label>
            <Field
              id="subject"
              name="subject"
              placeholder=""
              onChange={formik.handleChange}
              value={formik.values.subject}
              error={formik.touched.subject && formik.errors.subject}
            />
            {formik.errors.subject && formik.errors.subject ? (
              <div className="error-text">{formik.errors.subject}</div>
            ) : null}

            <label htmlFor="message">Message *</label>
            <textarea
              className="message-input"
              id="message"
              name="message"
              placeholder=""
              onChange={formik.handleChange}
              value={formik.values.message}
              error={formik.touched.message && formik.errors.message}
            />
            {formik.errors.message && formik.errors.message ? (
              <div className="error-text">{formik.errors.message}</div>
            ) : null}

            <label htmlFor="email">Email *</label>
            <Field
              id="email"
              name="email"
              placeholder=""
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
            {formik.errors.email && formik.errors.email ? (
              <div className="error-text">{formik.errors.email}</div>
            ) : null}
            <div className="form-footer-group">
              <button className="sumbit-form-button" disabled={formik.isSubmitting} type="submit" value="send">
                Send
              </button>
              <p className="required-info">* These fields are required</p>
            </div>

            {formik.isSubmitting ? <p>sending message...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
