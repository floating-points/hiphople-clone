import './App.css';
import { Route, Link } from "react-router-dom";
import Mainpage from './components/Mainpage/Mainpage';
import DomesticBoard from './components/DomesticBoard/DomesticBoard';
import Register from './components/Register/Register';
import Auth from './components/Login/Auth/Auth';
import WritePost from './components/DomesticBoard/WritePost/WritePost';

function App() {
  return (
    <div>
      <Route path="/" exact component={Mainpage} />
      <Route path="/DomesticBoard" exact component={DomesticBoard} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Auth} />
      <Route path="/DomesticBoard/Write" exact component={WritePost} />
    </div>
  );
}

export default App;
