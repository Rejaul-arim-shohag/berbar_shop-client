import React, {Component, Fragment} from 'react';
import TopNavBar from "../Components/TopNavBar";
import Hero from "../Components/Hero";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <Hero title="About"/>
            </Fragment>
        );
    }
}

export default AboutPage;