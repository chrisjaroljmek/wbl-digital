export function SubmissionForm() {
  return (
    <form className="flex flex-col items-center justify-center">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
}
