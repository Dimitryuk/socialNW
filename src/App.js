// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Header/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <footer />
    </div>
  );
}

export default App;
