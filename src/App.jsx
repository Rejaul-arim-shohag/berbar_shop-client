import AOS from "aos";
import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/aos/dist/aos.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gellary/Gellary";
import AllMentor from './components/Mentor/AllMentor';
import Models from "./components/Models/Models";
import AllServices from './components/Services/AllServices';
import Testimonial from './components/Testimonial/Testimonial';
import PrivacyPolicy from "./components/UtilitiComponent/PrivacyPolicy";
import RefundPolicy from "./components/UtilitiComponent/RefundPolicy";
import TermsConditions from "./components/UtilitiComponent/TermsConditions";
import BookingPage from "./pages/Booking.page";
import ComingSoon from './pages/ComingSoon.page';
import Features from './pages/Features.page';
import Home from './pages/Home.page';
import NotFound from './pages/NotFound.page';
import UtilitiesPage from "./pages/Utilities.page";
function App() {
  AOS.init();
  const queryClient = new QueryClient()
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="booking/:styleId" element={<BookingPage />} />
            <Route path='features' element={<Features />}>
              <Route path='service' element={<AllServices />} />
              <Route path='gallery' element={<Gallery />} />
              <Route path='reviews' element={< Testimonial />} />
              <Route path='about' element={<AboutUs routingAbout />} />
              <Route path='contact' element={<Contact />} />
              <Route path='*' index element={<NotFound />} />
            </Route>
            <Route path='utilities' element={<UtilitiesPage />} >
              <Route path='privacy' element={<PrivacyPolicy />} />
              <Route path='refund' element={<RefundPolicy />} />
              <Route path='termsConditions' element={<TermsConditions />} />
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
