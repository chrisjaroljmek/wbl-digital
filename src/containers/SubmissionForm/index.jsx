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
      className={classnames("flex flex-col flex-1 space-y-4", className)}
      onSubmit={onSubmit}
    >
      <input
        className="pl-4 bg-dark-bg text-grey border border-grey h-[50px]"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="pl-4 bg-dark-bg text-grey border border-grey h-[50px]"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea
        className="pl-4 pt-4 bg-dark-bg text-grey border border-grey flex-1 max-h-[200px]"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button type="submit" className="text-white">
        Send
      </button>
    </form>
  );
}

SubmissionForm.propTypes = {
  className: PropTypes.string,
};
