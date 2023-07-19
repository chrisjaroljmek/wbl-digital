import {useState} from React;

export function SubmissionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="flex flex-col items-center justify-center">
      <input type="text" value={name} placeholder="Name" />
      <input type="text" value={email} placeholder="Email" />
      <input type="text" value={message}placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
}
