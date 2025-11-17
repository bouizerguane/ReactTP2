import { useState } from "react";

export default function FormulaireNom() {
  const [nom, setNom] = useState("");

  function handleChange(event) {
    setNom(event.target.value);
  }

  function handlSubmit(event) {
    event.preventDefault();
    alert(`Le nom saisi est: ${nom}`);
  }
  return (
    <form onSubmit={handlSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={handleChange} />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
}
