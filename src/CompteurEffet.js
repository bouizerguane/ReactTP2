import { useState, useEffect } from "react";

export default function CompteurEffet() {
  const [compteur, setCompteur] = useState(0);
  useEffect(() => {
    console.log(`Le compteur est à ${compteur}`);
  });

  return (
    <div>
      <div>
        <button onClick={() => setCompteur(compteur + 1)}>
          Incrémenter avec effet
        </button>
      </div>
    </div>
  );
}
