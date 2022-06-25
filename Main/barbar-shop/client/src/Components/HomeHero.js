import React, {Component, Fragment} from 'react';
import  scissors from "../Assets/img/scissors.svg"
class HomeHero extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5  p-0 home-hero">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <div className="home-hero-left">
                                            <img src={scissors}/>
                                            <h1 className="home-hero-title  animated fadeInUp ">WE ARE THE <br/>LAST OF <br/>BREAD</h1>
                                            <h1 className="home-hero-subtitle  animated fadeInUp  mt-2">Achive Your Dream Style</h1>
                                            <button className="btn mt-2  animated fadeInUp  site-btn">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 p-0">
                            <img className="home-hero-img" src="img1.webp"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomeHero;