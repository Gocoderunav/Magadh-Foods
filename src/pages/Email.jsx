
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Email.css"

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jnxbtkn', 'template_roc5j2h', form.current, {
        publicKey: 'GUNvgdRbdz4vX_Xfe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email sent successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send email. Please try again.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <ToastContainer />
    </>
  );
};