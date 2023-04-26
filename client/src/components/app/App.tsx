import Home from "components/pages/home/Home";

import "./App.css";

const App = () => {
  console.log("App here");
  return (
    <div className="app">
      <h1>HELSINKI CITY BIKE APP</h1>
      <Home />
    </div>
  );
};
export default App;
