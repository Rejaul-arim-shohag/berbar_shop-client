import React, {Component, Fragment} from 'react';
import TopNavBar from "../Components/TopNavBar";
import HomeHero from "../Components/HomeHero";
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <HomeHero/>
            </Fragment>
        );
    }
}
export default HomePage;