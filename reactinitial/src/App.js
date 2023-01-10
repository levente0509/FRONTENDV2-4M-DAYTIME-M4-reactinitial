import React, { useEffect, useState } from "react";
import Character from "./components/Character";
import LoadingMask from "./components/LoadingMask";
import Subscription from "./components/Subscription";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://demoapi.com/api/series/howimetyourmother")
      .then((res) => res.json()) //adatot elkészíti
      .then((data) => setCharacters(data))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <div className="App">
      <h1>Series Api</h1>
      {loading ? (
        <LoadingMask />
      ) : (
        characters.map((character, i) => (
          <Character character={character} key={i} />
        ))
      )}
      <Subscription />
    </div>
  );
};

export default App;
