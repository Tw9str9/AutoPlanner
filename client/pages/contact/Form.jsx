import SendIcon from "@mui/icons-material/Send";

export default function Form() {
  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <div className="field">
          <label htmlFor="firstName">Voornaam: </label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="field">
          <label htmlFor="lastName">Achternaam: </label>
          <input type="text" name="lastName" id="lastName" />
        </div>
      </div>
      <div>
        <div className="field">
          <label htmlFor="subject">Onderwerp: </label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Telefoonnummer: <span>(optioneel)</span>
          </label>
          <input type="text" name="phone" id="phone" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">E-mailadres: </label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Bericht: </label>
        <textarea name="message" id="message"></textarea>
      </div>
      <button type="submit">
        Verzenden <SendIcon />
      </button>
    </form>
  );
}
