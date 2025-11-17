import { useState } from "react";

export default function Compteur() {
  const [compteur, setCompteur] = useState(0);

  function incrementerCompteur() {
    setCompteur(compteur + 1);
  }

  return (
    <div>
      <h2>Vous avez cliqué {compteur} fois.</h2>
      <button onClick={incrementerCompteur}>incrémenter</button>
    </div>
  );
}
