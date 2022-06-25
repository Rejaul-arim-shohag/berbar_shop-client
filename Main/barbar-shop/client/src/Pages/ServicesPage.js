import React, {Component, Fragment} from 'react';
import TopNavBar from "../Components/TopNavBar";
import Hero from "../Components/Hero";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <Hero title="Speciality"/>
            </Fragment>
        );
    }
}

export default ServicesPage;