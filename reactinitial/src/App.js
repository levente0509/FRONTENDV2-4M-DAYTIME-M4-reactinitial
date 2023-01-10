import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://demoapi.com/api/series/howimetyourmother")
      .then((res) => res.json())
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Series Api</h1>
      {loading ? <LoadingMask /> : "loaded"}
    </div>
  );
};

export default App;
