import { useState } from "react";

function App() {
  // stato per array articoli
  const [articoli, setArticoli] = useState([
    { titolo: "Articolo 1" },
    { titolo: "Articolo 2" },
    { titolo: "Articolo 3" }
  ]);

  // stato per nuovi articoli
  const [nuovoTitolo, setNuovoTitolo] = useState("");

  // funzione per aggiungere articoli
  const handleSubmit = (e) => {

    e.preventDefault();

    let nuoviArticoli = [];

    for (let i = 0; i < articoli.length; i++) {
      nuoviArticoli.push(articoli[i]);
    }

    nuoviArticoli.push({ titolo: nuovoTitolo });
    setArticoli(nuoviArticoli);
    setNuovoTitolo("");
  };

  return (
    <div>
      <h1>Lista di articoli</h1>
      <ul>
        {articoli.map((articolo, index) => (
          <li key={index}>{articolo.titolo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovoTitolo}
          onChange={(e) => setNuovoTitolo(e.target.value)}
        />
        <button type="submit">Aggiungi</button>
      </form>
    </div>
  );
}

export default App;
