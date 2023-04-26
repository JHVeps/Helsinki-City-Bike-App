import "./App.css";
import Home from "./pages/home/Home";

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
