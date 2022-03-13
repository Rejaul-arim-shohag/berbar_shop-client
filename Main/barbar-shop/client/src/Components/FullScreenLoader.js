import React, {Component, Fragment} from 'react';
import loader from '../Assets/img/loader.svg'
class FullScreenLoader extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Fragment>
                <div className={this.props.isLoading+" LoadingOverlay"}>
                    <div className="center-screen">
                          <img className='loader-icon' alt="loader-icon" src={loader}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FullScreenLoader;