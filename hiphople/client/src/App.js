import './App.css';
import { Route, Link } from "react-router-dom";
import Mainpage from './components/Mainpage/Mainpage';
import DomesticBoard from './components/DomesticBoard/DomesticBoard';
import Auth from "./components/Login/Auth/Auth";

function App() {
  return (
    // <div>
    //   <Route path="/" exact component={Mainpage} />
    //   <Route path="/DomesticBoard" component={DomesticBoard} />
    // </div>
    <Auth />
  );
}

export default App;
