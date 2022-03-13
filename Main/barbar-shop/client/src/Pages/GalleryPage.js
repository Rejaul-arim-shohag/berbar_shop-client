import React, {Component, Fragment} from 'react';
import TopNavBar from "../Components/TopNavBar";
import Hero from "../Components/Hero";

class GalleryPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <Hero title="Gallery"/>
            </Fragment>
        );
    }
}

export default GalleryPage;