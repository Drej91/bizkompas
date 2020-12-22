import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import News from "./Components/News/News";
import Services from "./Components/Services/Services";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import UsefulLinks from "./Components/UsefulLinks/UsefulLinks";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" component={Services} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/news" component={News} />
          <Route path="/usefulLinks" component={UsefulLinks} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
