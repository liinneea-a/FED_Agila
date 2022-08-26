import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  subject: Yup.string().required("Please fill in a subject."),
  message: Yup.string().required("Please fill in a message."),
  email: Yup.string().required("Please enter your email adress."),
});

const ContactForm = () => {
  return (
    <div >
      <Formik
        initialValues={{
          subject: "",
          message: "",
          email: "",
        }}
        validationSchema={ContactFormSchema}
      >
        <Form className="contact-form">
          <label htmlFor="subject">Subject</label>
          <Field id="subject" name="subject" placeholder="" />

          <label htmlFor="message">Message</label>
          <Field className="message-input" id="message" name="message" placeholder="" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="" type="email" />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
