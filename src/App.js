import React, { useState } from "react";
import HomePage from "./components/homepage.component";

import "./App.css";

function App() {
  const [names, setNames] = useState(["moham", "hello", "nice", "isit", "yes"]);

  return (
    <div>
      <HomePage names={names} />
    </div>
  );
}

export default App;
