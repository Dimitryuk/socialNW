// import logo from "./logo.svg";
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { addPost } from './components/redux/state';

function App(props) {
  console.log(props);

  let DialogComponent = () => <Dialogs store={props.store} />;
  let ProfileComponent = () => (
    <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />
  );
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogComponent />} />
            <Route path="/profile" element={<ProfileComponent />} />

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
