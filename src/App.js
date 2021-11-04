// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
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
