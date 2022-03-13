import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import GalleryPage from "./Pages/GalleryPage";
class App extends Component {
  render() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/services" component={ServicesPage}/>
                    <Route exact path="/gallery" component={GalleryPage}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
  }
}
export default App;
