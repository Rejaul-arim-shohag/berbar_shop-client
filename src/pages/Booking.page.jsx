import { useParams } from 'react-router-dom';
import AppointmentForm from '../components/Booking/AppointmentForm';
import Footer from '../components/Footer/Footer';
import UpperNav from '../components/HeroSaction/UpperNav';
import HomePageLayout from '../components/Layout/HomePageLayout';
import Navbar from '../components/Navbar/Navbar';

export default function BookingPage() {
  const { styleId } = useParams();

  return (
    <>
      <div className="features">
        <div className=" container px-5 pb-5">
          <UpperNav />
          <Navbar />
        </div>
      </div>
      <HomePageLayout title="Set a appointment" des="Best place to get a beautiful haircut">
        <AppointmentForm />
      </HomePageLayout>
      <Footer />

    </>
  )
}
