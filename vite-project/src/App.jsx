import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "http://apizzaa.com/";
  }, []);

  return <div className="center">Loading A Pizza...</div>;
}

export default App;
