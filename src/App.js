import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import { SnackbarProvider } from "./context/SnackbarProvider";

function App() {
  return (
    // <HashRouter basename="/">
    <SnackbarProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </SnackbarProvider>
    // </HashRouter>
  );
}

export default App;
