import React from "react";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <h1>Bouncing Wave Grid</h1>
      <Grid rows={15} cols={20} />
    </div>
  );
}

export default App;
