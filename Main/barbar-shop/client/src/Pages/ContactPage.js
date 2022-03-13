import React, {Component, Fragment} from 'react';
import TopNavBar from "../Components/TopNavBar";
import Hero from "../Components/Hero";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <Hero title="Contact"/>
            </Fragment>
        );
    }
}

export default ContactPage;