// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes, BrowserRouter, } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
         <Routes>
        <Route path='/profile' element={<Profile/>}/>

        <Route  path='/dialogs' element ={<Dialogs/>}/>
        </Routes> 
        
{/* <Profile/>
<Dialogs/> */}
     
      </div>
      
      
      <footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
