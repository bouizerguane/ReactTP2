import logo from "./logo.svg";
import "./App.css";
import Compteur from "./Compteur";
import MessageButton from "./MessageButton";
import FormulaireNom from "./FormulaireNom";
import CompteurEffet from "./CompteurEffet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Compteur />
        <MessageButton />

        <FormulaireNom />

        <CompteurEffet />
      </header>
    </div>
  );
}

export default App;
