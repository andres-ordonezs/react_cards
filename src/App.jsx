import {useState} from "react";

import "./App.css";
import CardsDeck from "./CardsDeck";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  return (
    <div className="App">
      <CardsDeck />
    </div>
  );
}

export default App;
