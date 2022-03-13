import React, {Fragment} from 'react';

const Hero = (props) => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5  p-0 hero">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="hero-left ">
                                        <h1 className="hero-title animated fadeInUp">{props.title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 p-0">
                        <img className="hero-img" src="img1.webp"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Hero;