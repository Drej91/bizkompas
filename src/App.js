import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import News from "./components/News/News";
import Services from "./components/Services/Services";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import NewsDetailsPage from "./components/NewsDetailsPage/NewsDetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" component={Services} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/news" component={News} />
          <Route path="/news:id" component={NewsDetailsPage} />
          <Route path="/usefulLinks" component={UsefulLinks} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
