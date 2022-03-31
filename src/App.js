import "./App.css";
import FoodDeals from "./components/FoodDeals/FoodDeals";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <FoodDeals></FoodDeals>
    </div>
  );
}

export default App;
