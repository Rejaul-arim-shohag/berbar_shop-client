import AOS from "aos";
import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/aos/dist/aos.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactSection from "./components/Contact/ContactSection";
import GallerySection from "./components/Gellary/GallerySection";
import AllServices from './components/Services/AllServices';
import Testimonial from './components/Testimonial/Testimonial';
import PrivacyPolicy from "./components/UtilitiComponent/PrivacyPolicy";
import RefundPolicy from "./components/UtilitiComponent/RefundPolicy";
import TermsConditions from "./components/UtilitiComponent/TermsConditions";
import BookingPage from "./pages/Booking.page";
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
              <Route path='reviews' element={< Testimonial />} />
              <Route path='about' element={<AboutUs routingAbout />} />
              <Route path='*' index element={<NotFound />} />
            </Route>

            <Route path='gallery' element={<GallerySection />} />
            <Route path='contact' element={<ContactSection />} />

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
