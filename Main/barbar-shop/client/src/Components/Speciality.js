import React, {Fragment} from 'react';
import  arrow from "../Assets/img/right-arrow.svg"
const Speciality = () => {
    return (
        <Fragment>
            <div className="container section">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="section-title">Our Speciality</h1>

                        <table className="table mt-4">
                            <tbody>
                            <tr>
                                <td><img src={arrow}/></td>
                                <td>Be the majority have suffered alteration in some form, by injected humour.</td>
                            </tr>
                            <tr>
                                <td><img src={arrow}/></td>
                                <td>Be the majority have suffered alteration in some form, by injected humour.</td>
                            </tr>
                            <tr>
                                <td><img src={arrow}/></td>
                                <td>Be the majority have suffered alteration in some form, by injected humour.</td>
                            </tr>
                            <tr>
                                <td><img src={arrow}/></td>
                                <td>Be the majority have suffered alteration in some form, by injected humour.</td>
                            </tr>
                            <tr>
                                <td><img src={arrow}/></td>
                                <td>Be the majority have suffered alteration in some form, by injected humour.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <img className="section-image" src="img1.webp"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Speciality;