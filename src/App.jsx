import AOS from "aos";
import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/aos/dist/aos.css';
import AboutUs from './components/AboutUs/AboutUs';
import AllMentor from './components/Mentor/AllMentor';
import AllServices from './components/Services/AllServices';
import Testimonial from './components/Testimonial/Testimonial';
import ComingSoon from './pages/ComingSoon.page';
import Features from './pages/Features.page';
import Home from './pages/Home.page';
import NotFound from './pages/NotFound.page';
function App() {
  AOS.init();
  const queryClient = new QueryClient()
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/features' element={<Features />}>
              <Route path='service' element={<AllServices />} />
              <Route path='gallery' element={<ComingSoon />} />
              <Route path='reviews' element={< Testimonial />} />
              <Route path='about' element={<AboutUs routingAbout/>} />
              <Route path='contact' element={<ComingSoon />} />
              <Route path='*' index element={<NotFound />} />
            </Route>
            <Route path='*' index element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

    </Fragment>
  );
}

export default App;
