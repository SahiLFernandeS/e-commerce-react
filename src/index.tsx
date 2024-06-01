import React from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  return <div>Hello, world!</div>;
};


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);