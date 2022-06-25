import React, {Component, Fragment} from 'react';
import TopNavBar from "../Components/TopNavBar";
import HomeHero from "../Components/HomeHero";
import Speciality from "../Components/Speciality";
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <HomeHero/>
                <Speciality/>
            </Fragment>
        );
    }
}
export default HomePage;