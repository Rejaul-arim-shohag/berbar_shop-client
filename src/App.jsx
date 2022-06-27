import Home from './pages/Home.page';
import {Fragment} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AOS from "aos";
import '../node_modules/aos/dist/aos.css'
function App() {
  AOS.init();
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
