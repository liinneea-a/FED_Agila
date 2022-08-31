import { Formik, Form, Field, useFormik, resetForm } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  useEffect(() => {}, []);
  const form = useRef();

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
        onSubmit={(values, { setSubmitting }) => {
          emailjs.sendForm(
            "service_janhzou",
            "template_tjapnol",
            "form",
            "2ijQHECER4e4p4In8"
          );
          
          setSubmitting(false);

          alert("skickat!");
          
        }}
      >
        {(formik) => (
          <Form
            ref={form}
            className="contact-form"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="subject">Subject *</label>
            <Field
              id="subject"
              name="subject"
              placeholder=""
              onChange={formik.handleChange}
              value={formik.values.subject}
              error={formik.touched.subject && formik.errors.subject}
            />

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

            <div className="form-footer-group">
              <button disabled={formik.isSubmitting} type="submit" value="send">
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
