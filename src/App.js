import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    // <HashRouter basename="/">
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
    // </HashRouter>
  );
}

export default App;
