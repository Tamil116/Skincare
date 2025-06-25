import React from 'react';
import TopHeader from './components/TopHeader';
import DealerInfo from './components/DealerInfo';
import BannerImage from './components/BannerImage';
import CallBackForm from './components/CallBackForm';
import AboutSection from './components/AboutSection';
import InverterSection from './components/InverterSection';
import DealerTagsInfo from './components/DealerTagsInfo';
import SocialTimeline from './components/SocialTimeline';
import NearbyDealers from './components/NearbyDealers';
import ContactSection from './components/Contactus';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 w-full">
      <TopHeader />
      <div className='mt-5 text-xl'>
   Battery Dealer near me /Battery Dealer in Tamil Nadu Battery/ Dealer in Tiruchirappalli /Battery Dealer in Cantonment
  </div>
      <main className="w-full p-3 grid md:grid-cols-2 gap-1 mt-11 ">
        <DealerInfo />
        <BannerImage />
      </main>
      <InverterSection />
      <CallBackForm />
      <AboutSection />
      <DealerTagsInfo />
      <SocialTimeline />
      <NearbyDealers />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
