// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes, BrowserRouter, } from 'react-router-dom'



function App(props) {

  let DialogComponent = () => <Dialogs state={ props.state.dialogsPage}/>
let ProfileComponent = ()=><Profile state={props.state.profilePage}/>
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
         <Routes>
         {/* <Route path='/dialogs' render={()=> <Dialogs/>}/>
        < Route path='/profile' render={()=> <Profile/>}/> */}

         <Route exact path='/dialogs' element ={<DialogComponent/>}/>

        <Route path='/profile' element ={<ProfileComponent />}/>

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
