import { Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar/Nav";
import Home from "./Components/HomePage/Home";
import Flights from "./Components/FlightsPage/Flights";
import Hotels from "./Components/HotelsPage/Hotels";
import CarRentals from "./Components/CarRentalsPage/CarRentals";
import Support from "./Components/SupportPage/Support";
import SignIn from "./Components/SignInPage/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/RentalCars" element={<CarRentals />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
