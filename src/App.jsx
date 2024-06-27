import "./App.css";
import SocialNav from "./components/SocialNav";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import Checkout from "./components/Checkout";
import Popular from "./components/Popular";
import User from "./components/User";
import News from "./components/News";
import Auth from "./components/Auth";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <SocialNav />
      <Navbar />
      <Cover />
      <Checkout />
      <Popular />
      <User />
      <Testimonial/>
      <News />
      <Auth />
      <Footer />
    </div>
  )
}

export default App;
