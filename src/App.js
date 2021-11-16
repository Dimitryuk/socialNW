// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,  BrowserRouter, Routes } from 'react-router-dom'
import { Routes } from "react-router";
import { addPost } from "./components/redux/state";



function App(props) {
  console.log(props)

  let DialogComponent = () => <Dialogs state={ props.state.dialogsPage}/>
let ProfileComponent = ()=><Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
         <Routes>
       
         <Route path='/dialogs' render={()=> <Dialogs state={props.state.dialogsPage}/>}/>
        < Route path='/profile' render={()=> <Profile profilePage={props.state.profilePage}  addPost={props.addPost}/>}/>

         {/* <Route exact path='/dialogs' element ={<DialogComponent/>}/>

        <Route path='/profile' element ={<ProfileComponent />} /> */}
          {/* <Route exact path='/dialogs' element ={<DialogComponent/>}/> */}
         
          

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
