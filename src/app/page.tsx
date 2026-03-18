import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Categories from "./components/Categories"
import HeroCarousel from "./components/HeroCarousel"
import GiftBoxCarousel from "./components/GiftBoxCarousel"
import ImageVideo from "./components/ImageVideo"
import Featured from "./components/Featured"
import Signature from "./components/Signature"
import FeaturedBox from "./components/FeaturedBox"
import Subscription from "./components/Subscription"
import Customers from "./components/Customers"



export default function HomePage() {
  return (
    <div>
      <div className="bg-white w-[100%]">
      <Header /> 
      <Navbar />
      <HeroCarousel />
      <Categories />
      <GiftBoxCarousel />
      <ImageVideo />
      <Customers />
      <Subscription />
      <Featured/>
      <Signature/>
      <FeaturedBox />
      <Footer />
      </div>
    </div>
  )
}
