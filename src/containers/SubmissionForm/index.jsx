import { useState } from "react";

import PropTypes from "prop-types";
import classnames from "classnames";
import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL;

export function SubmissionForm(props) {
  const { className } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    axios
      .post(`${backendURL}/send-email`, data)
      .then((response) => {
        console.log(response.data);

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  }

  return (
    <form
      className={classnames(
        "flex flex-col items-center justify-center text-dark-black",
        className
      )}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

SubmissionForm.propTypes = {
  className: PropTypes.string,
};
